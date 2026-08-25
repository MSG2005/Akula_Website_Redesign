
DROP POLICY IF EXISTS "Applicants can upload application files" ON storage.objects;

CREATE POLICY "Applicants can upload application files"
ON storage.objects FOR INSERT TO anon, authenticated
WITH CHECK (
  bucket_id = 'applications'
  AND name ~ '^[0-9]{10,17}-[a-z0-9]{1,12}/(resume|cover-letter)-[A-Za-z0-9._-]{1,80}$'
  AND name !~ '\.\.'
  AND lower(name) ~ '\.(pdf|doc|docx)$'
);
