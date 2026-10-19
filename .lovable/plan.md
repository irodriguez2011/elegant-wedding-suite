# Soft shadow behind the opening envelope

Add a gentle, soft navy shadow under the envelope on the opening page so it looks like it's resting on the paper instead of sitting flat.

## Change
- A soft, wide, low-strength shadow that follows the envelope's shape (including the pointed flap), falling slightly downward.
- Cool navy color (same family as the photo shadows), nothing harsh or dark.
- A touch smaller on phones so it stays subtle.
- The shadow moves with the envelope when it opens; nothing else changes.

## Check
- Screenshot the opening page at phone and laptop size, and confirm the envelope still opens and the card appears.

## Technical details
- In public/wedding.html, add `filter: drop-shadow(0 14px 22px rgba(26,36,58,0.18)) drop-shadow(0 3px 6px rgba(26,36,58,0.10));` to `.envelope-back` and `.envelope-pocket` via a wrapper-level filter on `.envelope-scene` (box-shadow is clipped by clip-path, drop-shadow on the parent isn't). Mobile media query: lighter values (0 10px 16px / 0.16).
