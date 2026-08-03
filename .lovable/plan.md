# Swap the countdown background photo

Replace the background image behind "The countdown is on!" with the newly uploaded garden reception photo (string lights, hedges, white tables, floral arch).

## What changes
- Save the uploaded photo over `public/countdown-venue.jpg` so the existing full-bleed countdown band picks it up with no other markup changes.
- Keep the current treatment: full-bleed image, ~0.7 opacity with the navy/ivory overlay so the countdown numerals stay legible.
- Nudge `background-position` if the focal point (the floral arch at center) sits awkwardly at mobile widths.

## Technical notes
- Only `public/wedding.html` line ~312 (`background-image: url('countdown-venue.jpg')`) is involved, and only if positioning needs a tweak; the image file itself is the main change.
