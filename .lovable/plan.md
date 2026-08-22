# Root-level file audit

## What the audit found

The suggestion to move `wedding.html` to the project root as a Vite entry does not apply to this project. This is a TanStack Start app: there is no `index.html` at the root and `vite.config.ts` has no `input` map — routing comes from `src/routes/*`, and Vite never treats HTML files as entry points here. `public/wedding.html` is a plain static file that gets copied to `dist/` verbatim; moving it to the root or into `src/pages/` would make it stop being served and break the live Netlify URL (`/wedding.html`).

The `src/` side is already clean and matches the second point: `src/routes`, `src/components/ui`, `src/hooks`, `src/lib`, `src/styles.css` — no static media in `src/`, and all media now lives under `public/assets/` and `public/gallery/`.

So: keep `wedding.html` in `public/`. The genuinely worthwhile cleanups are below.

## Changes

1. Replace the client-side redirect with a real one.
   `src/routes/index.tsx` currently renders a placeholder and calls `window.location.replace("/wedding.html")` after hydration — a visible flash, and crawlers/social cards see the placeholder. Change it to a server-side `redirect()` thrown from the route's `beforeLoad`, so `/` sends a proper 302 to `/wedding.html` with no flash and no stale meta tags.

2. Remove the orphaned asset pointer.
   `src/assets/hero-video.mp4.asset.json` points at a CDN copy of the hero video that nothing imports; the video is served from `public/assets/videos/hero-video.mp4`. Delete the pointer (via the assets CLI so the CDN object is removed too), leaving `src/assets/` empty of stale references.

3. Refresh `README.md`.
   Document the new `public/assets/...` layout and correct the wording around how `/` reaches the invitation.

## Not doing (and why)

- Not moving `wedding.html` to the root or `src/pages/` — it is not a build entry, and the move would 404 the published URL.
- Not deleting the unused shadcn components in `src/components/ui` — harmless, and they're there if the site is ever ported to React.

## Optional, larger follow-up

If you ever want `/` to serve the invitation directly (no separate `.html` URL, real route metadata, and access to Lovable Cloud for RSVPs), the site would be ported from one static HTML file into React components under `src/routes` and `src/components`. That is a substantial rewrite and is not part of this plan — worth doing only when you want a database-backed RSVP or admin view.
