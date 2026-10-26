// ============================================================================
// BrainHive Diagnostic System - Supabase Cloud Sync Module
// Project URL: https://lzszmkvbzllaycffkayq.supabase.co
// ============================================================================

(function () {
  const SUPABASE_URL = 'https://lzszmkvbzllaycffkayq.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_r6f09vNvaFxTVwN2rYzGHA_GXyJTfp5';
  const TABLE_ENDPOINT = `${SUPABASE_URL}/rest/v1/diagnostic_records`;

  function createStatusUI() {
    if (document.getElementById('supabaseStatusBanner')) return;

    const bar = document.createElement('div');
    bar.id = 'supabaseStatusBanner';
    bar.style.cssText = [
      'position: fixed',
      'bottom: 14px',
      'right: 14px',
      'z-index: 9999',
      'display: flex',
      'align-items: center',
      'gap: 8px',
      'background: #0f172a',
      'color: #f8fafc',
      'padding: 8px 14px',
      'border-radius: 999px',
      'box-shadow: 0 4px 14px rgba(15,23,42,0.25)',
      'font-size: 0.78rem',
      'font-weight: 700',
      'border: 1px solid #334155',
      'cursor: pointer'
    ].join(';');

    bar.innerHTML = `
      <span id="sbStatusDot" style="width:8px;height:8px;border-radius:50%;background:#38bdf8;display:inline-block;"></span>
      <span id="sbStatusText">Supabase DB 연결 확인 중...</span>
      <button id="sbBtnSyncNow" type="button" style="background:#1e293b;color:#e2e8f0;border:1px solid #475569;border-radius:12px;padding:2px 8px;font-size:0.72rem;cursor:pointer;font-weight:700;">🔄 동기화</button>
    `;

    document.body.appendChild(bar);

    document.getElementById('sbBtnSyncNow').addEventListener('click', (e) => {
      e.stopPropagation();
      pullRecords(true);
    });

    bar.addEventListener('click', () => {
      pullRecords(true);
    });
  }

  function updateStatusUI(state, message) {
    createStatusUI();
    const dot = document.getElementById('sbStatusDot');
    const txt = document.getElementById('sbStatusText');
    if (!dot || !txt) return;

    txt.textContent = message;

    if (state === 'ok') {
      dot.style.background = '#22c55e';
    } else if (state === 'warn') {
      dot.style.background = '#f59e0b';
    } else if (state === 'syncing') {
      dot.style.background = '#38bdf8';
    } else {
      dot.style.background = '#ef4444';
    }
  }

  function toRowPayload(rec) {
    return {
      id: String(rec.id),
      student_name: (rec.student && rec.student.name) ? String(rec.student.name) : '',
      student_school: (rec.student && rec.student.school) ? String(rec.student.school) : '',
      student_grade: (rec.student && rec.student.grade) ? String(rec.student.grade) : '',
      course_type: rec.courseType || '',
      status: rec.status || '',
      confirmed_major: rec.confirmedMajor || '',
      confirmed_sub: rec.confirmedSub || '',
      submitted_at: rec.submittedAt || '',
      record_data: rec,
      updated_at: new Date().toISOString()
    };
  }

  // Supabase DB is the Single Source of Truth!
  async function pullRecords(showToast = false) {
    updateStatusUI('syncing', 'Supabase 동기화 중...');
    try {
      const res = await fetch(`${TABLE_ENDPOINT}?select=id,record_data,updated_at&order=updated_at.desc`, {
        method: 'GET',
        headers: {
          'apikey': SUPABASE_KEY,
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        }
      });

      if (!res.ok) {
        updateStatusUI('error', `Supabase 오류 (${res.status})`);
        return;
      }

      const rows = await res.json();
      const cloudRecords = rows
        .map(r => r.record_data)
        .filter(r => r && r.id);

      // Overwrite localStorage strictly with Supabase DB records
      localStorage.setItem('DIAGNOSTIC_RECORDS', JSON.stringify(cloudRecords));

      updateStatusUI('ok', `Supabase 연동됨 (${cloudRecords.length}건)`);

      if (typeof window.onSupabaseRecordsSynced === 'function') {
        window.onSupabaseRecordsSynced(cloudRecords);
      }

      if (showToast) {
        console.log(`[SupabaseSync] 동기화 완료 (총 ${cloudRecords.length}건)`);
      }
    } catch (err) {
      console.error('[SupabaseSync] pullRecords error:', err);
      updateStatusUI('error', '네트워크 오프라인');
    }
  }

  async function pushRecords(records, refreshAfter = true) {
    if (!Array.isArray(records) || records.length === 0) return;
    const payload = records.filter(r => r && r.id).map(toRowPayload);
    if (payload.length === 0) return;

    try {
      const res = await fetch(`${TABLE_ENDPOINT}?on_conflict=id`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates,return=minimal'
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        updateStatusUI('error', `저장 실패 (${res.status})`);
        return;
      }

      if (refreshAfter) {
        updateStatusUI('ok', `Supabase 연동됨 (${records.length}건)`);
      }
    } catch (err) {
      console.error('[SupabaseSync] pushRecords error:', err);
    }
  }

  async function deleteRecord(recordId) {
    if (!recordId) return;
    try {
      const res = await fetch(`${TABLE_ENDPOINT}?id=eq.${encodeURIComponent(recordId)}`, {
        method: 'DELETE',
        headers: {
          'apikey': SUPABASE_KEY,
          'Content-Type': 'application/json'
        }
      });
      if (res.ok) {
        await pullRecords(false);
      }
    } catch (err) {
      console.error('[SupabaseSync] deleteRecord error:', err);
    }
  }

  window.SupabaseSync = {
    pullRecords,
    pushRecords,
    deleteRecord
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      createStatusUI();
      pullRecords(false);
    });
  } else {
    createStatusUI();
    pullRecords(false);
  }
})();
