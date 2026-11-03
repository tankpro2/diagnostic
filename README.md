# 브레인하이브 학습가치유형검사 (온라인 전용 프로젝트)

이 폴더(`C:\진단_온라인`)는 **수파베이스(Supabase) 클라우드 DB 및 GitHub Pages와 연동된 온라인 전용 프로젝트**입니다.
*(기존 오프라인 전용 프로그램인 `C:\진단`과는 완전히 분리되어 운영됩니다.)*

---

## 1. 클라우드 연동 정보 (Supabase)
- **Project URL**: `https://lzszmkvbzllaycffkayq.supabase.co`
- **Publishable Key**: `sb_publishable_r6f09vNvaFxTVwN2rYzGHA_GXyJTfp5`
- **연동 테이블**: `public.diagnostic_records`
- **연동 모듈**: `supabase-config.js` (단일 원본 기준 실시간 동기화)

## 2. 배포 정보 (GitHub Pages)
- **GitHub Repository**: `diagnostic`
- **주요 엔트리 파일**:
  - PC / 원장님 관제 / 140문항 통합: `index.html` (`app.js`, `styles.css`)
  - 학생 태블릿 전용: `tablet.html` (`tablet.js`, `tablet.css`)
  - 문항 및 리포트 데이터: `data.js`, `majorReportsData.js`
  - 수파베이스 설정 및 테이블 SQL: `supabase-config.js`, `supabase_setup.sql`
