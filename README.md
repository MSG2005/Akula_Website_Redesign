# Editorial Canvas — Hostinger Static Build

This version is configured as a standard **Vite + React + TanStack Router** static site.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production website is generated in:

```text
dist/
```

Preview it locally:

```bash
npm run preview
```

## Hostinger

1. Run `npm run build`.
2. Open the generated `dist/` folder.
3. Upload **everything inside `dist/`** to Hostinger `public_html/`.
4. Keep `.htaccess` in `public_html/`.
5. Test the home page and client-side routes directly.

The `.htaccess` file makes TanStack Router routes work when users refresh or directly open a route.

## Important

This static version does not run the original TanStack Start/Nitro server. The Careers application form uses an email handoff instead of the original server-side Supabase service-role application handler. This avoids exposing a Supabase service-role key in a static Hostinger site.

