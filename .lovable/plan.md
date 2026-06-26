# Fix mobile/tablet responsiveness (marquee + audit)

## Problem
- **Marquee fails on mobile** (and likely tablet): images use `height: 100%; width: auto` inside a flex track set to `width: max-content`. On iOS Safari and many mobile browsers, the track's intrinsic width is computed before the images' heights resolve, so widths collapse to 0 and the strip looks empty or frozen.
- Previous mobile fixes only targeted ≤700px. The 701–1024px tablet range still uses desktop hero/countdown sizing.

## Changes (all in `public/wedding.html`)

### 1. Marquee — make it bulletproof on touch devices
- Give `.photo-marquee img` an explicit `aspect-ratio: 4 / 5` plus `flex: 0 0 auto` so each image reserves width before layout, instead of depending on intrinsic image dimensions resolving against `height: 100%`.
- Set `min-width` on images per breakpoint (e.g. 260px desktop, 220px tablet, 170px mobile) as a safety net for Safari.
- Add `will-change: transform` and `backface-visibility: hidden` to `.photo-marquee-track` to keep the animation smooth on iOS.
- Confirm 4×3 = 12 images still translate exactly -25% (one full set) so the loop stays seamless.

### 2. Add a tablet breakpoint (`@media (max-width: 1024px)`)
- `.hero-editorial`: reduce side padding, switch the photo + countdown grid from side-by-side to stacked at ≤900px so neither column gets cramped.
- `.hero-frame`: cap height and use `aspect-ratio: 4/5` earlier (≤1024px) so portraits aren't letterboxed.
- `.countdown-band`: reduce padding, ensure `background-size: cover` + `background-position: center` works without a fixed attachment.
- `.hero-countdown-card`: full width with sensible max-width on tablet.

### 3. Global guards (verify, add if missing)
- Keep `html, body { overflow-x: hidden; max-width: 100vw; }`.
- Ensure every full-bleed section uses `width: 100%` (no `100vw` + negative margin).

### 4. Verification
Headless Chromium check at three viewports — 375×812 (mobile), 820×1180 (tablet), 1440×900 (desktop):
- `document.documentElement.scrollWidth === window.innerWidth` (no horizontal scroll).
- Marquee track width > 0 and animation is running (`getComputedStyle(track).animationName === 'marqueeRight'`, `track.getBoundingClientRect().width > viewport`).
- Screenshot the hero, countdown, and marquee at each viewport to confirm layout.

## Out of scope
No content, copy, color, or business-logic changes — purely CSS/responsive fixes.
