Update the "COUNTDOWN + STAIRS SPLIT" section in `public/wedding.html` so the wedding venue photo fills the entire section and the bride-and-groom stair photo is removed.

### What will change
1. **HTML** — Remove the left `.countdown-split__photo` column (the arch frame with `countdown-photo.jpg`).
2. **CSS layout** — Convert `.countdown-split` from a two-column grid to a single full-width section.
3. **Background** — Remove the beige fallback color from `.countdown-split` and `.countdown-split__panel` so the venue photo is the only background visible.
4. **Venue photo coverage** — Keep the `::before` pseudo-element on `.countdown-split__panel` but set `opacity: 1` and ensure `background-size: cover` fills the whole area with no gaps.
5. **Countdown card** — Center the countdown card over the full-bleed venue photo; keep its semi-transparent backing so the text stays readable.

### Files affected
- `public/wedding.html`