## Why mobile feels slow

The intro animation timings are identical on every device, but phones do far more per-frame work than the desktop:

1. **60 animated ember orbs + 24 ambient flecks** are spawned unconditionally. Each one runs two infinite animations (`orbRise` 10–18s and `orbPulse` 2–4s, the latter animating `filter: blur()` — one of the most expensive properties to animate on mobile GPUs).
2. **Velvet backdrop uses layered radial gradients + a grain texture**, repainted every frame while the flap rotates.
3. **`filter: drop-shadow(...)`** on `.env-flap-full`, `.env-lace`, and `.seal-big` forces an off-screen compositor pass on each frame of the open animation.
4. **`box-shadow` is animated** in `sealPulse` (3.6s infinite) — animating shadows triggers full repaints, not GPU compositing.
5. **`backdrop-filter: blur()`** is used elsewhere on the page (nav, countdown card); the lovable performance note explicitly calls this out as a mobile killer when layered over animated content.

Result: the flap/seal CSS transitions are short on paper (~0.5s) but the main thread is saturated, so frames drop and the visible reveal stretches out.

## Fix plan (scoped to `public/wedding.html`)

1. **Cut particle counts on small screens.** In the two IIFEs that spawn orbs/flecks, read `window.matchMedia('(max-width: 768px)').matches` (and `prefers-reduced-motion`) and use ~15 embers / 8 flecks on mobile instead of 60 / 24.
2. **Stop animating `filter: blur()` in `orbPulse`.** Replace it with `opacity` or `transform: scale()` pulsing — same look, far cheaper.
3. **Disable the `sealPulse` box-shadow animation on mobile** via a `@media (max-width: 768px)` rule (`animation: none` on `.seal-big`). Keep the static glow.
4. **Drop `filter: drop-shadow(...)` on the flap, lace, and seal on mobile**; substitute a cheaper static `box-shadow` where a shadow is still wanted. The drop-shadow is the single most expensive property during the open animation.
5. **Remove `backdrop-filter` on mobile** for the nav and any intro-adjacent surface, replacing with a solid/translucent background (per the project's documented mobile-perf guidance).
6. **Add `will-change: transform` and `backface-visibility: hidden`** to `.env-flap-full` and `.seal-big` so the open transition stays on the compositor.
7. **Pause the embers/leaves the moment `#invite-intro.gone` is set** (set `animation-play-state: paused` via a CSS rule) so they don't keep consuming frames after the card appears.

No timing changes — the perceived speed-up comes entirely from freeing the main thread so the existing ~0.5s transitions actually run at 60fps.

## Verification

- Build, then load the published preview on mobile viewport (375×812) via headless Chromium and time `tap on seal → `.step2` class present` with `performance.now()`. Expect <800ms wall time on a throttled 4× CPU profile.
- Spot-check desktop visually to confirm the intro still looks the same.
