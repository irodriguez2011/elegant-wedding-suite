# Match the phone menu to the top banner, and use "C & S"

## Answer
The banner is not a gradient. It is one warm ivory color that is slightly see-through (85%) with a soft blur, so the blue page behind it tints it a little. The opened menu paints its own solid ivory on top, which is why it looks a touch different.

## Changes
- Make the opened phone menu see-through so it shows the banner's exact color and blur, reading as one continuous panel. Thin lines between items stay. Laptop unchanged.
- Banner logo: "K & C" becomes "C & S".
- Envelope wax seal: re-make the seal picture so the pressed monogram reads "C & S" instead of "S & C", keeping the same gold wax look, shape and size.

## Technical details
- `public/wedding.html` mobile media query: `.nav-links` background `var(--ivory-2)` -> `transparent`.
- Logo line ~1260: `K &amp; C` -> `C &amp; S`.
- Edit `public/wax-seal.png` with the image edit tool (monogram "C&S" in Great Vibes style), keep transparent background; clean any baked checkerboard as before.
- Verify at 390px (menu open) and 1280px (seal), zero failed requests.
