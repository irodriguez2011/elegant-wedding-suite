## Goal
Unify body/description text colors across the page to match the dark charcoal (#1a1a2a) already used in the Honeymoon Fund heading and Cocktail Attire code — leaving the Countdown section untouched.

## Current state
- `--ink` / `--walnut` = `#1a1a2a` (target dark)
- `--walnut-soft` = `#3a3a4a` (already close, keep)
- `--muted` = `#4a4a5a` (too light/grey — this is the inconsistent one)

`--muted` is currently used on the small paragraph/description text in:
- Story PS line (`.story-ps`)
- Details cards text (`.detail-text`)
- Cocktail Attire note (`.style-note`)
- FAQ answers (`.faq-answer`)
- Wedding Party hint (`.party-hint`)
- Day-of Schedule descriptions (`.t-desc`)

## Change
Darken `--muted` from `#4a4a5a` → `#1a1a2a` (single CSS variable edit) so every paragraph/description above shifts to the same dark charcoal as Honeymoon Fund and Cocktail Attire.

## Explicitly NOT changed
- Countdown section (uses its own `#729cc4` / `#2d3a52` blues — left as-is)
- Navy RSVP section (uses ivory text on dark navy)
- Hero overlay text (white on photo)
- Gold accents, wine accents, section tags
