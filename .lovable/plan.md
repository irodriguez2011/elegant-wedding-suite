# Swap the script font to Tangerine

Replace Pinyon Script with Tangerine everywhere script type appears, so names like "Shornakay" read with a softer, cleaner capital S.

## What changes

- Load Tangerine (regular + bold) from Google Fonts and drop Pinyon Script from the font request.
- Point every script usage at Tangerine: the envelope intro labels ("A Love Letter From", the names), the hero script name, section script accents, and quote flourishes.
- Rebalance sizing: Tangerine sits noticeably smaller and lighter than Pinyon at the same font-size, so each script element gets a size bump (roughly 1.25-1.4x) and bold weight where it currently looks delicate, keeping the same visual weight on the page.
- Check mobile sizes for the hero and envelope so the longer names still fit on one line.

## Technical notes

- File: `public/wedding.html`.
- Update the Google Fonts `<link>` at the top: swap `family=Pinyon+Script` for `family=Tangerine:wght@400;700`.
- Replace all `font-family: 'Pinyon Script', cursive;` declarations with `font-family: 'Tangerine', cursive;` and adjust the adjacent `font-size` / `font-weight` in the same rules (including any mobile media-query overrides for those selectors).
