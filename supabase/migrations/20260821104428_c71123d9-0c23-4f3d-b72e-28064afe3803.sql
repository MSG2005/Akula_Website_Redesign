
DROP POLICY IF EXISTS "Anyone can upload application files" ON storage.objects;

CREATE POLICY "Applicants can upload application files"
ON storage.objects FOR INSERT TO anon, authenticated
WITH CHECK (
  bucket_id = 'applications'
  AND name ~ '^[0-9]{10,17}-[a-z0-9]{1,12}/(resume|cover-letter)-[A-Za-z0-9._-]{1,80}$'
  AND name !~ '\.\.'
  AND lower(right(name, 5)) IN ('.pdf', '.doc', 'docx')
);

CREATE POLICY "Only backend can read application files"
ON storage.objects FOR SELECT TO service_role
USING (bucket_id = 'applications');

CREATE POLICY "Only backend can update application files"
ON storage.objects FOR UPDATE TO service_role
USING (bucket_id = 'applications')
WITH CHECK (bucket_id = 'applications');

CREATE POLICY "Only backend can delete application files"
ON storage.objects FOR DELETE TO service_role
USING (bucket_id = 'applications');
