## What you're seeing

The "mesh" look on the gradient background and on the ivory hero panel is a deliberate paper-grain overlay applied to the whole page. It's two `repeating-linear-gradient` layers (at 115° and 28°) placed in a fixed full-screen pseudo-element with `mix-blend-mode: multiply`, so it tints everything beneath it — including the ivory hero panel — with a faint crosshatch.

Source: `public/wedding.html`, `body::before` (lines 70–77).

A second, similar crosshatch lives on the envelope opener card (`.stage-card::before`, lines 906–912) — that one only shows inside the opening envelope, not on the main page.

## Plan

1. **Remove the page-wide crosshatch.** Delete the `body::before` rule (lines 70–77) so the gradient background renders cleanly with no grain. The ivory hero panel will instantly look smooth too, since the overlay was what was tinting it.
2. **Leave the envelope `.stage-card::before` grain alone** — it adds a tasteful parchment feel inside the opener and isn't what you're noticing on the live page. If you'd prefer it removed too, say the word and I'll strip it in the same pass.
3. **Leave the RSVP `.rsvp::after` grain alone** — it sits on the dark wine RSVP island and reads as velvet, not mesh. Same: I can remove it if you want a perfectly flat finish there.

No other styles, colors, or layout change.