# ourscent-web-dist

Build artifact for **ourscent.shaaml.online** (DigitalOcean App Platform static site).

Do not edit by hand — every file here is generated. Rebuild from the
`ourscent-web` monorepo:

    cd apps/web
    # the content service must be running; loaders execute at BUILD time and
    # their data is baked into static HTML
    OURSCENT_DATA_DIR=... uvicorn main:app --port 8000 &
    PRERENDER_PERFUMES=2000 npx react-router build

then copy `apps/web/build/client/` into this repo and push.

The site is prerendered rather than server-rendered: App Platform serves this
as a static site, so there is no Node process at runtime. Pages listed in
`react-router.config.ts`'s `prerender()` become real HTML with data; anything
else falls back to the catch-all `index.html`.
