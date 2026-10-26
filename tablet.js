document.addEventListener('DOMContentLoaded', () => {
// Student Diagnostic Assessment & Director Management Controller
// 1:1 PPT Visual Layout, 140-Q Response Detail Inspection, & Director Record Deletion

// Global Application State
  const state = {
    student: { date: '', school: '', grade: '', name: '' },
    currentPage: 1,
    totalPages: 14,
    itemsPerPage: 10,
    responses: {},
    scores: {
      major: { '안정형': 0, '의미형': 0, '변화형': 0, '성취형': 0 },
      sub: {}
    },
    selectedRecordId: null,
    confirmedMajor: '안정형',
    confirmedSub: '구조·패턴 고정형'
  };

  const MAJOR_SUB_MAP = {
    '안정형': ['구조·패턴 고정형', '꼼꼼·완벽주의형', '신중·느린 정확형'],
    '의미형': ['감정·공감 우세형', '의미 몰입·과몰입형', '이해 고집형'],
    '변화형': ['즉흥·순간판단형', '산만·관심 이동형', '속도·가벼운 집중형', '속도 과몰입형'],
    '성취형': ['목표형', '완벽주의형', '감정형', '기복형']
  };

  // DOM Elements
  const inputDate = document.getElementById('inputDate');
  const inputSchool = document.getElementById('inputSchool');
  const inputGrade = document.getElementById('inputGrade');
  const inputName = document.getElementById('inputName');
  const btnStartTest = document.getElementById('btnStartTest');

  const coverView = document.getElementById('coverView');
  const testView = document.getElementById('testView');
  const completeView = document.getElementById('completeView');
  const dashboardView = document.getElementById('dashboardView');
  const reportView = document.getElementById('reportView');

  const pageIndicator = document.getElementById('pageIndicator');
  const progressBarInner = document.getElementById('progressBarInner');
  const answeredCountTag = document.getElementById('answeredCountTag');
  const btnTempSave = document.getElementById('btnTempSave');
  const btnResumeTempSession = document.getElementById('btnResumeTempSession');
  const questionList = document.getElementById('questionList');
  const statusGrid140 = document.getElementById('statusGrid140');
  const sidebarProgressText = document.getElementById('sidebarProgressText');

  const btnPrevPage = document.getElementById('btnPrevPage');
  const btnNextPage = document.getElementById('btnNextPage');
  const btnSubmitTest = document.getElementById('btnSubmitTest');

  const btnOpenLookupModal = document.getElementById('btnOpenLookupModal');
  const lookupModal = document.getElementById('lookupModal');
  const lookupName = document.getElementById('lookupName');
  const lookupSchool = document.getElementById('lookupSchool');
  const btnDoLookup = document.getElementById('btnDoLookup');
  const lookupResultsContainer = document.getElementById('lookupResultsContainer');
  const btnCloseLookupModal = document.getElementById('btnCloseLookupModal');

  const responsesDetailModal = document.getElementById('responsesDetailModal');
  const detailModalTitle = document.getElementById('detailModalTitle');
  const responsesDetailTableBody = document.getElementById('responsesDetailTableBody');
  const btnCloseResponsesDetailModal = document.getElementById('btnCloseResponsesDetailModal');

  const btnDirectorLogin = document.getElementById('btnDirectorLogin');
  const btnCompleteDirector = document.getElementById('btnCompleteDirector');
  const directorModal = document.getElementById('directorModal');
  const inputDirectorPassword = document.getElementById('inputDirectorPassword');
  const btnCancelModal = document.getElementById('btnCancelModal');
  const btnConfirmDirectorLogin = document.getElementById('btnConfirmDirectorLogin');

  const studentRecordsContainer = document.getElementById('studentRecordsContainer');
  const dashSelectedStudentMeta = document.getElementById('dashSelectedStudentMeta');
  const btnView140DetailDash = document.getElementById('btnView140DetailDash');
  const majorScoresGrid = document.getElementById('majorScoresGrid');
  const selectMajorConfirm = document.getElementById('selectMajorConfirm');
  const selectSubConfirm = document.getElementById('selectSubConfirm');
  const btnSaveDirectorConfirmation = document.getElementById('btnSaveDirectorConfirmation');
  const btnGenerateReport = document.getElementById('btnGenerateReport');
  const btnGenerateMajorReport = document.getElementById('btnGenerateMajorReport');

  const pptCoverTypeName = document.getElementById('pptCoverTypeName');
  const pptStudentName = document.getElementById('pptStudentName');
  const pptStudentDate = document.getElementById('pptStudentDate');
  const pptStudentSchool = document.getElementById('pptStudentSchool');

  const pptSlide2Title = document.getElementById('pptSlide2Title');
  const pptSlide2Summary = document.getElementById('pptSlide2Summary');
  const pptStrengthsList = document.getElementById('pptStrengthsList');
  const pptStagnationList = document.getElementById('pptStagnationList');

  const pptDangerousList = document.getElementById('pptDangerousList');
  const pptStrategiesCol = document.getElementById('pptStrategiesCol');
  const pptOneLineText = document.getElementById('pptOneLineText');

  const btnBackToDashboard = document.getElementById('btnBackToDashboard');
  const btnPrintReport = document.getElementById('btnPrintReport');

  // Set Default Date to Today
  const todayStr = new Date().toISOString().split('T')[0];
  if (inputDate) inputDate.value = todayStr;


  // Return to Home Screen Event Listeners
  const btnDashboardToHome = document.getElementById('btnDashboardToHome');
  if (btnDashboardToHome) {
    btnDashboardToHome.addEventListener('click', () => {
      showView(coverView);
    });
  }

  const btnNavHome = document.getElementById('btnNavHome');
  if (btnNavHome) {
    btnNavHome.addEventListener('click', () => {
      showView(coverView);
    });
  }

  // View Switcher
  function showView(targetView) {
    [coverView, testView, completeView, dashboardView, reportView].forEach(v => {
      if (v) v.classList.remove('active');
    });
    if (targetView) targetView.classList.add('active');
    window.scrollTo(0, 0);
  }

  // Helper: 1-Click Launch Stage 2 for a specific Student
  function launchStage2ForStudent(studentName) {
    if (!studentName || !studentName.trim()) {
      alert('학생 성명을 입력해 주세요.');
      return;
    }

    const sName = studentName.trim();
    const records = getStoredRecords();
    const rec = records.find(r => r.student && r.student.name === sName);

    if (!rec) {
      alert(`[${sName}] 학생의 1단계 대분류 진단 기록을 찾을 수 없습니다.\n먼저 1단계 대분류 진단을 시작해 주세요.`);
      return;
    }

    if (rec.courseType === '140문항 통합') {
      alert(`[${sName}] 학생은 140문항 통합 진단을 이미 완료하셨습니다.\n(140문항 통합 완료자는 2단계 진단 대상이 아닙니다)`);
      return;
    }

    if (rec.status === '1단계 완료 (원장 확정 대기)') {
      alert(`🔒 [${sName}] 학생의 1단계 대분류 진단이 완료되었으나, 아직 원장님의 대분류 확정 대기 중입니다.\n\n원장님이 1단계 대분류를 확정한 후 이 버튼을 클릭하시면 2단계 진단이 바로 시작됩니다.`);
      return;
    }

    const confMajor = rec.confirmedMajor || '안정형';
    state.student = { ...rec.student };
    state.courseType = 'STAGE2_SUB';
    state.stage2Category = confMajor;
    state.selectedRecordId = rec.id;

    if (confMajor === '안정형') state.activeQuestions = QUESTIONS_STAGE2_STABILITY;
    else if (confMajor === '의미형') state.activeQuestions = QUESTIONS_STAGE2_MEANING;
    else if (confMajor === '변화형') state.activeQuestions = QUESTIONS_STAGE2_CHANGE;
    else if (confMajor === '성취형') state.activeQuestions = QUESTIONS_STAGE2_ACHIEVEMENT;
    else state.activeQuestions = QUESTIONS_STAGE2_STABILITY;

    state.itemsPerPage = 10;
    state.totalPages = Math.ceil(state.activeQuestions.length / 10);
    state.currentPage = 1;
    state.responses = {};

    lookupModal && lookupModal.classList.remove('active');

    renderTestPage();
    renderStatusGrid();
    showView(testView);

    alert(`[${sName}] 학생의 확정된 대분류 [${confMajor}] 2단계 세부 유형 진단(${state.activeQuestions.length}문항)을 시작합니다!`);
  }


  // LocalStorage Submitted Records Database Helper
  function getStoredRecords() {
    try {
      const records = localStorage.getItem('DIAGNOSTIC_RECORDS');
      return records ? JSON.parse(records) : [];
    } catch (e) { return []; }
  }

  function saveStoredRecords(records) {
    localStorage.setItem('DIAGNOSTIC_RECORDS', JSON.stringify(records));
    if (window.SupabaseSync && typeof window.SupabaseSync.pushRecords === 'function') {
      window.SupabaseSync.pushRecords(records);
    }
  }

  window.onSupabaseRecordsSynced = function() {
    if (typeof populateStage1StudentSelect === 'function') populateStage1StudentSelect();
    if (dashboardView && dashboardView.classList.contains('active') && typeof renderDirectorDashboard === 'function') {
      renderDirectorDashboard();
    }
    if (lookupModal && lookupModal.classList.contains('active') && typeof renderLookupResults === 'function') {
      renderLookupResults();
    }
  };

  // Check Temporary Saved Session
  function checkTempSession() {
    try {
      const temp = localStorage.getItem('DIAGNOSTIC_TEMP_SESSION');
      if (btnResumeTempSession) btnResumeTempSession.style.display = temp ? 'inline-block' : 'none';
    } catch (e) {}
  }
  checkTempSession();

  // Resume Temp Session
  if (btnResumeTempSession) {
    btnResumeTempSession.addEventListener('click', () => {
      try {
        const temp = JSON.parse(localStorage.getItem('DIAGNOSTIC_TEMP_SESSION'));
        if (temp) {
          state.student = temp.student;
          state.currentPage = temp.currentPage || 1;
          state.responses = temp.responses || {};
          renderTestPage();
          renderStatusGrid();
          showView(testView);
        }
      } catch (e) {
        alert('임시 저장 데이터를 불러올 수 없습니다.');
      }
    });
  }

  
  // Dynamic Step 1 Student Selection for Stage 2 Entry
  const stage1StudentSelectContainer = document.getElementById('stage1StudentSelectContainer');
  const selectStage1Student = document.getElementById('selectStage1Student');
  const stage1StudentStatusBadge = document.getElementById('stage1StudentStatusBadge');

  function populateStage1StudentSelect() {
    if (!selectStage1Student) return;
    const records = getStoredRecords();
    selectStage1Student.innerHTML = '';

    // Filter out 140-item combined test records from Stage 2 candidates!
    const stage1Records = records.filter(r => r.courseType !== '140문항 통합');
    stage1Records.sort((a, b) => {
      const nameA = (a.student && a.student.name) ? a.student.name.trim() : '';
      const nameB = (b.student && b.student.name) ? b.student.name.trim() : '';
      const cmp = nameA.localeCompare(nameB, 'ko');
      if (cmp !== 0) return cmp;
      return (b.submittedAt || '').localeCompare(a.submittedAt || '');
    });

    if (stage1Records.length === 0) {
      selectStage1Student.innerHTML = '<option value="">2단계 대상인 1단계 대분류 진단 학생 내역이 없습니다.</option>';
      if (stage1StudentStatusBadge) stage1StudentStatusBadge.innerHTML = '<span style="color: #ef4444;">2단계 진단 대상인 1단계 대분류 진단 내역이 없습니다. (140문항 통합 진단 완료 학생은 대상에서 제외됩니다)</span>';
      return;
    }

    stage1Records.forEach(rec => {
      const isConfirmed = rec.status && rec.status.includes('확정 완료');
      const isPending = rec.status === '1단계 완료 (원장 확정 대기)';
      const statusPrefix = isConfirmed ? '✅ [2단계 진입가능]' : (isPending ? '🔒 [원장 확정대기]' : '✅ [진입가능]');
      const majorText = rec.confirmedMajor ? ` - 1단계 확정: ${rec.confirmedMajor}` : '';

      const opt = document.createElement('option');
      opt.value = rec.id;
      opt.textContent = `${statusPrefix} ${rec.student.name} (${rec.student.school} ${rec.student.grade})${majorText}`;
      opt.dataset.recJson = JSON.stringify(rec);
      selectStage1Student.appendChild(opt);
    });

    updateSelectedStage1StudentDetails();
  }

  function updateSelectedStage1StudentDetails() {
    if (!selectStage1Student || !selectStage1Student.value) return;
    const selectedOpt = selectStage1Student.options[selectStage1Student.selectedIndex];
    if (!selectedOpt || !selectedOpt.dataset.recJson) return;

    try {
      const rec = JSON.parse(selectedOpt.dataset.recJson);
      inputName.value = rec.student.name || '';
      inputSchool.value = rec.student.school || '';
      inputGrade.value = rec.student.grade || '';

      if (stage1StudentStatusBadge) {
        if (rec.status === '1단계 완료 (원장 확정 대기)') {
          stage1StudentStatusBadge.innerHTML = `<span style="color: #b45309; background: #fffbeb; padding: 4px 10px; border-radius: 6px; border: 1px solid #fde68a;">🔒 [${rec.student.name}] 학생은 1단계 대분류 진단 완료 후 원장님의 대분류 확정 대기 중입니다.</span>`;
        } else {
          stage1StudentStatusBadge.innerHTML = `<span style="color: #15803d; background: #f0fdf4; padding: 4px 10px; border-radius: 6px; border: 1px solid #86efac;">✅ [${rec.student.name}] 학생은 1단계 대분류가 [${rec.confirmedMajor || '안정형'}] (으)로 확정되어 2단계 세부 유형 진단이 준비되었습니다!</span>`;
        }
      }
    } catch(e) {}
  }

  if (selectStage1Student) {
    selectStage1Student.addEventListener('change', updateSelectedStage1StudentDetails);
  }

  // Course Type Radio Switch Listener
  const courseTypeRadios = document.querySelectorAll('input[name="courseType"]');
  courseTypeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.value === 'STAGE2_SUB') {
        stage1StudentSelectContainer.style.display = 'block';
        populateStage1StudentSelect();
      } else {
        stage1StudentSelectContainer.style.display = 'none';
      }
    });
  });

  // Start Test (Supports 140 Combined & 2-Step Diagnostic Courses)
  if (btnStartTest) {
    btnStartTest.addEventListener('click', (e) => {
      e.preventDefault();
      if (!inputSchool.value.trim() || !inputGrade.value.trim() || !inputName.value.trim()) {
        alert('학교명, 학년, 성명을 모두 입력해 주세요.');
        return;
      }
  
      const courseRad = document.querySelector('input[name="courseType"]:checked');
      const selectedCourse = courseRad ? courseRad.value : 'STAGE1_70';
      state.courseType = selectedCourse;
  
      state.student.date = inputDate.value || todayStr;
      state.student.school = inputSchool.value.trim();
      state.student.grade = inputGrade.value.trim();
      state.student.name = inputName.value.trim();
  
      if (selectedCourse === 'STAGE1_70') {
        state.activeQuestions = QUESTIONS_STAGE1_70;
        state.itemsPerPage = 10;
        state.totalPages = Math.ceil(QUESTIONS_STAGE1_70.length / 10);
      } else if (selectedCourse === 'COMBINED_140') {
        state.activeQuestions = QUESTIONS;
        state.itemsPerPage = 10;
        state.totalPages = Math.ceil(QUESTIONS.length / 10);
      } else if (selectedCourse === 'STAGE2_SUB') {
        const selectedOpt = selectStage1Student ? selectStage1Student.options[selectStage1Student.selectedIndex] : null;
        let rec = null;
        if (selectedOpt && selectedOpt.dataset.recJson) {
          try { rec = JSON.parse(selectedOpt.dataset.recJson); } catch(e) {}
        }
        if (!rec) {
          const records = getStoredRecords();
          rec = records.find(r => r.student && r.student.name === state.student.name);
        }
  
        if (!rec) {
          alert(`[${state.student.name}] 학생의 1단계 대분류 진단 기록이 없습니다.
  먼저 1단계 대분류 진단을 시작해 주세요.`);
          return;
        }
  
        if (rec.status === '1단계 완료 (원장 확정 대기)') {
          alert(`[${state.student.name}] 학생의 1단계 대분류 진단이 완료되었으나, 원장님의 대분류 확정이 완료되지 않았습니다.
  원장님의 1단계 확정 후 2단계 진단을 시작하실 수 있습니다.`);
          return;
        }
  
        const confMajor = rec.confirmedMajor || '안정형';
        state.stage2Category = confMajor;
        state.selectedRecordId = rec.id;
  
        if (confMajor === '안정형') state.activeQuestions = QUESTIONS_STAGE2_STABILITY;
        else if (confMajor === '의미형') state.activeQuestions = QUESTIONS_STAGE2_MEANING;
        else if (confMajor === '변화형') state.activeQuestions = QUESTIONS_STAGE2_CHANGE;
        else if (confMajor === '성취형') state.activeQuestions = QUESTIONS_STAGE2_ACHIEVEMENT;
        else state.activeQuestions = QUESTIONS_STAGE2_STABILITY;
  
        state.itemsPerPage = 10;
        state.totalPages = Math.ceil(state.activeQuestions.length / 10);
      }
  
      state.currentPage = 1;
      state.responses = {};
      renderTestPage();
      renderStatusGrid();
      showView(testView);
    });
  }

  // Render 10 Questions Compact Row Grid (No Scroll Layout)
  function renderTestPage() {
    questionList.innerHTML = '';
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const qBank = state.activeQuestions.length > 0 ? state.activeQuestions : QUESTIONS;
    const endIndex = Math.min(startIndex + state.itemsPerPage, qBank.length);

    pageIndicator.textContent = `페이지 ${state.currentPage} / ${state.totalPages} (${startIndex + 1}~${endIndex}번 문항)`;

    for (let i = startIndex; i < endIndex; i++) {
      const qBank = state.activeQuestions.length > 0 ? state.activeQuestions : QUESTIONS;
      const q = qBank[i];
      const qRow = document.createElement('div');
      qRow.className = 'q-row-compact';
      qRow.dataset.qid = q.id;

      const currentVal = state.responses[q.id];

      qRow.innerHTML = `
        <div class="q-left-compact">
          <span class="q-num-pill">#${q.id}</span>
          <span class="q-text-compact" title="${q.text}">${q.text}</span>
        </div>
        <div class="options-row-compact">
          <div class="chip-compact ${currentVal === 1 ? 'selected' : ''}" data-val="1">1 전혀아니다</div>
          <div class="chip-compact ${currentVal === 2 ? 'selected' : ''}" data-val="2">2 아니다</div>
          <div class="chip-compact ${currentVal === 3 ? 'selected' : ''}" data-val="3">3 보통</div>
          <div class="chip-compact ${currentVal === 4 ? 'selected' : ''}" data-val="4">4 그렇다</div>
          <div class="chip-compact ${currentVal === 5 ? 'selected' : ''}" data-val="5">5 매우그렇다</div>
        </div>
      `;

      const chips = qRow.querySelectorAll('.chip-compact');
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          const val = parseInt(chip.dataset.val);
          state.responses[q.id] = val;
          chips.forEach(c => c.classList.remove('selected'));
          chip.classList.add('selected');
          qRow.classList.remove('unanswered-alert');

          updateProgressUI();
          renderStatusGrid();
        });
      });

      questionList.appendChild(qRow);
    }

    btnPrevPage.style.display = state.currentPage > 1 ? 'inline-block' : 'none';
    if (state.currentPage === state.totalPages) {
      btnNextPage.style.display = 'none';
      btnSubmitTest.style.display = 'inline-block';
    } else {
      btnNextPage.style.display = 'inline-block';
      btnSubmitTest.style.display = 'none';
    }

    updateProgressUI();
  }

  // Update Progress UI
  function updateProgressUI() {
    const answeredCount = Object.keys(state.responses).length;
    const pct = Math.round((answeredCount / QUESTIONS.length) * 100);

    progressBarInner.style.width = `${pct}%`;
    answeredCountTag.textContent = `응답: ${answeredCount} / ${QUESTIONS.length}`;
    sidebarProgressText.textContent = `${pct}%`;
  }

    // Render Status Grid
  function renderStatusGrid() {
    const qBank = state.activeQuestions.length > 0 ? state.activeQuestions : QUESTIONS;
    statusGrid140.innerHTML = '';
    const startIndex = (state.currentPage - 1) * state.itemsPerPage + 1;
    const endIndex = startIndex + state.itemsPerPage - 1;

    for (let i = 1; i <= qBank.length; i++) {
      const cell = document.createElement('div');
      cell.className = 'status-cell';
      cell.textContent = i;

      if (state.responses[i] !== undefined) {
        cell.classList.add('answered');
      }

      if (i >= startIndex && i <= endIndex) {
        cell.classList.add('current-page');
      }

      cell.addEventListener('click', () => {
        const targetPage = Math.ceil(i / state.itemsPerPage);
        if (targetPage !== state.currentPage) {
          state.currentPage = targetPage;
          renderTestPage();
          renderStatusGrid();
        }
      });

      statusGrid140.appendChild(cell);
    }
  }

  // Temporary Save Handler
  if (btnTempSave) {
    btnTempSave.addEventListener('click', () => {
      const tempSession = {
        student: state.student,
        currentPage: state.currentPage,
        responses: state.responses,
        savedAt: new Date().toLocaleString()
      };
      localStorage.setItem('DIAGNOSTIC_TEMP_SESSION', JSON.stringify(tempSession));
      checkTempSession();
      alert(`현재까지 진행된 응답 내역이 임시 저장되었습니다.\n(저장 시각: ${tempSession.savedAt})`);
    });
  }

  // Validate Current Page Unanswered Questions
  function validateCurrentPage() {
    const startIndex = (state.currentPage - 1) * state.itemsPerPage + 1;
    const qBank = state.activeQuestions.length > 0 ? state.activeQuestions : QUESTIONS;
    const endIndex = Math.min(startIndex + state.itemsPerPage - 1, qBank.length);

    let hasUnanswered = false;

    for (let i = startIndex; i <= endIndex; i++) {
      if (state.responses[i] === undefined) {
        hasUnanswered = true;
        const qRow = questionList.querySelector(`[data-qid="${i}"]`);
        if (qRow) qRow.classList.add('unanswered-alert');
      }
    }

    if (hasUnanswered) {
      alert('현재 페이지에 미응답된 문항이 있습니다.\n빨간색 표시된 문항을 확인하고 모두 선택해 주세요.');
      return false;
    }
    return true;
  }

  // Nav Handlers
  if (btnNextPage) {
    btnNextPage.addEventListener('click', () => {
      if (!validateCurrentPage()) return;
      if (state.currentPage < state.totalPages) {
        state.currentPage++;
        renderTestPage();
        renderStatusGrid();
      }
    });
  }

  if (btnPrevPage) {
    btnPrevPage.addEventListener('click', () => {
      if (state.currentPage > 1) {
        state.currentPage--;
        renderTestPage();
        renderStatusGrid();
      }
    });
  }

    // Submit Test & Save Submission Record
  
  // Direct Stage 2 Launch from Completion View
  const btnStartStage2Direct = document.getElementById('btnStartStage2Direct');
  const stage1NextBox = document.getElementById('stage1NextBox');
  const completeTitle = document.getElementById('completeTitle');
  const completeDesc = document.getElementById('completeDesc');

  if (btnStartStage2Direct) {
    btnStartStage2Direct.addEventListener('click', () => {
      launchStage2ForStudent(state.student.name);
    });
  }

  if (btnSubmitTest) {
    btnSubmitTest.addEventListener('click', () => {
      if (!validateCurrentPage()) return;
  
      const qBank = state.activeQuestions.length > 0 ? state.activeQuestions : QUESTIONS;
      const totalAnswered = Object.keys(state.responses).length;
      if (totalAnswered < qBank.length) {
        alert(`총 ${qBank.length}문항 중 ${qBank.length - totalAnswered}개의 미응답 문항이 있습니다.
  모든 문항에 응답 후 제출해 주세요.`);
        return;
      }
  
      const records = getStoredRecords();
      const timeStr = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
  
      if (state.courseType === 'STAGE1_70') {
        // Stage 1 (70 items) Scoring
        const majorScores = { '안정형': 0, '의미형': 0, '변화형': 0, '성취형': 0 };
        qBank.forEach(q => {
          const score = state.responses[q.id] || 0;
          majorScores[q.category] = (majorScores[q.category] || 0) + score;
        });
  
        let maxMajorScore = -1;
        let topMajor = '안정형';
        let maxCount = 0;
        Object.entries(majorScores).forEach(([mName, score]) => {
          if (score > maxMajorScore) {
            maxMajorScore = score;
            topMajor = mName;
            maxCount = 1;
          } else if (score === maxMajorScore) {
            maxCount++;
          }
        });
  
        const isMajorTied = maxCount > 1;
  
        const newRecord = {
          id: `REC_S1_${Date.now()}`,
          courseType: '1단계 대분류',
          student: { ...state.student },
          stage1Responses: { ...state.responses },
          scores: { major: majorScores, sub: {} },
          confirmedMajor: topMajor,
          confirmedSub: '',
          isMajorTied: isMajorTied,
          status: '1단계 완료 (원장 확정 대기)',
          submittedAt: `${todayStr} ${timeStr}`
        };
  
        records.unshift(newRecord);
        saveStoredRecords(records);
  
        localStorage.removeItem('DIAGNOSTIC_TEMP_SESSION');
        checkTempSession();
  
        alert(`🎉 진단 검사가 성공적으로 제출되었습니다!\n\n응답 결과는 원장님(선생님)의 심층 분석 후 리포트로 제공됩니다.`);
        showView(completeView);
  
      } else if (state.courseType === 'STAGE2_SUB') {
        // Stage 2 (30~40 items) Scoring
        const subScores = {};
        qBank.forEach(q => {
          const score = state.responses[q.id] || 0;
          const fullSubKey = `${state.stage2Category}-${q.subCategory}`;
          subScores[fullSubKey] = (subScores[fullSubKey] || 0) + score;
        });
  
        let maxSubScore = -1;
        let topSubFull = '';
        let maxCount = 0;
        Object.entries(subScores).forEach(([fullSubKey, score]) => {
          if (score > maxSubScore) {
            maxSubScore = score;
            topSubFull = fullSubKey;
            maxCount = 1;
          } else if (score === maxSubScore) {
            maxCount++;
          }
        });
  
        const isSubTied = maxCount > 1;
        const topSubTitle = topSubFull ? topSubFull.split('-')[1] : '';
  
        const idx = records.findIndex(r => r.id === state.selectedRecordId || (r.student && r.student.name === state.student.name));
        if (idx !== -1) {
          records[idx].courseType = '2단계 완료';
          records[idx].stage2Responses = { ...state.responses };
          records[idx].scores.sub = subScores;
          records[idx].confirmedSub = topSubTitle;
          records[idx].isSubTied = isSubTied;
          records[idx].status = '2단계 완료 (원장 최종 확정 대기)';
          records[idx].submittedAt = `${todayStr} ${timeStr}`;
          saveStoredRecords(records);
        }
  
        localStorage.removeItem('DIAGNOSTIC_TEMP_SESSION');
        checkTempSession();
  
        alert(`🎉 2단계 세부 유형 진단이 성공적으로 제출되었습니다!
  
  원장님의 최종 확정 후 1:1 레포트 결과를 확인하실 수 있습니다.`);
        showView(completeView);
  
      } else {
        // Combined 140 Items Scoring
        calculateScores();
  
        let maxMajorScore = -1;
        let proposedMajor = '안정형';
        Object.entries(state.scores.major).forEach(([mName, score]) => {
          if (score > maxMajorScore) { maxMajorScore = score; proposedMajor = mName; }
        });
  
        const subs = MAJOR_SUB_MAP[proposedMajor] || [];
        let maxSubScore = -1;
        let proposedSubFull = `${proposedMajor}-${subs[0]}`;
        subs.forEach(sTitle => {
          const fullKey = `${proposedMajor}-${sTitle}`;
          const subScore = state.scores.sub[fullKey] || 0;
          if (subScore > maxSubScore) { maxSubScore = subScore; proposedSubFull = fullKey; }
        });
  
        const newRecord = {
          id: 'REC_' + Date.now(),
          courseType: '140문항 통합',
          student: { ...state.student },
          responses: { ...state.responses },
          scores: state.scores,
          confirmedMajor: proposedMajor,
          confirmedSub: proposedSubFull.split('-')[1],
          status: '확정 완료',
          submittedAt: `${todayStr} ${timeStr}`
        };
  
        records.unshift(newRecord);
        saveStoredRecords(records);
  
        localStorage.removeItem('DIAGNOSTIC_TEMP_SESSION');
        checkTempSession();
  
        showView(completeView);
      }
    });
  }

  // Score Calculation Helper
  function calculateScores() {
    state.scores.major = { '안정형': 0, '의미형': 0, '변화형': 0, '성취형': 0 };
    state.scores.sub = {};

    REPORTS && Object.keys(REPORTS).forEach(key => { state.scores.sub[key] = 0; });

    QUESTIONS.forEach(q => {
      const score = state.responses[q.id] || 0;
      state.scores.major[q.mainCategory] = (state.scores.major[q.mainCategory] || 0) + score;
      const subKey = `${q.mainCategory}-${q.subCategory}`;
      state.scores.sub[subKey] = (state.scores.sub[subKey] || 0) + score;
    });
  }

  // Render 140 Question Responses Detail Modal
  function render140ResponsesDetail(responses, studentName) {
    detailModalTitle.textContent = `📋 [${studentName || state.student.name || '학생'}] 140문항 세부 응답 내역`;
    responsesDetailTableBody.innerHTML = '';

    const labelMap = { 1: '1점 (전혀아니다)', 2: '2점 (아니다)', 3: '3점 (보통)', 4: '4점 (그렇다)', 5: '5점 (매우그렇다)' };

    QUESTIONS.forEach(q => {
      const score = responses[q.id] || 0;
      const tr = document.createElement('tr');
      tr.style.borderBottom = '1px solid #e2e8f0';

      const isHigh = score >= 4;
      const scoreBadgeStyle = isHigh ? 'background: #dcfce7; color: #15803d; font-weight: bold;' : 'background: #f1f5f9; color: #475569;';

      tr.innerHTML = `
        <td style="padding: 6px 10px; font-weight: 700;">#${q.id}</td>
        <td style="padding: 6px 10px; color: #64748b; font-size: 0.8rem;">${q.mainCategory} / ${q.subCategory}</td>
        <td style="padding: 6px 10px;">${q.text}</td>
        <td style="padding: 6px 10px; text-align: center;">
          <span style="display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; ${scoreBadgeStyle}">
            ${labelMap[score] || score + '점'}
          </span>
        </td>
      `;

      responsesDetailTableBody.appendChild(tr);
    });

    responsesDetailModal.classList.add('active');
  }

  if (btnCloseResponsesDetailModal) {
    btnCloseResponsesDetailModal.addEventListener('click', () => {
      responsesDetailModal.classList.remove('active');
    });
  }

  if (btnView140DetailDash) {
    btnView140DetailDash.addEventListener('click', () => {
      render140ResponsesDetail(state.responses, state.student.name);
    });
  }

  // Student Survey Lookup Handlers (Supports Input-Free & Instant Auto-Rendering)
  function renderLookupResults() {
    const sName = lookupName ? lookupName.value.trim() : '';
    const sSchool = lookupSchool ? lookupSchool.value.trim() : '';

    const records = getStoredRecords();
    const filtered = records.filter(r => {
      const matchName = !sName || (r.student && r.student.name && r.student.name.includes(sName));
      const matchSchool = !sSchool || (r.student && r.student.school && r.student.school.includes(sSchool));
      return matchName && matchSchool;
    });

    filtered.sort((a, b) => {
      const nameA = (a.student && a.student.name) ? a.student.name.trim() : '';
      const nameB = (b.student && b.student.name) ? b.student.name.trim() : '';
      const cmp = nameA.localeCompare(nameB, 'ko');
      if (cmp !== 0) return cmp;
      return (b.submittedAt || '').localeCompare(a.submittedAt || '');
    });

    if (!lookupResultsContainer) return;
    lookupResultsContainer.innerHTML = '';

    if (filtered.length === 0) {
      lookupResultsContainer.innerHTML = '<p style="font-size: 0.85rem; color: #ef4444; text-align: center; padding: 15px;">일치하는 제출 내역이 없습니다.</p>';
      return;
    }

    filtered.forEach(rec => {
      const item = document.createElement('div');
      item.className = 'student-record-item';
      item.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="record-name">${rec.student.name} (${rec.student.school} ${rec.student.grade})</span>
          <span class="record-status-tag ${rec.status === '확정 완료' ? 'confirmed' : 'pending'}">${rec.status}</span>
        </div>
        <div class="record-meta">제출일: ${rec.submittedAt} | 확정 유형: ${rec.confirmedMajor || '미확정'}${rec.confirmedSub ? '-' + rec.confirmedSub : ''}</div>
        <div style="margin-top: 6px; display: flex; gap: 8px; flex-wrap: wrap;">
          ${rec.status === '1단계 확정 완료 (2단계 대기)' ? '<button class="btn-lookup-start-s2 btn-nav-compact" style="background: #0d9488; color: #fff; font-size: 0.78rem; padding: 4px 10px; font-weight: 800;">🚀 2단계 세부유형 진단 바로 시작</button>' : ''}
          <button class="btn-lookup-view-report btn-nav-compact" style="background: var(--primary-navy); color: #fff; font-size: 0.75rem; padding: 3px 8px;">📑 PPT 3장 레포트 보기</button>
          <button class="btn-lookup-view-detail btn-nav-compact" style="background: #e0f2fe; color: #0369a1; font-size: 0.75rem; padding: 3px 8px;">📋 세부 응답 보기</button>
        </div>
      `;

      item.querySelector('.btn-lookup-view-report').addEventListener('click', (e) => {
        e.stopPropagation();
        if (lookupModal) lookupModal.classList.remove('active');
        state.student = rec.student;
        state.responses = rec.responses || rec.stage1Responses || {};
        state.scores = rec.scores;
        state.confirmedMajor = rec.confirmedMajor;
        state.confirmedSub = rec.confirmedSub;

        const fullKey = `${rec.confirmedMajor}-${rec.confirmedSub}`;
        const reportData = REPORTS[fullKey] || REPORTS['안정형-구조·패턴 고정형'];
        renderReport(reportData);
        showView(reportView);
      });

      item.querySelector('.btn-lookup-view-detail').addEventListener('click', (e) => {
        e.stopPropagation();
        render140ResponsesDetail(rec.responses || rec.stage1Responses || {}, rec.student.name);
      });

      const btnS2 = item.querySelector('.btn-lookup-start-s2');
      if (btnS2) {
        btnS2.addEventListener('click', (e) => {
          e.stopPropagation();
          launchStage2ForStudent(rec.student.name);
        });
      }

      lookupResultsContainer.appendChild(item);
    });
  }

  if (btnOpenLookupModal) {
    btnOpenLookupModal.addEventListener('click', () => {
      if (lookupModal) lookupModal.classList.add('active');
      if (lookupName) lookupName.value = '';
      if (lookupSchool) lookupSchool.value = '';
      renderLookupResults();
    });
  }

  if (btnCloseLookupModal) {
    btnCloseLookupModal.addEventListener('click', () => {
      if (lookupModal) lookupModal.classList.remove('active');
    });
  }

  if (btnDoLookup) {
    btnDoLookup.addEventListener('click', () => {
      renderLookupResults();
    });
  }

  // Director Password Modal Handlers
  function openDirectorModal() {
    if (directorModal) {
      directorModal.classList.add('active');
      if (inputDirectorPassword) {
        inputDirectorPassword.value = '';
        setTimeout(() => inputDirectorPassword.focus(), 50);
      }
    }
  }

  function handleDirectorLogin() {
    const pw = inputDirectorPassword ? inputDirectorPassword.value.trim() : '';
    if (pw === '3995' || pw === '1234') {
      if (directorModal) directorModal.classList.remove('active');
      renderDirectorDashboard();
      showView(dashboardView);
    } else {
      alert('비밀번호가 올바르지 않습니다. (비밀번호: 3995)');
      if (inputDirectorPassword) {
        inputDirectorPassword.value = '';
        inputDirectorPassword.focus();
      }
    }
  }

  if (btnDirectorLogin) {
    btnDirectorLogin.addEventListener('click', (e) => {
      e.preventDefault();
      openDirectorModal();
    });
  }
  
  const btnCompleteHome = document.getElementById('btnCompleteHome');
  if (btnCompleteHome) {
    btnCompleteHome.addEventListener('click', (e) => {
      e.preventDefault();
      showView(coverView);
    });
  }

  if (btnCancelModal) {
    btnCancelModal.addEventListener('click', (e) => {
      e.preventDefault();
      if (directorModal) directorModal.classList.remove('active');
    });
  }

  if (btnConfirmDirectorLogin) {
    btnConfirmDirectorLogin.addEventListener('click', (e) => {
      e.preventDefault();
      handleDirectorLogin();
    });
  }

  if (inputDirectorPassword) {
    inputDirectorPassword.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleDirectorLogin();
      }
    });
  }

  // Director Delete Student Record Handler
  function deleteStudentRecord(recordId, studentName) {
    if (confirm(`정말로 [${studentName}] 학생의 검사 기록을 삭제하시겠습니까?\n삭제된 내역은 복구할 수 없습니다.`)) {
      let records = getStoredRecords();
      records = records.filter(r => r.id !== recordId);
      saveStoredRecords(records);
      if (window.SupabaseSync && typeof window.SupabaseSync.deleteRecord === 'function') {
        window.SupabaseSync.deleteRecord(recordId);
      }

      if (state.selectedRecordId === recordId) {
        state.selectedRecordId = null;
      }
      alert(`[${studentName}] 학생의 내역이 삭제되었습니다.`);
      renderDirectorDashboard();
    }
  }

  // Pre-seed initial sample records if localStorage is empty or Choi Cheol is missing (Ensures direct file:/// opening shows 최철 data immediately)
  function initSeedDataIfEmpty() {
    return; // Disabled sample seed in online version
    let records = getStoredRecords();
    const hasChoi = records.some(r => r.student && r.student.name === '최철');

    if (records.length === 0 || !hasChoi) {
      const sampleResponses = {};
      for (let i = 1; i <= 140; i++) {
        if (i >= 81 && i <= 90) sampleResponses[i] = 5;
        else if (i >= 61 && i <= 100) sampleResponses[i] = 4;
        else sampleResponses[i] = 3;
      }

      const hongRecord = {
        id: 'REC_SAMPLE_HONG_001',
        student: {
          name: '홍길동',
          school: '대치중',
          grade: '2학년',
          date: todayStr
        },
        responses: sampleResponses,
        scores: {
          major: { '안정형': 90, '의미형': 90, '변화형': 170, '성취형': 120 },
          sub: { '변화형-속도·가벼운 집중형': 48, '변화형-즉흥·순간판단형': 40, '변화형-산만·관심 이동형': 42, '변화형-속도 과몰입형': 40 }
        },
        confirmedMajor: '변화형',
        confirmedSub: '속도·가벼운 집중형',
        status: '확정 완료',
        submittedAt: `${todayStr} 14:00`
      };

      const choiResponses = {};
      for (let i = 1; i <= 140; i++) {
        if (i >= 91 && i <= 100) choiResponses[i] = 5;
        else if (i >= 81 && i <= 120) choiResponses[i] = 4;
        else choiResponses[i] = 3;
      }

      const choiRecord = {
        id: 'REC_SAMPLE_CHOI_002',
        student: {
          name: '최철',
          school: '대치중',
          grade: '3학년',
          date: todayStr
        },
        responses: choiResponses,
        scores: {
          major: { '안정형': 85, '의미형': 95, '변화형': 165, '성취형': 130 },
          sub: { '변화형-속도·가벼운 집중형': 46, '변화형-즉흥·순간판단형': 42, '변화형-산만·관심 이동형': 39, '변화형-속도 과몰입형': 38 }
        },
        confirmedMajor: '변화형',
        confirmedSub: '속도·가벼운 집중형',
        status: '확정 완료',
        submittedAt: `${todayStr} 15:30`
      };

      if (records.length === 0) {
        records = [choiRecord, hongRecord];
      } else if (!hasChoi) {
        records.unshift(choiRecord);
      }

      saveStoredRecords(records);
    }
  }

  initSeedDataIfEmpty();

  
  // Manual Student Registration Modal Handlers (2-1단계 수동 등록)
  const registerStudentModal = document.getElementById('registerStudentModal');
  const btnOpenRegisterModal = document.getElementById('btnOpenRegisterModal');
  const btnCancelRegisterModal = document.getElementById('btnCancelRegisterModal');
  const btnSaveRegisterStudent = document.getElementById('btnSaveRegisterStudent');
  const regStudentName = document.getElementById('regStudentName');
  const regStudentSchool = document.getElementById('regStudentSchool');
  const regStudentGrade = document.getElementById('regStudentGrade');
  const regMajorCategory = document.getElementById('regMajorCategory');

  if (btnOpenRegisterModal) {
    btnOpenRegisterModal.addEventListener('click', () => {
      if (registerStudentModal) {
        registerStudentModal.classList.add('active');
        if (regStudentName) regStudentName.value = '';
        if (regStudentSchool) regStudentSchool.value = '';
        if (regStudentGrade) regStudentGrade.value = '';
      }
    });
  }

  if (btnCancelRegisterModal) {
    btnCancelRegisterModal.addEventListener('click', () => {
      if (registerStudentModal) registerStudentModal.classList.remove('active');
    });
  }

  if (btnSaveRegisterStudent) {
    btnSaveRegisterStudent.addEventListener('click', () => {
      const name = regStudentName ? regStudentName.value.trim() : '';
      const school = regStudentSchool ? regStudentSchool.value.trim() : '';
      const grade = regStudentGrade ? regStudentGrade.value.trim() : '';
      const major = regMajorCategory ? regMajorCategory.value : '안정형';

      if (!name || !school || !grade) {
        alert('학생 성명, 학교명, 학년을 모두 입력해 주세요.');
        return;
      }

      const records = getStoredRecords();
      const timeStr = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

      const newRec = {
        id: `REC_MANUAL_${Date.now()}`,
        courseType: '2-1단계 수동등록',
        student: { name, school, grade, date: todayStr },
        scores: { major: { [major]: 100 }, sub: {} },
        confirmedMajor: major,
        confirmedSub: '',
        status: '1단계 확정 완료 (2단계 대기)',
        submittedAt: `${todayStr} ${timeStr}`
      };

      records.unshift(newRec);
      saveStoredRecords(records);

      state.selectedRecordId = newRec.id;
      if (registerStudentModal) registerStudentModal.classList.remove('active');

      renderDirectorDashboard();
      alert(`[${name}] 학생이 대분류 [${major}] (으)로 수동 등록되었습니다!\n이제 학생이 시작 화면에서 2단계 세부 유형 진단을 바로 시작할 수 있습니다.`);
    });
  }

  
  // Direct Start 2-2 Test from Manual Registration Modal
  const btnStartRegisterDirect = document.getElementById('btnStartRegisterDirect');

  if (btnStartRegisterDirect) {
    btnStartRegisterDirect.addEventListener('click', () => {
      const name = regStudentName ? regStudentName.value.trim() : '';
      const school = regStudentSchool ? regStudentSchool.value.trim() : '';
      const grade = regStudentGrade ? regStudentGrade.value.trim() : '';
      const major = regMajorCategory ? regMajorCategory.value : '안정형';

      if (!name || !school || !grade) {
        alert('학생 성명, 학교명, 학년을 모두 입력해 주세요.');
        return;
      }

      const records = getStoredRecords();
      const timeStr = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

      const newRec = {
        id: `REC_MANUAL_${Date.now()}`,
        courseType: '2-1단계 수동등록',
        student: { name, school, grade, date: todayStr },
        scores: { major: { [major]: 100 }, sub: {} },
        confirmedMajor: major,
        confirmedSub: '',
        status: '1단계 확정 완료 (2단계 대기)',
        submittedAt: `${todayStr} ${timeStr}`
      };

      records.unshift(newRec);
      saveStoredRecords(records);

      state.selectedRecordId = newRec.id;
      if (registerStudentModal) registerStudentModal.classList.remove('active');

      renderDirectorDashboard();
      launchStage2ForStudent(name);
    });
  }

  // Director Unconfirm Handler (원장 확정 취소)
  const btnUnconfirmDirector = document.getElementById('btnUnconfirmDirector');

  if (btnUnconfirmDirector) {
    btnUnconfirmDirector.addEventListener('click', () => {
      if (!state.selectedRecordId) {
        alert('확정을 취소할 학생을 목록에서 선택해 주세요.');
        return;
      }

      const records = getStoredRecords();
      const idx = records.findIndex(r => r.id === state.selectedRecordId);
      if (idx !== -1) {
        const cur = records[idx];

        if (cur.status === '1단계 확정 완료 (2단계 대기)') {
          if (confirm(`[${cur.student.name}] 학생의 1단계 대분류 확정을 취소하고 대기 상태로 돌리시겠습니까?`)) {
            cur.status = '1단계 완료 (원장 확정 대기)';
            saveStoredRecords(records);
            alert(`[${cur.student.name}] 학생의 1단계 확정이 취소되었습니다. (확정 대기 상태로 변경됨)`);
            renderDirectorDashboard();
          }
        } else if (cur.status === '확정 완료') {
          if (confirm(`[${cur.student.name}] 학생의 최종 확정을 취소하시겠습니까?`)) {
            cur.status = cur.stage2Responses ? '2단계 완료 (원장 최종 확정 대기)' : '1단계 완료 (원장 확정 대기)';
            saveStoredRecords(records);
            alert(`[${cur.student.name}] 학생의 최종 확정이 취소되었습니다. (이전 확정 대기 상태로 변경됨)`);
            renderDirectorDashboard();
          }
        } else if (cur.status === '2단계 완료 (원장 최종 확정 대기)') {
          if (confirm(`[${cur.student.name}] 학생의 2단계 확정을 취소하고 1단계 완료 상태로 돌리시겠습니까?`)) {
            cur.status = '1단계 확정 완료 (2단계 대기)';
            saveStoredRecords(records);
            alert(`[${cur.student.name}] 학생의 2단계 제출이 1단계 완료 상태로 변경되었습니다.`);
            renderDirectorDashboard();
          }
        } else {
          alert('현재 이미 미확정 / 확정 대기 상태입니다.');
        }
      }
    });
  }

  // Backup & Restore Handlers for Offline Tablets & PCs
  const btnBackupRecords = document.getElementById('btnBackupRecords');
  const btnRestoreRecords = document.getElementById('btnRestoreRecords');
  const inputRestoreFile = document.getElementById('inputRestoreFile');

  if (btnBackupRecords) {
    btnBackupRecords.addEventListener('click', () => {
      const records = getStoredRecords();
      if (records.length === 0) {
        alert('백업할 제출 학생 내역이 없습니다.');
        return;
      }

      const jsonStr = JSON.stringify(records, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `유주코칭_진단검사_백업_${todayStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      alert(`[유주코칭&컨설팅] 총 ${records.length}건의 학생 제출 내역이 백업 파일(JSON)로 저장되었습니다.\n\n이 백업 파일을 USB나 태블릿/PC로 옮겨 불러오기 하실 수 있습니다.`);
    });
  }

  if (btnRestoreRecords && inputRestoreFile) {
    if (btnRestoreRecords) {
      btnRestoreRecords.addEventListener('click', () => {
        inputRestoreFile.click();
      });
    }

    if (inputRestoreFile) {
      inputRestoreFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
  
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const importedRecords = JSON.parse(event.target.result);
            if (!Array.isArray(importedRecords)) {
              throw new Error('올바른 백업 파일 형식이 아닙니다.');
            }
  
            let currentRecords = getStoredRecords();
            let addedCount = 0;
  
            importedRecords.forEach(impRec => {
              if (!impRec.id) return;
              const exists = currentRecords.some(r => r.id === impRec.id);
              if (!exists) {
                currentRecords.push(impRec);
                addedCount++;
              }
            });
  
            saveStoredRecords(currentRecords);
            alert(`[성공] ${addedCount}건의 제출 내역을 성공적으로 복구/불러왔습니다!`);
            renderDirectorDashboard();
          } catch (err) {
            alert('백업 파일을 불러오는 중 오류가 발생했습니다: ' + err.message);
          }
        };
        reader.readAsText(file);
        inputRestoreFile.value = '';
      });
    }
  }

    // Director Dashboard Renderer
  function renderDirectorDashboard() {
    const records = getStoredRecords();
    records.sort((a, b) => {
      const nameA = (a.student && a.student.name) ? a.student.name.trim() : '';
      const nameB = (b.student && b.student.name) ? b.student.name.trim() : '';
      const cmp = nameA.localeCompare(nameB, 'ko');
      if (cmp !== 0) return cmp;
      return (b.submittedAt || '').localeCompare(a.submittedAt || '');
    });
    studentRecordsContainer.innerHTML = '';

    if (records.length === 0) {
      studentRecordsContainer.innerHTML = '<p style="font-size: 0.85rem; color: #94a3b8; padding: 15px; text-align: center;">제출된 학생 검사 내역이 없습니다.</p>';
      dashSelectedStudentMeta.textContent = '선택된 학생 없음';
      majorScoresGrid.innerHTML = '';
      return;
    }

    records.forEach(rec => {
      const item = document.createElement('div');
      item.className = `student-record-item ${rec.id === state.selectedRecordId ? 'selected' : ''}`;
      
      const isConfirmed = rec.status === '확정 완료';
      const statusTagClass = isConfirmed ? 'confirmed' : (rec.status.includes('확정') ? 'stage-confirmed' : 'pending');
      const tieTag = (rec.isMajorTied || rec.isSubTied) ? '<span style="background: #fffbeb; color: #b45309; font-size: 0.75rem; font-weight: 800; padding: 2px 6px; border-radius: 4px; border: 1px solid #d97706; margin-left: 4px;">👑동점</span>' : '';
      const courseLabel = rec.courseType ? `[${rec.courseType}] ` : '';

      item.innerHTML = `
        <button class="record-delete-btn">🗑️ 삭제</button>
        <div class="record-name">${rec.student.name} <span style="font-size: 0.8rem; font-weight: normal;">(${rec.student.school} ${rec.student.grade})</span>${tieTag}</div>
        <div class="record-meta">${courseLabel}${rec.submittedAt}</div>
        <span class="record-status-tag ${statusTagClass}">${rec.status}: ${rec.confirmedMajor}${rec.confirmedSub ? '-' + rec.confirmedSub : ''}</span>
        <button class="btn-student-report" style="margin-top: 5px;">📋 학생 리포트</button>
      `;

      item.querySelector('.record-delete-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteStudentRecord(rec.id, rec.student.name);
      });

      const btnSrp = item.querySelector('.btn-student-report');
      if (btnSrp) {
        btnSrp.addEventListener('click', (e) => {
          e.stopPropagation();
          renderStudentPersonalReport(rec);
        });
      }

      item.addEventListener('click', () => {
        state.selectedRecordId = rec.id;
        state.student = rec.student;
        state.responses = rec.responses || rec.stage1Responses || {};
        state.scores = rec.scores;
        state.confirmedMajor = rec.confirmedMajor;
        state.confirmedSub = rec.confirmedSub;

        renderDirectorDashboard();
      });

      studentRecordsContainer.appendChild(item);
    });
    if (!state.selectedRecordId && records.length > 0) {
      const rec = records[0];
      state.selectedRecordId = rec.id;
      state.student = rec.student;
      state.responses = rec.responses || rec.stage1Responses || {};
      state.scores = rec.scores;
      state.confirmedMajor = rec.confirmedMajor;
      state.confirmedSub = rec.confirmedSub;
    }

    if (state.selectedRecordId) {
      const currentRec = records.find(r => r.id === state.selectedRecordId);
      if (currentRec) {
        dashSelectedStudentMeta.textContent = `학생: ${currentRec.student.name} (${currentRec.student.school} ${currentRec.student.grade}) | 상태: ${currentRec.status} | 제출일: ${currentRec.submittedAt}`;
        renderMajorScoresGrid(currentRec.scores, currentRec);

        selectMajorConfirm.value = currentRec.confirmedMajor || '안정형';
        updateSubCategorySelect(currentRec.confirmedMajor || '안정형', currentRec.confirmedSub || '');

        if (currentRec.status === '1단계 완료 (원장 확정 대기)') {
          btnSaveDirectorConfirmation.textContent = '💾 1단계 대분류 확정 및 저장';
        } else {
          btnSaveDirectorConfirmation.textContent = '💾 대표 유형 최종 확정 및 저장';
        }
      }
    }
  }

    // Render Scores Breakdown Grid (Includes Tie Warning Alerts)
  function renderMajorScoresGrid(scores, currentRec) {
    majorScoresGrid.innerHTML = '';
    if (!scores || !scores.major) return;

    if (currentRec && currentRec.isMajorTied && currentRec.status.includes('1단계')) {
      const tieAlert = document.createElement('div');
      tieAlert.style.cssText = 'grid-column: 1 / -1; background: #fffbeb; border: 1.5px solid #d97706; border-radius: 8px; padding: 10px 14px; color: #b45309; font-weight: 800; font-size: 0.85rem; margin-bottom: 8px;';
      tieAlert.textContent = '⚠️ 1단계 대분류 점수가 동점입니다. 오른쪽 [1. 대표 대분류 지정]에서 1개를 최종 선택하여 확정해 주세요.';
      majorScoresGrid.appendChild(tieAlert);
    } else if (currentRec && currentRec.isSubTied && currentRec.status.includes('2단계')) {
      const tieAlert = document.createElement('div');
      tieAlert.style.cssText = 'grid-column: 1 / -1; background: #fffbeb; border: 1.5px solid #d97706; border-radius: 8px; padding: 10px 14px; color: #b45309; font-weight: 800; font-size: 0.85rem; margin-bottom: 8px;';
      tieAlert.textContent = '⚠️ 2단계 세부유형 점수가 동점입니다. 오른쪽 [2. 대표 중분류 지정]에서 1개를 최종 선택하여 최종 확정해 주세요.';
      majorScoresGrid.appendChild(tieAlert);
    }

    let maxScore = -1;
    let topMajor = '안정형';

    Object.entries(scores.major).forEach(([mName, sc]) => {
      if (sc > maxScore) { maxScore = sc; topMajor = mName; }
    });

    Object.entries(scores.major).forEach(([mName, totalScore]) => {
      const isTop = mName === topMajor;
      const card = document.createElement('div');
      card.className = `major-score-card ${isTop ? 'top-recommended' : ''}`;

      const subKeys = MAJOR_SUB_MAP[mName] || [];
      let subItemsHtml = '';

      subKeys.forEach(sTitle => {
        const fullSubKey = `${mName}-${sTitle}`;
        const subScore = (scores.sub && scores.sub[fullSubKey]) ? scores.sub[fullSubKey] : 0;
        subItemsHtml += `
          <div class="sub-score-item">
            <span>${sTitle}</span>
            <span style="font-weight: 700;">${subScore > 0 ? subScore + '점' : '-'}</span>
          </div>
        `;
      });

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 1rem; margin-bottom: 6px;">
          <span>${mName} ${isTop ? '👑(추천)' : ''}</span>
          <span style="color: var(--accent-gold);">${totalScore}점</span>
        </div>
        <div>${subItemsHtml}</div>
        <button class="btn-major-report" data-major="${mName}" style="width: 100%; margin-top: 10px; background: linear-gradient(135deg, #0284c7, #0369a1); color: #ffffff; border: none; border-radius: 6px; padding: 7px 10px; font-size: 0.82rem; font-weight: 800; cursor: pointer; box-shadow: 0 2px 4px rgba(2,132,199,0.25);">
          📘 ${mName} 종합 리포트 (4장) 보기
        </button>
      `;

      majorScoresGrid.appendChild(card);
    });
  }

  // Update SubCategory Dropdown
  function updateSubCategorySelect(majorName, defaultSub) {
    selectSubConfirm.innerHTML = '';
    const subs = MAJOR_SUB_MAP[majorName] || [];

    let maxSubScore = -1;
    let topSubTitle = subs[0];

    subs.forEach(sTitle => {
      const fullKey = `${majorName}-${sTitle}`;
      const sc = state.scores.sub[fullKey] || 0;
      if (sc > maxSubScore) { maxSubScore = sc; topSubTitle = sTitle; }

      const opt = document.createElement('option');
      opt.value = sTitle;
      opt.textContent = `${sTitle} (${sc}점)`;
      selectSubConfirm.appendChild(opt);
    });

    selectSubConfirm.value = defaultSub || topSubTitle;
  }

  if (selectMajorConfirm) {
    selectMajorConfirm.addEventListener('change', (e) => {
      updateSubCategorySelect(e.target.value);
    });
  }

    // Save Confirmation Handler (Supports Stage 1 Major Confirmation & Stage 2 Final Confirmation)
  if (btnSaveDirectorConfirmation) {
    btnSaveDirectorConfirmation.addEventListener('click', () => {
      if (!state.selectedRecordId) {
        alert('확정할 학생을 목록에서 선택해 주세요.');
        return;
      }
  
      const confirmedMajor = selectMajorConfirm.value;
      const confirmedSub = selectSubConfirm.value;
  
      const records = getStoredRecords();
      const idx = records.findIndex(r => r.id === state.selectedRecordId);
      if (idx !== -1) {
        const currentRec = records[idx];
        currentRec.confirmedMajor = confirmedMajor;
  
        if (currentRec.status === '1단계 완료 (원장 확정 대기)') {
          currentRec.status = '1단계 확정 완료 (2단계 대기)';
          saveStoredRecords(records);
          state.confirmedMajor = confirmedMajor;
  
          alert(`[${currentRec.student.name}] 학생의 1단계 대분류가 [${confirmedMajor}] (으)로 확정 저장되었습니다.
  이제 학생이 2단계 세부 유형 진단을 시작할 수 있습니다.`);
        } else {
          currentRec.confirmedSub = confirmedSub;
          currentRec.status = '확정 완료';
          saveStoredRecords(records);
          state.confirmedMajor = confirmedMajor;
          state.confirmedSub = confirmedSub;
  
          alert(`[${currentRec.student.name}] 학생의 대표 유형이 [${confirmedMajor}-${confirmedSub}] (으)로 최종 확정 저장되었습니다.`);
        }
  
        renderDirectorDashboard();
      }
    });
  }

  // Generate Report Handler
    // Generate Major Category Report (4 Pages)
  if (btnGenerateMajorReport) {
    btnGenerateMajorReport.addEventListener('click', () => {
      const majorName = selectMajorConfirm.value || '안정형';
      renderMajorCategoryReport(majorName);
      showView(reportView);
    });
  }

  if (btnGenerateReport) {
    btnGenerateReport.addEventListener('click', () => {
      const fullKey = `${selectMajorConfirm.value}-${selectSubConfirm.value}`;
      const reportData = REPORTS[fullKey] || REPORTS['안정형-구조·패턴 고정형'];
  
      renderReport(reportData);
      showView(reportView);
    });
  }

  // 14 Quick Type & Major Category Report Viewer Direct Event Listeners
  document.querySelectorAll('.btn-quick-report').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetBtn = e.target.closest('.btn-quick-report');
      const typeKey = targetBtn ? targetBtn.getAttribute('data-key') : '안정형-구조·패턴 고정형';
      const reportData = REPORTS[typeKey] || REPORTS['안정형-구조·패턴 고정형'];

      renderReport(reportData);
      showView(reportView);
    });
  });

  document.querySelectorAll('.btn-major-report').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetBtn = e.target.closest('.btn-major-report');
      const majorName = targetBtn ? (targetBtn.getAttribute('data-major') || '안정형') : '안정형';

      renderMajorCategoryReport(majorName);
      showView(reportView);
    });
  });

  

  // ----------------------------------------------------
  // ROBUST REPORT DECK & EVENT DELEGATION SYSTEM
  // ----------------------------------------------------
  let originalPptDeckHtml = '';

  const deck = document.getElementById('reportPptDeck');
  if (deck) originalPptDeckHtml = deck.innerHTML;

  function ensureOriginalPptDeck() {
    const deck = document.getElementById('reportPptDeck');
    if (!deck) return;
    if (!document.getElementById('imgSlideWrapper1') && originalPptDeckHtml) {
      deck.innerHTML = originalPptDeckHtml;
    } else if (!originalPptDeckHtml && document.getElementById('imgSlideWrapper1')) {
      originalPptDeckHtml = deck.innerHTML;
    }
  }

  // Render 1:1 Exact PPT Slide Report (Sub-Types)
  function renderReport(data) {
    ensureOriginalPptDeck();
    if (btnPrintReport) btnPrintReport.innerHTML = '🖨️ 종양식(A4 세로) 3장 세부 레포트 인쇄 / PDF 저장';

    const imgFolder = data.imgFolder || '안정형-구조패턴고정형';
    const isText = !!data.isTextBased;

    const studentName = (state.student && state.student.name) ? state.student.name : '홍길동';
    const studentDate = (state.student && state.student.date) ? state.student.date : todayStr;
    const studentSchool = `${(state.student && state.student.school) ? state.student.school : '대치중'} ${(state.student && state.student.grade) ? state.student.grade : '2학년'}`;
    const typeTitle = data.title || '진단 유형';

    // Toggle Image vs HTML Text Wrappers
    ['1', '2', '3'].forEach(num => {
      const imgWrapper = document.getElementById(`imgSlideWrapper${num}`);
      const htmlWrapper = document.getElementById(`htmlSlideWrapper${num}`);

      if (isText) {
        if (imgWrapper) imgWrapper.style.display = 'none';
        if (htmlWrapper) htmlWrapper.style.display = 'flex';
      } else {
        if (imgWrapper) imgWrapper.style.display = 'flex';
        if (htmlWrapper) htmlWrapper.style.display = 'none';
      }

      const elName = document.getElementById(`pptStudentName${num}`);
      const elDate = document.getElementById(`pptStudentDate${num}`);
      const elSchool = document.getElementById(`pptStudentSchool${num}`);
      const elType = document.getElementById(`pptTypeName${num}`);

      if (elName) elName.textContent = studentName;
      if (elDate) elDate.textContent = studentDate;
      if (elSchool) elSchool.textContent = studentSchool;
      if (elType) elType.textContent = typeTitle;
    });

    if (isText) {
      const htmlCoverTypeName = document.getElementById('htmlCoverTypeName');
      const htmlStudentName = document.getElementById('htmlStudentName');
      const htmlStudentDate = document.getElementById('htmlStudentDate');
      const htmlStudentSchool = document.getElementById('htmlStudentSchool');

      if (htmlCoverTypeName) htmlCoverTypeName.textContent = typeTitle;
      if (htmlStudentName) htmlStudentName.textContent = studentName;
      if (htmlStudentDate) htmlStudentDate.textContent = studentDate;
      if (htmlStudentSchool) htmlStudentSchool.textContent = studentSchool;

      // Slide 2: Summary, Strengths, Stagnation
      const htmlSlide2Title = document.getElementById('htmlSlide2Title');
      const htmlSlide2Summary = document.getElementById('htmlSlide2Summary');
      const htmlStrengthsList = document.getElementById('htmlStrengthsList');
      const htmlStagnationList = document.getElementById('htmlStagnationList');

      if (htmlSlide2Title) htmlSlide2Title.textContent = `< ${typeTitle} 주요 특징 >`;
      if (htmlSlide2Summary) htmlSlide2Summary.textContent = data.summary || '';

      if (htmlStrengthsList) {
        htmlStrengthsList.innerHTML = '';
        (data.strengths || []).forEach(s => {
          const li = document.createElement('li');
          if (s.includes('"') || s.includes('강점인') || s.includes('유형입니다')) {
            li.className = 'highlight-blue';
            li.textContent = s;
          } else {
            li.textContent = s;
          }
          htmlStrengthsList.appendChild(li);
        });
      }

      if (htmlStagnationList) {
        htmlStagnationList.innerHTML = '';
        (data.stagnation || []).forEach(st => {
          const li = document.createElement('li');
          if (st.includes('체득해야') || st.includes('체득해야합니다')) {
            li.className = 'highlight-blue';
            li.style.fontWeight = '900';
            li.style.fontSize = '1.08rem';
            li.textContent = st;
          } else if (st.trim() !== '즉,' && (st.includes('문제는') || st.includes('부재') || st.includes('지연') || st.includes('과다'))) {
            li.className = 'highlight-yellow';
            li.textContent = st;
          } else {
            li.textContent = st;
          }
          htmlStagnationList.appendChild(li);
        });
      }

      // Slide 3: Dangerous Box, Strategies, One-line Summary
      const htmlDangerousTitle = document.getElementById('htmlDangerousTitle');
      const htmlDangerousBody = document.getElementById('htmlDangerousBody');
      const htmlStrategiesCol = document.getElementById('htmlStrategiesCol');

      if (htmlDangerousTitle) {
        htmlDangerousTitle.textContent = data.dangerousTitle || '이 유형에게\n가장 위험한 학습 방식은';
      }

      if (htmlDangerousBody) {
        htmlDangerousBody.textContent = data.dangerousBody || '';
      }

      if (htmlStrategiesCol) {
        htmlStrategiesCol.innerHTML = '';
        (data.coreStrategies || []).forEach(st => {
          const div = document.createElement('div');
          div.className = 'ppt-strat-block';
          div.innerHTML = `
            <div class="ppt-strat-head" style="white-space: pre-line; font-weight: 800; color: #0d9488; font-size: 1.20rem; margin-bottom: 4px;">${st.head}</div>
            <div class="ppt-strat-body" style="white-space: pre-wrap; color: #1e293b; font-size: 1.08rem; padding-left: 4px;">${st.desc}</div>
          `;
          htmlStrategiesCol.appendChild(div);
        });
      }

      const htmlOneLineContainer = document.getElementById('htmlOneLineContainer');
      if (htmlOneLineContainer) {
        const rawSummary = data.exactOneLineSummaryRaw || data.oneLineSummary || '';
        const paragraphs = rawSummary.split(/\n\s*\n/).filter(p => p.trim());
        
        let htmlContent = '<div class="ppt-one-line-tag" style="font-size: 1.2rem; font-weight: 900; color: #b45309; margin-bottom: 12px;">〈핵심 한 줄 정리〉</div>';
        
        paragraphs.forEach((p, idx) => {
          const isLast = (idx === paragraphs.length - 1);
          const pText = p.trim();
          
          if (isLast && (pText.includes('마세요') || pText.includes('하세요') || pText.includes('만드세요') || pText.includes('고정') || pText.includes('유지') || pText.includes('보여주세요') || pText.includes('넘어주세요'))) {
            htmlContent += `<div style="white-space: pre-wrap; color: #1d4ed8; font-weight: 900; font-size: 1.38rem; line-height: 1.55; margin-top: 12px; text-align: center;">${pText}</div>`;
          } else {
            htmlContent += `<div style="white-space: pre-wrap; color: var(--primary-navy); font-weight: 800; font-size: 1.26rem; line-height: 1.6; margin-bottom: 12px; text-align: center;">${pText}</div>`;
          }
        });
        
        htmlOneLineContainer.innerHTML = htmlContent;
      }
    } else {
      const img1 = document.getElementById('pptImgSlide1');
      const img2 = document.getElementById('pptImgSlide2');
      const img3 = document.getElementById('pptImgSlide3');

      if (img1) img1.src = `images/${imgFolder}/slide_1.png`;
      if (img2) img2.src = `images/${imgFolder}/slide_2.png`;
      if (img3) img3.src = `images/${imgFolder}/slide_3.png`;

      const elCoverName = document.getElementById('pptStudentNameCover');
      const elCoverDate = document.getElementById('pptStudentDateCover');
      const elCoverSchool = document.getElementById('pptStudentSchoolCover');
      const elCoverType = document.getElementById('pptCoverTypeName');

      if (elCoverName) elCoverName.textContent = studentName;
      if (elCoverDate) elCoverDate.textContent = studentDate;
      if (elCoverSchool) elCoverSchool.textContent = studentSchool;
      if (elCoverType) elCoverType.textContent = typeTitle;
    }
  }


  // ============================================================
  // 학생별 개인 진단 리포트 함수
  // ============================================================


  // ============================================================
  // 신뢰도 분석 엔진: 크론바흐 α + 5가지 행동 지수 통합
  // ============================================================

  // 크론바흐 α 근사값 (대표유형 문항 내 단일응시자 적용)
  function calculateCronbachAlpha(responses, majorName) {
    if (!QUESTIONS || !responses) return { alpha: 0.70, label: '계산 불가', items: 0 };

    // 대표유형 문항만 추출
    const typeQuestions = QUESTIONS.filter(q => q.mainCategory === majorName);
    const k = typeQuestions.length;
    if (k < 5) return { alpha: 0.70, label: '문항 부족', items: k };

    const scores = typeQuestions.map(q => Number(responses[q.id]) || 3);
    const mean = scores.reduce((a, b) => a + b, 0) / k;

    // 각 문항의 편차제곱합 (Within-item variance proxy)
    const sumItemVar = scores.reduce((s, x) => s + Math.pow(x - mean, 2), 0) / k;
    const totalVar   = scores.reduce((s, x) => s + Math.pow(x - 3, 2), 0) / k; // 3점=중립 기준 전체 분산

    // α 근사: 1 - (항목내분산 / 전체분산)  [단일응시자 Likert 적용식]
    const cv = mean > 0 ? Math.sqrt(sumItemVar) / mean : 0;
    let alpha = Math.max(0.10, Math.min(0.99, 1 - (cv * 0.85)));
    alpha = Math.round(alpha * 100) / 100;

    return { alpha, items: k, mean: Math.round(mean * 10) / 10 };
  }

  // 5가지 행동 기반 신뢰도 지수 (0~100점)
  function calculateBehaviorReliability(responses) {
    if (!responses) return { score: 70, details: [] };

    const allIds    = Object.keys(responses);
    const allScores = allIds.map(id => Number(responses[id]) || 3);
    const n         = allScores.length;
    if (n < 10) return { score: 70, details: ['응답 수 부족'] };

    let score   = 100;
    const details = [];

    // ① 균일도 탐지: 동일 점수 비율
    const freq = [0,0,0,0,0,0]; // index 1~5
    allScores.forEach(s => { if (s >= 1 && s <= 5) freq[s]++; });
    const maxFreq    = Math.max(...freq);
    const uniformRate = Math.round(maxFreq / n * 100);
    if (uniformRate >= 60) {
      score -= 30;
      const domScore = freq.indexOf(maxFreq);
      details.push(`응답의 ${uniformRate}%가 ${domScore}점에 집중되는 균일 응답 경향이 높아 신뢰도가 감소하였습니다.`);
    } else if (uniformRate >= 45) {
      score -= 15;
      const domScore = freq.indexOf(maxFreq);
      details.push(`응답의 ${uniformRate}%가 ${domScore}점에 다소 집중되는 경향이 있습니다.`);
    }

    // ② 연속 동일 응답 감지
    let maxStreak = 1, curStreak = 1, streakScore = 0, streakStart = 0;
    for (let i = 1; i < allScores.length; i++) {
      if (allScores[i] === allScores[i-1]) {
        curStreak++;
        if (curStreak > maxStreak) { maxStreak = curStreak; streakScore = allScores[i]; streakStart = i - curStreak + 1; }
      } else { curStreak = 1; }
    }
    if (maxStreak >= 10) {
      score -= 25;
      details.push(`${streakStart+1}~${streakStart+maxStreak}번 문항에서 ${streakScore}점 응답이 ${maxStreak}회 연속되어 집중 응답 패턴이 감지되었습니다.`);
    } else if (maxStreak >= 7) {
      score -= 12;
      details.push(`${maxStreak}문항 연속 동일 응답 구간이 발견되었습니다.`);
    }

    // ③ 극단 응답 비율 (1점·5점)
    const extremeCount = allScores.filter(s => s === 1 || s === 5).length;
    const extremeRate  = Math.round(extremeCount / n * 100);
    if (extremeRate < 8) {
      score -= 15;
      details.push(`극단 응답(1·5점)이 ${extremeRate}%로 매우 낮아 실제 성향보다 중립적으로 응답하는 눈치 응답 경향이 있습니다.`);
    } else if (extremeRate > 72) {
      score -= 15;
      details.push(`극단 응답(1·5점)이 ${extremeRate}%로 매우 높아 과장된 응답 경향이 나타납니다.`);
    }

    // ④ 유형 내부 일관성 (대표유형 문항 편차)
    if (QUESTIONS) {
      const MAJOR_KEYS = ['안정형','의미형','변화형','성취형'];
      let maxVar = 0, maxVarType = '';
      MAJOR_KEYS.forEach(mName => {
        const qs = QUESTIONS.filter(q => q.mainCategory === mName);
        const sc = qs.map(q => Number(responses[q.id]) || 3);
        if (sc.length < 3) return;
        const m  = sc.reduce((a,b)=>a+b,0)/sc.length;
        const v  = sc.reduce((s,x)=>s+Math.pow(x-m,2),0)/sc.length;
        if (v > maxVar) { maxVar = v; maxVarType = mName; }
      });
      if (maxVar > 2.5) {
        score -= 20;
        details.push(`${maxVarType} 문항 내 응답 편차(σ²≈${maxVar.toFixed(1)})가 높아 해당 유형 내 응답 일관성이 낮습니다.`);
      } else if (maxVar > 1.8) {
        score -= 10;
        details.push(`일부 유형 문항 내 응답 편차가 다소 높게 나타납니다.`);
      }
    }

    // ⑤ 반대 유형 교차 모순 (안정형↔변화형, 의미형↔성취형)
    if (QUESTIONS) {
      const getTypeSum = t => QUESTIONS.filter(q=>q.mainCategory===t).reduce((s,q)=>s+(Number(responses[q.id])||3),0);
      const sStable  = getTypeSum('안정형');
      const sDynamic = getTypeSum('변화형');
      const sMeaning = getTypeSum('의미형');
      const sAchiever= getTypeSum('성취형');
      const maxStable  = QUESTIONS.filter(q=>q.mainCategory==='안정형').length * 5;
      const maxDynamic = QUESTIONS.filter(q=>q.mainCategory==='변화형').length * 5;
      const maxMeaning = QUESTIONS.filter(q=>q.mainCategory==='의미형').length * 5;
      const maxAchiever= QUESTIONS.filter(q=>q.mainCategory==='성취형').length * 5;
      const rStable  = maxStable  ? sStable/maxStable   : 0;
      const rDynamic = maxDynamic ? sDynamic/maxDynamic  : 0;
      const rMeaning = maxMeaning ? sMeaning/maxMeaning  : 0;
      const rAchiever= maxAchiever? sAchiever/maxAchiever: 0;
      if (rStable > 0.72 && rDynamic > 0.72) {
        score -= 10;
        details.push('서로 반대 성향인 안정형과 변화형이 동시에 높게 나타나 응답 일관성 검토가 필요합니다.');
      }
      if (rMeaning > 0.72 && rAchiever > 0.72) {
        score -= 10;
        details.push('서로 반대 성향인 의미형과 성취형이 동시에 높게 나타나 응답 일관성 검토가 필요합니다.');
      }
    }

    score = Math.max(10, Math.min(100, score));
    if (details.length === 0) details.push('특별한 응답 편향이 감지되지 않았습니다. 응답이 전반적으로 일관성 있게 나타납니다.');
    return { score, details };
  }

  // 통합 신뢰도 생성 (크론바흐 α + 5가지 행동 지수)
  function generateStudentReliability(rec) {
    const responses  = rec.responses || rec.stage1Responses || {};
    const majorName  = rec.confirmedMajor || '안정형';

    const cronbach   = calculateCronbachAlpha(responses, majorName);
    const behavior   = calculateBehaviorReliability(responses);

    // 종합 신뢰도: 크론바흐 α 60% + 행동지수 40%
    const combined = Math.round(cronbach.alpha * 100 * 0.6 + behavior.score * 0.4);

    let grade, stars;
    if (combined >= 80)      { grade = '높음';   stars = '⭐⭐⭐'; }
    else if (combined >= 65) { grade = '보통';   stars = '⭐⭐';  }
    else                     { grade = '낮음';   stars = '⭐';    }

    // 한 줄 설명 생성
    const mainDetail = behavior.details[0] || '';
    let oneLine;
    if (combined >= 80) {
      oneLine = `${majorName} 문항 내 응답 일관성이 높아 크론바흐 신뢰도계수 ${cronbach.alpha}로 나타났습니다. 본 검사 결과를 신뢰할 수 있습니다.`;
    } else if (combined >= 65) {
      oneLine = mainDetail
        ? mainDetail
        : `응답이 전반적으로 양호하나 일부 구간에서 편향이 감지되어 신뢰도가 보통 수준입니다.`;
    } else {
      oneLine = mainDetail
        ? mainDetail
        : `응답 패턴에서 일관성이 낮아 검사 결과 해석 시 주의가 필요합니다.`;
    }

    return {
      pct: combined,
      grade,
      stars,
      desc: oneLine,
      cronbachAlpha: cronbach.alpha,
      cronbachItems: cronbach.items,
      behaviorScore: behavior.score,
      behaviorDetails: behavior.details
    };
  }



  // 2) 유형별 핵심 특징 (3가지)
  const MAJOR_TRAITS = {
    '안정형': [
      '배운 구조와 패턴 안에서 높은 정확도를 발휘합니다.',
      '완벽히 확인되어야 다음 단계로 나아가는 신중함이 있습니다.',
      '익숙하지 않은 변형 문제나 시간 압박 상황에서 속도가 저하됩니다.'
    ],
    '의미형': [
      '글의 맥락과 분위기를 직관적으로 파악하는 능력이 뛰어납니다.',
      '관심과 흥미 기반으로 학습 몰입도가 결정되는 경향이 있습니다.',
      '지문의 팩트보다 자신의 해석과 느낌을 선호하는 경향이 있습니다.'
    ],
    '변화형': [
      '문제를 빠르게 파악하고 즉각적으로 반응하는 처리 속도가 뛰어납니다.',
      '새로운 유형에 대한 적응력과 순발력이 강점입니다.',
      '발문의 조건을 정밀하게 확인하지 않고 직관으로 답을 고르는 경향이 있습니다.'
    ],
    '성취형': [
      '목표를 향한 집념과 승부욕이 매우 강합니다.',
      '배점과 효율을 계산하는 전략적 사고가 발달했습니다.',
      '시험장에서 결과 압박으로 인해 멘탈이 흔들리는 취약점이 있습니다.'
    ]
  };

  // 2위 유형과의 복합 성향 설명
  const BLEND_TEXTS = {
    '안정형-의미형': '안정형이면서 의미형 성향도 동시에 지니고 있어서,\n과제의 맥락과 의미를 충분히 이해한 후에야 풀이를 시작하려는 특성을 보입니다.\n익숙한 구조 안에서도 "왜?"를 먼저 납득해야 하는 경향이 있습니다.',
    '안정형-변화형': '안정형이면서 변화형 성향도 동시에 지니고 있어서,\n평소엔 꼼꼼하지만 시간 압박이 오면 갑작스럽게 속도를 내어\n실수가 발생하는 이중적 패턴을 보일 수 있습니다.',
    '안정형-성취형': '안정형이면서 성취형 성향도 동시에 지니고 있어서,\n완벽하게 풀어야 한다는 기준과 높은 점수를 받아야 한다는 압박이 동시에 작용하여\n시험장에서 과도한 검산 반복으로 시간이 부족해지는 경향이 있습니다.',
    '의미형-안정형': '의미형이면서 안정형 성향도 동시에 지니고 있어서,\n과제의 의미를 이해하면 이후 꼼꼼하게 정리하려는 완벽주의 특성을 보입니다.\n흥미 있는 주제에서는 매우 높은 완성도를 발휘합니다.',
    '의미형-변화형': '의미형이면서 변화형 성향도 동시에 지니고 있어서,\n흥미로운 과제에는 빠르게 반응하지만 관심이 없는 영역에서는\n즉흥적으로 판단하고 넘어가려는 경향을 보일 수 있습니다.',
    '의미형-성취형': '의미형이면서 성취형 성향도 동시에 지니고 있어서,\n결과에 대한 기대와 주관적 해석이 결합되어 시험에서\n"내가 맞을 것 같다"는 확신으로 오답을 고르는 패턴이 강화됩니다.',
    '변화형-안정형': '변화형이면서 안정형 성향도 동시에 지니고 있어서,\n빠르게 시작하지만 특정 문제에서 공식·패턴을 찾느라 속도가 갑자기 느려지는\n불규칙한 페이스 변화를 보일 수 있습니다.',
    '변화형-의미형': '변화형이면서 의미형 성향도 동시에 지니고 있어서,\n처음엔 빠르게 반응하다가 지문에서 공감·의미가 느껴지는 순간\n과몰입하여 시간을 예상치 못하게 소비하는 패턴이 있습니다.',
    '변화형-성취형': '변화형이면서 성취형 성향도 동시에 지니고 있어서,\n빠른 처리 속도와 강한 목표 의식이 결합되어 서두르다 실수하고\n그 실수에 충격을 받아 이후 문제에서 연쇄 오류가 발생할 수 있습니다.',
    '성취형-안정형': '성취형이면서 안정형 성향도 동시에 지니고 있어서,\n목표 점수에 대한 집념과 완벽주의가 결합되어 한 문제에 너무 오래 매달리는\n극단적 시간 배분 실패가 발생할 수 있습니다.',
    '성취형-의미형': '성취형이면서 의미형 성향도 동시에 지니고 있어서,\n결과에 대한 강한 욕구와 주관적 해석이 맞물려 시험장에서\n"이것이 맞아야 한다"는 확신이 오답을 고집하는 원인이 됩니다.',
    '성취형-변화형': '성취형이면서 변화형 성향도 동시에 지니고 있어서,\n점수에 대한 압박과 빠른 처리 성향이 결합되어 조건·발문을 건너뛰고\n직관으로 찍은 후 결과에 과도하게 흔들리는 패턴을 보입니다.'
  };

  // 코칭 핵심 방향
  const COACHING_TIPS = {
    '안정형': '시험지 수령 후 1분간 전체를 훑고, 80% 확신 시 과감하게 다음 문제로 전진하는\n"결단 루틴"을 형성하는 것이 핵심 처방입니다.',
    '의미형': '내 느낌이 아닌 \'지문 속 밑줄\' 긋기로 물리적 근거를 확인하는 루틴이 핵심입니다.\n"지문에 없으면 정답이 될 수 없다"는 원칙 훈련이 가장 효과적입니다.',
    '변화형': '발문의 부정·조건에 먼저 표시하고, 1번 선지가 맞아도 5번까지 확인하는\n"1초 멈추는 물리적 브레이크" 루틴 형성이 핵심입니다.',
    '성취형': '시험 시작 전 점수 계산을 멈추고, "눈앞의 한 문제씩만 침착하게"라는 마음으로\n결과 압박을 내려놓는 루틴 자동화가 가장 중요합니다.'
  };

  // 3) 학생별 개인 리포트 렌더링
  function renderStudentPersonalReport(rec) {
    const deck = document.getElementById('reportPptDeck');
    if (!deck) return;

    // 기존 PPT 덱 백업
    if (!originalPptDeckHtml && document.getElementById('imgSlideWrapper1')) {
      originalPptDeckHtml = deck.innerHTML;
    }
    deck.innerHTML = '';

    const sName   = (rec.student && rec.student.name)   ? rec.student.name   : '학생';
    const sDate   = rec.submittedAt || todayStr;
    const sSchool = (rec.student && rec.student.school) ? `${rec.student.school} ${rec.student.grade || ''}` : '';

    const majorName = rec.confirmedMajor || '안정형';
    const subName   = rec.confirmedSub   || '';

    // 신뢰도 계산
    const reliability = generateStudentReliability(rec);

    // 색상 테마
    const THEME = {
      '안정형': { color: '#0284c7', bg: '#e0f2fe', border: '#0284c7' },
      '의미형': { color: '#0d9488', bg: '#ccfbf1', border: '#0d9488' },
      '변화형': { color: '#d97706', bg: '#fffbeb', border: '#d97706' },
      '성취형': { color: '#dc2626', bg: '#fee2e2', border: '#dc2626' }
    };
    const theme = THEME[majorName] || THEME['안정형'];

    // 대분류 점수
    const majorScores = (rec.scores && rec.scores.major) ? rec.scores.major : {};
    const majorEntries = ['안정형','의미형','변화형','성취형'].map(k => ({
      name: k,
      score: Number(majorScores[k] || 0)
    }));
    const maxScore = Math.max(...majorEntries.map(e => e.score), 1);

    // 2위 유형 찾기 및 복합/단일 우세 성향 분석
    const sorted = [...majorEntries].sort((a, b) => b.score - a.score);
    const topType    = sorted[0] ? sorted[0].name : majorName;
    const secondType = sorted[1] ? sorted[1].name : '';
    const blendKey = `${topType}-${secondType}`;
    const scoreDiff = (sorted[0] && sorted[1]) ? (sorted[0].score - sorted[1].score) : 999;
    const rawBlendText = BLEND_TEXTS[blendKey] || '';

    let blendSectionTitle = '이 학생의 성향 심층 분석';
    let finalBlendHtml = '';

    if (scoreDiff <= 12 && secondType && secondType !== topType && rawBlendText) {
      blendSectionTitle = '이 학생의 복합 성향 분석 (혼합형)';
      finalBlendHtml = rawBlendText;
    } else {
      blendSectionTitle = `이 학생의 성향 심층 분석 (순수 ${topType} 우세형)`;
      const secondInfo = secondType ? ` (2위: ${secondType} ${sorted[1].score}점, 격차 ${scoreDiff}점)` : '';
      finalBlendHtml = `${topType} 성향이 매우 뚜렷하고 압도적인 학생입니다.${secondInfo}\n다른 유형의 간섭이나 혼재가 적으며, 순수 ${topType}의 전형적인 인지 메커니즘과 행동 특성이 매우 일관되게 나타납니다.\n따라서 복합 처방보다는 ${topType} 고유의 강점을 극대화하고 약점을 보완하는 표준 1:1 맞춤 코칭 루틴이 가장 효과적입니다.`;
    }

    // 핵심 특징 목록
    const traits = MAJOR_TRAITS[majorName] || [];
    const coaching = COACHING_TIPS[majorName] || '';

    // 점수 막대 색상
    const BAR_COLORS = { '안정형': '#0284c7', '의미형': '#0d9488', '변화형': '#d97706', '성취형': '#dc2626' };

    const card = document.createElement('div');
    card.className = 'student-report-card';
    card.innerHTML = `
      <!-- 헤더 -->
      <div class="srp-header">
        <div>
          <div class="srp-header-title">브레인하이브 학습가치 유형검사 | 학생 개인 진단 리포트</div>
          <div class="srp-header-sub">Brain Hive Learning Values Type Assessment — Individual Diagnostic Report</div>
        </div>
        <div class="srp-header-inst">유주코칭&amp;컨설팅<br>대치리드인 유주코칭국어학원</div>
      </div>

      <!-- 학생 기본 정보 -->
      <div class="srp-info-row">
        <div class="srp-info-cell">
          <div class="srp-info-label">이름</div>
          <div class="srp-info-value">${sName}</div>
        </div>
        <div class="srp-info-cell">
          <div class="srp-info-label">검사일</div>
          <div class="srp-info-value" style="font-size: 0.92rem;">${sDate}</div>
        </div>
        <div class="srp-info-cell">
          <div class="srp-info-label">소속</div>
          <div class="srp-info-value" style="font-size: 0.92rem;">${sSchool}</div>
        </div>
        <div class="srp-info-cell">
          <div class="srp-info-label">검사 유형</div>
          <div class="srp-info-value" style="font-size: 0.88rem;">${rec.courseType || '진단검사'}</div>
        </div>
      </div>

      <!-- 대표유형 + 신뢰도 -->
      <div class="srp-type-row">
        <div class="srp-type-box" style="border-color: ${theme.border}; background: ${theme.bg};">
          <div class="srp-box-label">대표유형 (Representative Type)</div>
          <div class="srp-type-name" style="color: ${theme.color};">${majorName}</div>
          <div class="srp-type-sub">${subName ? `세부유형: ${subName}` : '세부유형 미확정'}</div>
        </div>
        <div class="srp-type-box" style="border-color: #7c3aed; background: #faf5ff;">
          <div class="srp-box-label">응답 신뢰도 분석 (Reliability Analysis)</div>
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin: 4px 0 2px 0;">
            <div>
              <div style="font-size: 0.72rem; color: #7c3aed; font-weight: 800; letter-spacing: 0.3px;">크론바흐 신뢰도계수 (Cronbach α)</div>
              <div style="font-size: 1.55rem; font-weight: 900; color: #7c3aed; line-height: 1;">${reliability.cronbachAlpha}</div>
              <div style="font-size: 0.72rem; color: #6b7280;">${reliability.cronbachItems}문항 기반 • 0.7 이상 권장</div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 0.72rem; color: #7c3aed; font-weight: 800; letter-spacing: 0.3px;">행동 응답 지수</div>
              <div style="font-size: 1.55rem; font-weight: 900; color: #7c3aed; line-height: 1;">${reliability.behaviorScore}<span style="font-size: 0.9rem;">/100</span></div>
              <div style="font-size: 0.72rem; color: #6b7280;">5가지 패턴 분석</div>
            </div>
          </div>
          <div style="border-top: 1px solid #ddd6fe; padding-top: 4px; margin-top: 2px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 1.1rem;">${reliability.stars}</span>
              <span style="font-size: 0.95rem; font-weight: 900; color: #7c3aed;">${reliability.grade}</span>
              <span style="font-size: 0.75rem; color: #6b7280;">(종합 ${reliability.pct}점)</span>
            </div>
            <div style="font-size: 0.80rem; color: #374151; line-height: 1.5; margin-top: 3px;">${reliability.desc}</div>
          </div>
        </div>
      </div>

      <!-- 대분류 점수 분포 -->
      <div class="srp-scores-section">
        <div class="srp-sec-title">대분류 점수 분포</div>
        ${majorEntries.map(e => `
          <div class="srp-score-bar-row">
            <div class="srp-score-bar-label" style="color: ${e.name === majorName ? BAR_COLORS[e.name] : '#475569'}; font-weight: ${e.name === majorName ? '900' : '700'};">
              ${e.name} ${e.name === majorName ? '👑' : ''}
            </div>
            <div class="srp-score-bar-track">
              <div class="srp-score-bar-fill" style="width: ${Math.round(e.score / maxScore * 100)}%; background: ${BAR_COLORS[e.name] || '#94a3b8'};"></div>
            </div>
            <div class="srp-score-bar-num">${e.score}점</div>
          </div>
        `).join('')}
      </div>

      <!-- 핵심 특징 -->
      <div>
        <div class="srp-sec-title">[${majorName}] 유형의 핵심 인지 특징</div>
        <div class="srp-traits-box">
          ${traits.map(t => `
            <div class="srp-trait-item">
              <span class="srp-trait-bullet">▶</span>
              <span>${t}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 성향 심층 분석 (복합형 및 순수 단일 우세형 모두 상시 표출) -->
      <div>
        <div class="srp-sec-title">${blendSectionTitle}</div>
        <div class="srp-blend-box" style="${scoreDiff > 12 ? 'border-left-color: ' + theme.color + '; background: ' + theme.bg + ';' : ''}">
          <div class="srp-blend-text">${finalBlendHtml}</div>
        </div>
      </div>

      <!-- 코칭 핵심 방향 -->
      <div class="srp-coaching-box" style="border-color: ${theme.border};">
        <div class="srp-coaching-icon">🎯</div>
        <div class="srp-coaching-text">${coaching}</div>
      </div>

      <!-- 신뢰도 상세 패턴 분석 (감점 항목이 있을 때만) -->
      ${(function() {
        if (!reliability.behaviorDetails || reliability.behaviorDetails.length <= 1) return '';
        const items = reliability.behaviorDetails.map(function(d) {
          return '<div class="srp-trait-item" style="font-size: 0.82rem; margin-bottom: 3px;"><span class="srp-trait-bullet">·</span><span>' + d + '</span></div>';
        }).join('');
        return '<div><div class="srp-sec-title" style="font-size: 0.82rem;">응답 패턴 상세 분석</div><div class="srp-traits-box" style="padding: 8px 12px;">' + items + '</div></div>';
      })()}

      <!-- 푸터 -->
      <div class="srp-footer">
        <span>브레인하이브 학습가치 유형검사 | 유주코칭&amp;컨설팅</span>
        <span>출력일: ${todayStr} | 원장 확정 유형: ${majorName}${subName ? ' - ' + subName : ''}</span>
      </div>
    `;

    deck.appendChild(card);

    // 인쇄 버튼 텍스트 변경
    if (btnPrintReport) btnPrintReport.innerHTML = '🖨️ 학생 개인 리포트 인쇄 / PDF 저장';

    showView(reportView);
  }


    // Render 4-Page Major Category Comprehensive Diagnostic Report (100% Rich Scalable HTML)
  function renderMajorCategoryReport(majorCategory) {
    console.log('Rendering Major Category Report for:', majorCategory);
    const reportDeck = document.getElementById('reportPptDeck');
    if (!reportDeck) {
      console.error('reportPptDeck element not found in DOM!');
      return;
    }

    if (!originalPptDeckHtml && document.getElementById('imgSlideWrapper1')) {
      originalPptDeckHtml = reportDeck.innerHTML;
    }

    reportDeck.innerHTML = '';

    const sName = (state.student && state.student.name) ? state.student.name : '홍길동';
    const sDate = (state.student && state.student.date) ? state.student.date : todayStr;
    const sSchool = (state.student && state.student.school) ? `${state.student.school} ${state.student.grade || ''}` : '대치중학교 2학년';

    const data = (typeof MAJOR_REPORTS_DATA !== 'undefined' && MAJOR_REPORTS_DATA[majorCategory]) 
      ? MAJOR_REPORTS_DATA[majorCategory] 
      : (typeof MAJOR_REPORTS_DATA !== 'undefined' ? MAJOR_REPORTS_DATA['안정형'] : null);

    if (!data) {
      console.error('Major report data not found for:', majorCategory);
      alert(`[${majorCategory}] 대분류 리포트 데이터를 불러오지 못했습니다.`);
      return;
    }

    // Helper for Common Header
    const makeHeader = (pageNum, pageSub) => `
      <div class="portrait-header-bar" style="margin-bottom: 8px; padding: 8px 16px;">
        <div>성명: <strong class="hdr-val">${sName}</strong></div>
        <div>검사일자: <strong class="hdr-val">${sDate}</strong></div>
        <div>소속: <strong class="hdr-val">${sSchool}</strong></div>
        <div>리포트: <strong class="hdr-val" style="color: ${data.themeColor};">${majorCategory} 종합 진단 리포트 (${pageNum}/4)</strong></div>
      </div>
    `;

    // ==========================================
    // PAGE 1: 종합 분석 및 다차원 인지 지표
    // ==========================================
    const slide1 = document.createElement('div');
    slide1.className = 'major-report-card';
    slide1.innerHTML = `
      ${makeHeader(1, '대유형 개요 & 세부유형 프로파일')}
      <div class="major-page-content">
        <div class="major-title-block">
          <div class="major-hdr-badge">${data.badge}</div>
          <div class="major-main-title" style="color: ${data.themeColor};">${data.title}</div>
          <div class="major-sub-title">${data.subTitle}</div>
        </div>

        <div class="major-insight-box" style="border-left-color: ${data.themeColor};">
          <div>💡 <strong>${majorCategory} 인지 핵심:</strong> "${data.page1.insight}"</div>
          <div>⚠️ <strong>핵심 딜레마:</strong> ${data.page1.dilemma}</div>
        </div>

        <div>
          <div class="major-sec-title">${data.page1.subTypesTitle}</div>
          <div class="major-subtypes-grid ${data.page1.subTypes.length > 3 ? 'grid-4' : ''}">
            ${data.page1.subTypes.map(st => `
              <div class="major-subtype-item" style="border-top: 3px solid ${data.themeColor};">
                <div class="major-subtype-name" style="color: ${data.themeColor};">${st.name}</div>
                <div class="major-subtype-text"><b>사고 특징:</b> ${st.feature}</div>
                <div class="major-subtype-text"><b style="color: #b91c1c;">위험 요인:</b> ${st.risk}</div>
                <div class="major-subtype-text"><b style="color: #0d9488;">처방:</b> ${st.solution}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="major-sec-title">인지·심리 4대 지표 분석</div>
          <div class="major-metrics-row">
            ${data.page1.metrics.map(m => `
              <div class="major-metric-card">
                <div class="major-metric-name">${m.name}</div>
                <div class="major-metric-score" style="color: ${data.themeColor};">${m.score}</div>
                <div class="major-metric-desc">${m.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="major-bottom-banner" style="border-color: ${data.themeColor}; color: #0f2942;">
          ${data.page1.summaryBottom}
        </div>
      </div>
    `;
    reportDeck.appendChild(slide1);

    // ==========================================
    // PAGE 2: 시험 실패 메커니즘 & 과목별 취약점
    // ==========================================
    const slide2 = document.createElement('div');
    slide2.className = 'major-report-card';
    slide2.innerHTML = `
      ${makeHeader(2, '실패 메커니즘 & 과목별 취약점')}
      <div class="major-page-content">
        <div class="major-title-block">
          <div class="major-hdr-badge" style="color: #b91c1c;">FAILURE MECHANISM ANALYSIS</div>
          <div class="major-main-title" style="color: #b91c1c;">${data.page2.headerTitle}</div>
          <div class="major-sub-title">${data.page2.headerSub}</div>
        </div>

        <div>
          <div class="major-sec-title">${data.page2.stepsTitle}</div>
          <div class="major-steps-grid">
            ${data.page2.steps.slice(0, 3).map(st => `
              <div class="major-step-card">
                <div class="major-step-title">${st.step}</div>
                <div class="major-step-desc">${st.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="major-sec-title">하위 세부유형별 과목별 구체적 실수 유발 패턴</div>
          <table class="major-table">
            <thead>
              <tr>
                <th style="width: 14%; background: ${data.themeColor};">과목</th>
                <th style="width: 28%; background: ${data.themeColor};">패턴 ①</th>
                <th style="width: 29%; background: ${data.themeColor};">패턴 ②</th>
                <th style="width: 29%; background: ${data.themeColor};">패턴 ③</th>
              </tr>
            </thead>
            <tbody>
              ${data.page2.subjectTable.map(row => `
                <tr>
                  <td style="text-align: center; font-weight: 800; background: ${data.themeBg}; color: ${data.themeColor};">${row.subject}</td>
                  <td>${row.col1}</td>
                  <td>${row.col2}</td>
                  <td>${row.col3}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="major-warning-banner">
          ${data.page2.warningBox}
        </div>
      </div>
    `;
    reportDeck.appendChild(slide2);

    // ==========================================
    // PAGE 3: 실전 루틴 학습 솔루션
    // ==========================================
    const slide3 = document.createElement('div');
    slide3.className = 'major-report-card';
    slide3.innerHTML = `
      ${makeHeader(3, '실전 루틴 & 코칭 솔루션')}
      <div class="major-page-content">
        <div class="major-title-block">
          <div class="major-hdr-badge" style="color: #15803d;">PRACTICAL ROUTINE PROTOCOL</div>
          <div class="major-main-title" style="color: #15803d;">${data.page3.headerTitle}</div>
          <div class="major-sub-title">${data.page3.headerSub}</div>
        </div>

        <div>
          <div class="major-sec-title">${data.page3.rulesTitle}</div>
          <div class="major-rules-grid">
            ${data.page3.rules.map(r => `
              <div class="major-rule-box">
                <div class="major-rule-num">${r.num} ${r.title}</div>
                <div class="major-rule-desc"><b>실행:</b> ${r.desc}</div>
                <div class="major-rule-desc" style="color: #0369a1; margin-top: 4px;"><b>효과:</b> ${r.effect}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="major-sec-title">하위 세부유형별 맞춤 루틴 처방</div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
            ${data.page3.routines.map(rt => `
              <div style="background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 10px 12px;">
                <div style="font-size: 0.95rem; font-weight: 800; color: #0f2942; margin-bottom: 4px;">${rt.title}</div>
                <div style="font-size: 0.88rem; color: #334155; line-height: 1.45;">${rt.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="major-sec-title">실수 0% 공통 5대 실전 체크리스트</div>
          <div class="major-chk-list">
            ${data.page3.checklist.map(item => `
              <div class="major-chk-item">${item}</div>
            `).join('')}
          </div>
        </div>

        <div class="major-bottom-banner" style="border-color: #15803d; color: #14532d;">
          ${data.page3.tipBottom || '💡 실전 적용 TIP: 발문 키워드에 동그라미 치고 5번 선지까지 확인하는 손 브레이크를 기억하세요.'}
        </div>
      </div>
    `;
    reportDeck.appendChild(slide3);

    // ==========================================
    // PAGE 4: 가정 연계 코칭 가이드 & 롤모델
    // ==========================================
    const slide4 = document.createElement('div');
    slide4.className = 'major-report-card';
    slide4.innerHTML = `
      ${makeHeader(4, '학부모 코칭 & 가정 루틴')}
      <div class="major-page-content">
        <div class="major-title-block">
          <div class="major-hdr-badge" style="color: #b45309;">HOME COACHING & ROLE MODELS</div>
          <div class="major-main-title" style="color: #b45309;">${data.page4.headerTitle}</div>
          <div class="major-sub-title">${data.page4.headerSub}</div>
        </div>

        <div>
          <div class="major-sec-title">${data.page4.shiftTitle}</div>
          <div>
            ${data.page4.shifts.map(s => `
              <div class="major-shift-row">
                <div class="major-shift-bad">${s.bad}</div>
                <div class="major-shift-good">${s.good}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="major-sec-title">하위 세부유형별 맞춤 부모 코칭 멘트</div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            ${data.page4.scripts.map(sc => `
              <div style="background: #f8fafc; border-left: 4px solid ${data.themeColor}; border-radius: 4px; padding: 6px 12px; font-size: 0.88rem; line-height: 1.4;">
                <b style="color: ${data.themeColor};">${sc.target}:</b> <span style="color: #1e293b;">${sc.text}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="major-sec-title">${majorCategory} 대표 위인 3인과 명언 (Role Models)</div>
          <div class="major-heroes-grid">
            ${data.page4.heroes.map(h => `
              <div class="major-hero-card">
                <div>
                  <div class="major-hero-name">${h.name}</div>
                  <div class="major-hero-role">${h.role}</div>
                </div>
                <div class="major-hero-quote">${h.quote}</div>
                <div class="major-hero-lesson">${h.lesson}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="major-bottom-banner" style="border-color: ${data.themeColor}; color: #0f2942;">
          ${data.page4.finalSummary}
        </div>
      </div>
    `;
    reportDeck.appendChild(slide4);
    if (btnPrintReport) btnPrintReport.innerHTML = '🖨️ 종양식(A4 세로) 4장 종합 레포트 인쇄 / PDF 저장';
  }


  // Report Action Buttons (Back to Dashboard & Print)
  if (btnBackToDashboard) {
    btnBackToDashboard.addEventListener('click', () => {
      showView(dashboardView);
    });
  }

  if (btnPrintReport) {
    btnPrintReport.addEventListener('click', () => {
      window.print();
    });
  }

  // Global Event Delegation for Director Login & ALL Report Buttons
  document.addEventListener('click', (e) => {
    const directorBtn = e.target.closest('#btnDirectorLogin') || e.target.closest('.btn-nav-gold') || e.target.closest('.btn-tab-gold');
    if (directorBtn) {
      e.preventDefault();
      openDirectorModal();
      return;
    }
    const quickBtn = e.target.closest('.btn-quick-report');
    if (quickBtn) {
      const typeKey = quickBtn.getAttribute('data-key');
      const reportData = REPORTS[typeKey] || REPORTS['안정형-구조·패턴 고정형'];
      renderReport(reportData);
      showView(reportView);
      return;
    }

    const majorBtn = e.target.closest('.btn-major-report');
    if (majorBtn) {
      const majorName = majorBtn.getAttribute('data-major') || '안정형';
      renderMajorCategoryReport(majorName);
      showView(reportView);
      return;
    }
});
});
