# Swap the script font to Parisienne

Tangerine reads too thin and calligraphic-lite. Replace it with Parisienne, a romantic hand-lettered script with a rounder, prettier capital S — at a medium, balanced weight (not delicate, not heavy).

## What changes

- Load Parisienne from Google Fonts and drop Tangerine from the font request.
- Point every script usage at Parisienne: the envelope intro labels ("A LOVE LETTER FROM" area names), the hero names, section script accents, footer names, and quote flourishes.
- Rebalance sizing: Parisienne runs noticeably larger per font-size than Tangerine, so the sizes bumped up ~1.3x for Tangerine get scaled back down (roughly 0.7-0.75x) and the forced `font-weight: 700` is dropped — Parisienne only ships one weight and renders at a natural medium presence.
- Re-check the hero title, footer names, and envelope names on mobile so the longer names still sit on one line without overflow.

## Technical notes

- File: `public/wedding.html`.
- Update the Google Fonts `<link>` (line 10): swap `family=Tangerine:wght@400;700` for `family=Parisienne`.
- Replace every `font-family: 'Tangerine', cursive; font-weight: 700;` with `font-family: 'Parisienne', cursive;` and adjust the neighboring `font-size` in the same rules.
- Affected selectors include the envelope/intro script, `.hero-full-title`, section script accents, `.card-l2`, quote script, and `.footer-names`, plus their mobile media-query overrides.
