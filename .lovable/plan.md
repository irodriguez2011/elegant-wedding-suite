## Fixes for the countdown section

**Note on Canva:** The Canva connector can access your own designs/templates, but not Canva's stock photo library. Since we need a fresh photo, I'll generate a new one in the cool garden/greenery direction you picked (soft blues, greens, ivory — matched to the site palette). If you'd rather pull from a specific Canva design you already have, share the link and I'll use that instead.

### 1. Remove the wedding arch overlay on the bride & groom photo (left side)
- In `public/wedding.html`, strip the `wedding-arch.png` decorative element / floral overlay layer from the left photo block so only the couple photo (already arch-cropped via CSS mask/border-radius) remains.
- Keep the existing arched shape of the photo itself — only the added floral arch graphic goes away.

### 2. New venue photo (cool garden, matches site palette)
- Generate `public/countdown-venue.jpg` — lush green garden venue, soft daylight, ivory/sage/soft-blue tones, no orange/warm sunset. Reception table with greenery, candles, light florals; airy and elegant.
- Overwrite the existing `countdown-venue.jpg` so no HTML path changes are needed.

### 3. Remove the beige strip above the venue photo
- Inspect `.countdown-split__panel` in `public/wedding.html`. The beige band above the image is coming from panel padding / a wrapper's background showing through above the image.
- Fix by making the venue image fill the panel edge-to-edge: remove top padding on the panel, ensure `background-size: cover` with `background-position: center`, and drop any inner wrapper margin that reserves space at the top. Keep the beige overlay `::before` at ~0.45–0.55 opacity behind just the countdown card (via a card-local background) rather than the whole panel, so the photo shows cleanly top and bottom.
- Verify both desktop (1280) and mobile (390) with a Playwright screenshot: no beige band above the photo, cool-toned photo fills the panel, countdown card still readable.

### Files touched
- `public/wedding.html` — remove arch overlay element + adjust `.countdown-split__panel` CSS
- `public/countdown-venue.jpg` — regenerated (cool garden tones)
- `public/wedding-arch.png` — left in place but no longer referenced (safe to delete later)
