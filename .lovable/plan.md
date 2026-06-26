## Goal

1. Fix the missing hero image (`hero.png` / `krissie-and-corey.jpeg`) so it shows reliably.
2. Move the venue photo out of the narrow countdown card and into a full-bleed horizontal band that spans edge-to-edge behind the countdown, tinted to harmonize with the site palette.

## Changes (only `public/wedding.html`)

### 1. Hero photo fix
- The image element is fine, but the `.hero-photo-panel` may still be inheriting an opacity-0 state from leftover reveal CSS or animation timing. I'll:
  - Explicitly set `opacity:1` on `.hero-photo-panel`, `.hero-photo`, `.hero-frame`, and `.hero-photo img` so nothing can hide them.
  - Ensure no `reveal` class remains on these elements.
  - Add a min-height to `.hero-frame` as a fallback so even if the image fails to load you still see the framed area.

### 2. Full-width venue band behind countdown
Restructure the hero so the countdown sits inside a full-bleed section:

```text
[ beige photo panel — contained 1200px ]
[ ───────  full-width venue band  ─────── ]
[          tinted venue.jpg bg            ]
[      [ countdown card centered ]        ]
[ ──────────────────────────────────────── ]
```

- Wrap the countdown in a new `<section class="countdown-band">` placed OUTSIDE `.hero-editorial` (so it can break out to 100vw).
- `.countdown-band`: `width:100%`, `position:relative`, generous vertical padding (`5rem 1.5rem`), `background-image:url('venue-bg.jpg')` with `background-size:cover; background-position:center`, and CSS `filter`/overlay to harmonize with the lilac/blue/beige palette (saturation ~0.55, slight hue shift, sepia ~0.15).
- Add a `::before` overlay with a soft ivory + lilac + blue radial wash (~`rgba(247,239,222,0.55)` base) so the venue is still visible but text stays legible.
- `.hero-countdown-card` becomes a translucent centered card (`max-width:640px`, `background: rgba(255,255,255,0.55)` with `backdrop-filter: blur(6px)`) sitting on the band — no longer carrying the venue background itself.
- Remove the old `::after`/`::before` venue layers from `.hero-countdown-card`.

### 3. Reveal observer
Update the observer selector list so the new `.countdown-band` fades in cleanly and the photo panel is not stuck invisible.

## Out of scope
No changes to colors elsewhere, no other sections, no JS countdown logic changes.