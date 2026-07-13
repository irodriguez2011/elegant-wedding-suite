## Add Rasheeda + rebalance the wedding party grid

### 1. Save the new photo
- Copy the uploaded image to `public/party-rasheeda.jpg` so it lives alongside `party-sophie.jpg`.

### 2. Add Rasheeda's card
- In `public/wedding.html` (~line 1551), insert a new `.party-card` for **Rasheeda — Bridesmaid** right after Sophie, keeping bridal party grouped before the groomsmen. Result: 5 bridal-side + 4 groom-side = 9 cards.

### 3. Rebalance the grid so 9 looks intentional
Switch the desktop layout from 4 columns to a symmetric **3 × 3 grid** — nine circles fit perfectly with no orphan card.

In `.party-grid` (line 567):
- Desktop: `grid-template-columns: repeat(3, 1fr);` with a slightly tighter `max-width` (~720px) so circles stay elegant, not oversized.
- Tablet (`@media max-width: 860px`): keep `repeat(3, 1fr)` down to ~700px, then drop to 2 columns with the 9th card centered using `.party-card:last-child { grid-column: 1 / -1; max-width: 50%; margin: 0 auto; }`.
- Small phones (`@media max-width: 480px`): stay at 2 columns with the last card centered — circles shrink via existing `max-width: 170px` on `.party-photo`, so no overflow.

### 4. Verify
- Check the wedding-party section renders 3×3 on desktop, 2-col + centered final card on tablet/mobile, and Rasheeda's photo loads.

### Technical notes
- Only `public/wedding.html` is touched plus the new image in `public/`.
- No JS changes needed — the reveal animation loop already iterates every `.party-card`.
