## Goal
Soften the hero photo’s corner blur and recolor the halo behind the photo to a warm, angelic white-gold glow.

## What will change
- Reduce the corner-edge blur mask on the hero image so only a subtle corner fade remains, while keeping the main subject and straight edges crisp.
- Shift the `.hero-photo::after` glow behind the photo from cool blue to a warm white-gold palette (ivory → soft gold) for a candlelit, angelic effect.
- Keep the thin lilac offset frame and the existing photo size / layout unchanged.

## Technical details
File: `public/wedding.html`

- `.hero-photo::after` glow:
  - Replace `rgba(114,156,196, …)` corner gradients with layered warm white-gold tones (`#fff8ec`, `#fff2d9`, `#f5e6c9`) at a slightly lower opacity so the halo feels luminous rather than heavy.
  - Lower `filter: blur(22px)` to around `18px` to tighten the halo.
- `.hero-photo img` mask:
  - Shrink the corner gradient coverage from `55% 55%` to about `36% 36%`.
  - Move the fade midpoint from `65%` to `75%` so the blur is lighter and less invasive.
- No JavaScript or HTML structure changes.

## Validation
- Refresh the preview and check the hero section: the couple should remain fully visible, only the extreme corners softly fade, and the glow behind the photo should read as a warm, soft gold halo rather than blue.