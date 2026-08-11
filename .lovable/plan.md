# Full venue address in the countdown

Update the countdown section footer so it shows the full street address instead of just the city.

## Change

- Countdown section line currently reads: `June 19, 2027 · Brooklyn, New York`
- New text: `June 19, 2027 · 499 Union St, Brooklyn, NY`

No styling changes; the line already wraps gracefully on mobile.

## Not changed

- Hero card date line and footer keep `Brooklyn, NY` / `Brooklyn, New York` unless you want those updated too.

## Technical detail

Edit `public/wedding.html` line 1664 (`.cd-footer`).
