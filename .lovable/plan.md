## Changes to `public/wedding.html`

### 1. Save the uploaded venue photo
Copy the attached image to `public/venue-bg.jpg` so it can be referenced as a CSS background.

### 2. Countdown card — use the venue photo as background
Keep the countdown card structure exactly as it is now, but swap its plain white background for the venue photo.

- Set `.hero-countdown-card`:
  - `background: url('venue-bg.jpg') center/cover no-repeat`
  - Add a `::before` overlay with a soft white/ivory translucent wash (`rgba(255, 250, 240, 0.78)`) + subtle blur via `backdrop-filter` so the photo shows through but the text stays readable.
  - Position card content above the overlay (`position: relative; z-index: 1` on inner content).
- Keep current text colors (dark navy numerals, blue script headline) — they read well on the ivory wash.
- Add a thin gold border (`1px solid rgba(201,168,76,0.4)`) to feel more elegant against the photo.

### 3. Hero photo — beige panel background (no gradient behind)
Wrap the hero photo in a solid beige "panel" so the page gradient does not show behind it.

- Add a containing div `.hero-photo-panel` around `.hero-photo` with:
  - `background: var(--beige)` (`#f5ecd9` — the same beige used in nav, travel cards, detail items).
  - Generous padding (e.g. `3rem 2.5rem`) so the beige forms a visible mat around the photo.
  - Subtle 1px gold border + soft shadow to feel intentional.
- Remove or reduce the warm gold corner glow (`.hero-photo::after`) since the beige mat replaces that role; keep the lilac offset frame.

### 4. Keep everything else untouched
- No changes to gradient body, masthead, other sections, fonts, animations.
- Countdown logic and labels unchanged.

### Result
- Countdown card sits on the venue photo with an ivory wash — elegant, readable, matches wedding theme.
- Hero photo floats inside a beige panel that ties into the nav/travel/detail beige, breaking the gradient cleanly behind it.
