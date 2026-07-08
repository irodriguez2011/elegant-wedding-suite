## Goal
Replace the plain beige background behind the countdown card with a romantic NYC wedding venue photo. The photo becomes the full background of the right-hand panel (top → bottom), with the countdown card floating on top over a soft beige overlay so the numbers stay legible.

## Changes

1. **Generate the venue image** — create `public/countdown-venue.jpg` via the agent image tool: a warm, romantic NYC wedding venue scene (string lights, greenery, brick + soft evening light, Queens rooftop / garden vibe). Portrait-friendly framing so it looks good on both desktop (half-panel) and mobile (full-width strip).

2. **Update `.countdown-split__panel` in `public/wedding.html`**
   - Set `background-image: url('countdown-venue.jpg')` with `background-size: cover; background-position: center` so it fills the entire right panel edge-to-edge (top, middle, bottom).
   - Add a semi-transparent beige overlay via a `::before` pseudo-element (roughly `rgba(236, 230, 218, 0.55)`) so the countdown numbers remain readable without hiding the photo.
   - Keep the card itself as-is (no card background changes).

3. **Mobile behavior** — no structural change: the existing `@media (max-width: 900px)` rule already stacks the panel below the arch photo; the venue image will simply fill that stacked panel top-to-bottom.

4. **Verification** — screenshot at 1280 wide and 390 wide to confirm the venue image fills the full right panel (no beige gap above/below), the countdown numbers stay readable, and the left arch photo is untouched.

## Notes
- No changes to the left arch/floral photo or the countdown JS.
- Overlay opacity may need a quick tweak after seeing the generated image; will adjust in one pass if contrast is off.
