# ourscent-web-dist

Deploy artifact for **ourscent.shaaml.online** (DigitalOcean App Platform).

Generated — do not edit by hand.

## Why this is a Node service, not a static site

The app was originally deployed as static prerendered HTML. That had to be
abandoned: React Router's prerendered output does not hydrate nested routes.
Every child route (/brands, /trending, /notes) failed with "Expected server HTML
to contain a matching <link> in <head>" and fell back to the error boundary,
while the identical build served by react-router-serve rendered all of them
cleanly. So this runs as a Node process.

## No backend required

`snapshot/` holds the rendered fields for the whole corpus (~18 MB: catalog,
aggregates, per-perfume details). Loaders read it from disk, so the service
needs no database and no content API. The scraped source prose is not in the
snapshot, so third-party copy cannot reach the site.

## Rebuilding

From the ourscent-web monorepo, with the content service running:

    cd services/content && OURSCENT_DATA_DIR=... python3 scripts/export_snapshot.py ../../apps/web/snapshot
    cd apps/web && npx react-router build

then copy `build/` and `snapshot/` here with the generated package.json and push.

**App Platform does not auto-deploy** — the spec uses a plain git source with no
deploy_on_push. After pushing run:

    doctl apps create-deployment <app-id>
