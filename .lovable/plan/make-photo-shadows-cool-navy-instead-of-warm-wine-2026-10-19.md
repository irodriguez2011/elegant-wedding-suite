# Make photo shadows cool navy instead of warm wine

The shadows behind photos (holding-hands photo, wedding-party circles, honeymoon photo, gallery frames) use a warm wine-brown color. Over the blue background on phones, that blends into a pinkish-brown tint.

## Change
- Swap every warm wine shadow color in the site styling to a cool deep navy (the same family used behind the countdown card), keeping the same strength and size so the depth looks identical, just without the warm cast.
- Nothing else changes: photos, layout, colors, and animations stay as they are.

## Check
- Look at the holding-hands photo on a phone-size and laptop-size screen and sample the shadow area to confirm it reads blue-gray, not pink/brown.

## Technical details
- In public/wedding.html, replace all `rgba(58,16,21,…)` / `rgba(58, 16, 21, …)` box-shadow colors (8 rules, lines ~496–980) with `rgba(26,36,58,…)` at the same alpha values.
