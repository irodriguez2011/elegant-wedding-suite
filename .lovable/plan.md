## Goal
Fill in the missing left photo of the countdown split with the uploaded stairs photo, and replace the small gradient behind the countdown card with an image exported from your Canva design (`DAHO03rS5s8`).

## Changes

1. **Left photo** — save the uploaded stairs image as `public/countdown-photo.jpg` and wire it as the `.countdown-split__photo` background (replacing the current `gallery2.jpg` reference so the beige empty block is filled).

2. **Countdown background** — export page 1 of your Canva design `DAHO03rS5s8` as a PNG, save to `public/countdown-bg.jpg`, and update `.countdown-split__panel` in `public/wedding.html` to:
   - Use `countdown-bg.jpg` as the panel background (`background-size: cover; background-position: center`).
   - Remove the beige gradient + radial lilac/blue blooms currently layered behind the card.
   - Keep a very light white overlay (~15–20%) only if needed for card legibility; otherwise render the Canva image cleanly.

3. **Verification** — screenshot at 1280 wide and 390 wide to confirm the stairs photo now fills the left column, the Canva image sits behind the countdown card with no gradient artifacts, and the layout still stacks cleanly on mobile.

## Notes
- Canva export will use the `mcp_canva_5s9fU--export-design` flow (get formats → export as PNG → download to `public/`).
- No JS changes; countdown timer untouched.
