## Problem

The ambient gold flecks (and the envelope embers) take a long time to first appear because:

1. Each fleck gets `animation-delay = Math.random() * 22s` — so on a fresh load most flecks are still waiting up to 22 seconds before they animate at all.
2. The `drift` keyframes hold `opacity: 0` until 10% of the animation, and durations are 16–30s — that adds another 1.6–3s fade-in even after the delay fires.
3. The envelope embers have a similar issue: `animationDelay = Math.random() * 4s` plus an `orbRise` that doesn't reach full opacity until ~10–20% of a 10–18s run.

Net effect: the screen looks empty for several seconds before any flecks show up, on both desktop and mobile.

## Fix (scoped to `public/wedding.html`)

1. **Stagger flecks from 0, not 22s.** Change the ambient-fleck spawner so `animationDelay` is `Math.random() * 3` (was `* 22`) and `animationDuration` is `12 + Math.random() * 10` (was `16 + 14`). Same look, but the first flecks appear within a frame and the rest stream in over ~3s instead of ~22s.
2. **Seed a few flecks mid-animation.** For the first ~3 flecks, set `animationDelay` to a small negative value (e.g. `-(2 + Math.random()*4) + 's'`) so they start already partway through `drift` and are visible immediately on load — no blank first second.
3. **Shorten the fade-in ramp in `@keyframes drift`.** Move the `opacity: 0.6` stop from `10%` to `4%` so flecks become visible almost as soon as their animation begins. Keep the rest of the keyframes unchanged.
4. **Same treatment for envelope embers.** In the embers spawner, cut `animationDelay` to `Math.random() * 1.5` (was `* 4`) and seed the first 4–6 embers with a small negative delay so the velvet envelope screen has visible motion the instant it renders. Tighten `orbRise` so embers reach full opacity by ~6% instead of ~15% (small keyframe tweak).
5. **Keep the mobile particle counts as-is** (8 flecks / 14 embers on small screens, 24 / 60 on desktop) — this is purely a timing fix, not a count change, so performance work from the previous turn is preserved.
6. **Respect `prefers-reduced-motion`.** No change — the existing early-return in the spawner stays.

## Verification

- Desktop (1280×800) and mobile (375×812) via headless Chromium: load the page, screenshot at `t = 200ms` and `t = 1500ms`. Expect at least one visible fleck in the 200ms shot and several by 1500ms (today both shots are empty for ~3–5s).
- Visually confirm on the live preview that the envelope screen has drifting embers immediately on appear, and the rest of the page has flecks within ~1s of load.

No HTML structure, copy, or layout changes.
