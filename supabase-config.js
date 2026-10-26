// ============================================================================
// BrainHive Diagnostic System - Supabase Cloud Sync Module
// Project URL: https://lzszmkvbzllaycffkayq.supabase.co
// ============================================================================

(function () {
  const SUPABASE_URL = 'https://lzszmkvbzllaycffkayq.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_r6f09vNvaFxTVwN2rYzGHA_GXyJTfp5';
  const TABLE_ENDPOINT = `${SUPABASE_URL}/rest/v1/diagnostic_records`;

  const SETUP_SQL = `-- 브레인하이브 학습가치유형검사 Supabase 테이블 생성 SQL
CREATE TABLE IF NOT EXISTS public.diagnostic_records (
    id TEXT PRIMARY KEY,
    student_name TEXT,
    student_school TEXT,
    student_grade TEXT,
    course_type TEXT,
    status TEXT,
    confirmed_major TEXT,
    confirmed_sub TEXT,
    submitted_at TEXT,
    record_data JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.diagnostic_records ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read and write for diagnostic_records" ON public.diagnostic_records;

CREATE POLICY "Allow public read and write for diagnostic_records"
ON public.diagnostic_records
FOR ALL
TO anon, authenticated
USING (true)
WITH CHECK (true);`;

  let statusBadgeEl = null;

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
    statusBadgeEl = bar;

    document.getElementById('sbBtnSyncNow').addEventListener('click', (e) => {
      e.stopPropagation();
      pullRecords(true);
    });

    bar.addEventListener('click', () => {
      if (bar.dataset.needsTable === 'true') {
        showSqlSetupModal();
      } else {
        pullRecords(true);
      }
    });
  }

  function updateStatusUI(state, message, needsTable = false) {
    createStatusUI();
    const dot = document.getElementById('sbStatusDot');
    const txt = document.getElementById('sbStatusText');
    const bar = document.getElementById('supabaseStatusBanner');
    if (!dot || !txt || !bar) return;

    bar.dataset.needsTable = needsTable ? 'true' : 'false';
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

  function showSqlSetupModal() {
    let modal = document.getElementById('sbSqlSetupModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'sbSqlSetupModal';
      modal.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.65);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;';
      modal.innerHTML = `
        <div style="background:#fff;border-radius:16px;max-width:640px;width:100%;padding:24px;box-shadow:0 20px 30px rgba(0,0,0,0.25);">
          <h3 style="margin:0 0 8px;font-size:1.2rem;color:#0f172a;">⚡ 수파베이스(Supabase) 초기 테이블 1회 생성 안내</h3>
          <p style="font-size:0.88rem;color:#475569;line-height:1.5;margin-bottom:14px;">
            수파베이스 서버와 API 키 연결은 <strong>정상 성공</strong>하였습니다!<br>
            이제 아래 <strong>[1. SQL 복사하기]</strong> 버튼을 누른 뒤, <strong>[2. 수파베이스 SQL 에디터 열기]</strong>에 붙여넣고 <strong>Run</strong>을 한 번만 눌러주시면 즉시 클라우드 저장이 시작됩니다.
          </p>
          <textarea id="sbSqlTextarea" readonly style="width:100%;height:210px;font-family:monospace;font-size:0.78rem;padding:12px;border-radius:8px;border:1px solid #cbd5e1;background:#f8fafc;color:#0f172a;margin-bottom:14px;">${SETUP_SQL}</textarea>
          <div style="display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap;">
            <button id="sbBtnCopySql" type="button" style="background:#2563eb;color:#fff;border:none;padding:10px 16px;border-radius:8px;font-weight:700;cursor:pointer;">📋 1. SQL 복사하기</button>
            <a href="https://supabase.com/dashboard/project/lzszmkvbzllaycffkayq/sql/new" target="_blank" style="background:#10b981;color:#fff;text-decoration:none;padding:10px 16px;border-radius:8px;font-weight:700;display:inline-flex;align-items:center;">🚀 2. 수파베이스 SQL 에디터 열기 ↗</a>
            <button id="sbBtnCloseSqlModal" type="button" style="background:#e2e8f0;color:#334155;border:none;padding:10px 14px;border-radius:8px;font-weight:700;cursor:pointer;">닫기</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      document.getElementById('sbBtnCopySql').addEventListener('click', () => {
        navigator.clipboard.writeText(SETUP_SQL).then(() => {
          alert('SQL 구문이 복사되었습니다! 수파베이스 SQL Editor 창에 붙여넣기(Ctrl+V) 후 Run 버튼을 눌러주세요.');
        });
      });

      document.getElementById('sbBtnCloseSqlModal').addEventListener('click', () => {
        modal.style.display = 'none';
      });
    } else {
      modal.style.display = 'flex';
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

  async function pullRecords(showToast = false) {
    updateStatusUI('syncing', 'Supabase 동기화 중...');
    try {
      const res = await fetch(`${TABLE_ENDPOINT}?select=id,record_data,updated_at&order=updated_at.desc`, {
        method: 'GET',
        headers: {
          'apikey': SUPABASE_KEY,
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        if (errBody.code === 'PGRST205') {
          updateStatusUI('warn', '⚠️ Supabase 테이블 생성 필요 (클릭)', true);
          return;
        }
        updateStatusUI('error', `Supabase 오류 (${res.status})`);
        return;
      }

      const rows = await res.json();
      const cloudRecords = rows
        .map(r => r.record_data)
        .filter(r => r && r.id);

      // Merge cloud records with local records
      let localRecords = [];
      try {
        const raw = localStorage.getItem('DIAGNOSTIC_RECORDS');
        localRecords = raw ? JSON.parse(raw) : [];
      } catch (e) {
        localRecords = [];
      }

      const cloudMap = new Map(cloudRecords.map(r => [r.id, r]));
      const localOnly = localRecords.filter(r => r && r.id && !cloudMap.has(r.id));

      // If there are local records not yet in cloud, push them up
      if (localOnly.length > 0) {
        await pushRecords(localOnly, false);
      }

      const merged = [...cloudRecords, ...localOnly];
      localStorage.setItem('DIAGNOSTIC_RECORDS', JSON.stringify(merged));

      updateStatusUI('ok', `Supabase 연동됨 (${merged.length}건)`);

      if (typeof window.onSupabaseRecordsSynced === 'function') {
        window.onSupabaseRecordsSynced(merged);
      }

      if (showToast) {
        console.log(`[SupabaseSync] 동기화 완료 (총 ${merged.length}건)`);
      }
    } catch (err) {
      console.error('[SupabaseSync] pullRecords error:', err);
      updateStatusUI('error', '네트워크 오프라인 (로컬 저장 모드)');
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
        const errBody = await res.json().catch(() => ({}));
        if (errBody.code === 'PGRST205') {
          updateStatusUI('warn', '⚠️ Supabase 테이블 생성 필요 (클릭)', true);
          return;
        }
        updateStatusUI('error', `저장 실패 (${res.status})`);
        return;
      }

      if (refreshAfter) {
        updateStatusUI('ok', `Supabase 저장 완료 (${records.length}건)`);
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
        updateStatusUI('ok', 'Supabase 삭제 반영됨');
      }
    } catch (err) {
      console.error('[SupabaseSync] deleteRecord error:', err);
    }
  }

  window.SupabaseSync = {
    pullRecords,
    pushRecords,
    deleteRecord,
    showSqlSetupModal
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
