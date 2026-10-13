# Swap the honeymoon fund photo

The honeymoon section keeps its layout exactly as is — text on the left, framed photo on the right — and only the picture inside the frame changes to the one you just sent.

## What changes

- The photo in the Honeymoon Fund section is replaced with your new portrait: the two of you facing each other in the arched arcade, in that gold-and-blue painted treatment.
- The frame itself stays untouched — same ivory card, gold hairline border, soft glow, hover lift, and the same position to the right of the "Honeymoon Fund" text.
- The photo's hidden description (read by screen readers) is updated from "walking down the stairs" to describe the arcade picture, so it matches what's actually shown.
- The file keeps its current name, so nothing else on the site needs rewiring.

## One thing to watch

Your new photo is taller and narrower than the frame, so the frame trims a little off the top and bottom — roughly a tenth of the height on a phone, a bit more on a wide screen. I'll look at both and nudge the framing downward or upward if either of your heads or your shoes get clipped, so the couple stays fully in shot.

## What I'll check after

- Open the page and screenshot the honeymoon section at desktop width and at phone width, confirming the new photo is the one showing and both of you are fully visible in the frame.
- Confirm the old staircase photo is gone and no image on the page fails to load.

## Technical notes

- Overwrite `public/honeymoon-photo.jpg` in place with the uploaded file (converted to JPEG), keeping the filename so the existing `src` reference and the site's flat-asset convention are unchanged.
- Edit one line of markup: the `alt` text on that `img`.
- If the replacement is heavier than the file it replaces, compress it so the page keeps loading at the same speed.
- If the centered crop clips faces or feet, add a targeted `object-position` on that image rather than changing the frame's aspect ratio.
- No CSS, layout, route, or dependency changes.
