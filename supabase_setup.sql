-- ============================================================================
-- 브레인하이브 학습가치유형검사 수파베이스(Supabase) 테이블 및 권한 설정 SQL
-- 실행 위치: https://supabase.com/dashboard/project/lzszmkvbzllaycffkayq/sql/new
-- ============================================================================

-- 1. 진단 결과 통합 저장 테이블 생성
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

-- 2. 검색 속도 향상을 위한 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_diagnostic_records_student_name ON public.diagnostic_records (student_name);
CREATE INDEX IF NOT EXISTS idx_diagnostic_records_submitted_at ON public.diagnostic_records (submitted_at DESC);

-- 3. Row Level Security (RLS) 활성화 및 온라인 읽기/쓰기 정책 허용
ALTER TABLE public.diagnostic_records ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read and write for diagnostic_records" ON public.diagnostic_records;

CREATE POLICY "Allow public read and write for diagnostic_records"
ON public.diagnostic_records
FOR ALL
TO anon, authenticated
USING (true)
WITH CHECK (true);
