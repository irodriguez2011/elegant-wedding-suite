## Plan: Editorial offset hero with countdown card

Update the hero section in `public/wedding.html` to match the selected design.

### Layout
- Two-column hero. Left column: the existing couple's photo (`/krissie-and-corey.jpeg`) at ~70% width, 16:10 aspect, with a thin lilac `#e4bbed` offset frame behind it (top-left, -4px) and a soft drop shadow.
- Right column: a white countdown "card" at ~35% width that overlaps the photo by roughly 80–130px on desktop. Subtle border (`#729cc4` at 10% opacity) and shadow.
- On mobile, the columns stack and the card no longer overlaps.

### Card contents (top to bottom)
1. Script headline "The countdown is on!" in Great Vibes, soft blue `#729cc4`.
2. Live countdown numerals in Cinzel serif, `DAYS : HOURS : MINS : SECS`, with colon separators in `#729cc4`.
3. Tiny uppercase Cinzel labels in `#729cc4` aligned under each number.
4. Thin lilac divider, then small uppercase line: `JUNE 19, 2027 · QUEENS, NEW YORK`.

### Countdown logic
- Reuse the existing countdown JS already in `public/wedding.html`, retargeted to `2027-06-19T00:00:00`. Update all four units (days / hours / minutes / seconds) on a 1-second tick. Remove the older "359 days to go!" / "OUR BEST DAY · Krissie & Cory" block since the new card replaces it.

### Typography & color
- Add Great Vibes via the existing Google Fonts `<link>` in the head (Cinzel is already loaded).
- Use existing palette tokens: blue `#729cc4`, lilac `#e4bbed`, beige `#f7efde`, white card.

### Motion
- Photo: gentle 1.2s fade-up + slight scale on first view (reuse existing IntersectionObserver `from-up` / `from-scale`).
- Card: slides in from the right with a slight delay so it lands on top of the photo.
- Numerals: subtle opacity flicker when each second updates (CSS transition on the seconds span).

### Files touched
- `public/wedding.html` — hero markup, hero CSS block, countdown script target date, fonts link.

No other sections, no color-system or backend changes.