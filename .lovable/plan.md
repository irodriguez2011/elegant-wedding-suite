Rework only the left text column of the Honeymoon Fund section in `public/wedding.html`. Photo, colors, button styling, and two-column grid remain untouched.

**CSS (`.honeymoon` block, ~lines 740-830):**
- `.honeymoon-text`: flex column, `align-items: flex-start`, `max-width: 620px`, remove any centering.
- Remove the `margin` from `.olive`, `.tag-divider`, `.heart-orn` and drop their `text-align: center`. Use explicit `margin-top` per spec (20/28/42/28/32/36 px) directly on the following element for consistent rhythm. Set `display: block` on all three SVGs; sprig ~28px wide, heart ~24px wide, divider 250px wide, all colored `#b48a3c`.
- `.honeymoon .section-tag`: convert to a flex row `align-items: center; gap: .75rem;` with a `::before` short gold line (~32px), remove the `::after` line on the right. Letter-spacing `0.28em`.
- `.honeymoon .section-title`: `font-size: clamp(3rem, 6vw, 4.5rem)` (~72px desktop), `line-height: 0.98`, `font-weight: 400`, `white-space: nowrap` so "Honeymoon" stays on one line, no extra margin between the two lines (the `<br>` provides the break). Remove existing `margin-top`.
- `.honeymoon .reg-desc`: `max-width: 620px`, `font-size: 1.125rem` (18px), `line-height: 1.8`, left-aligned, no manual breaks.
- Mobile (`@media max-width: 900px`): heading `~48px`, paragraph `width: 100%`, keep the same spacing order; stack above the image (already handled by existing grid override).

**Markup (~lines 1641-1656):**
Keep the current element order (sprig → eyebrow → divider → title `Honeymoon<br/>Fund` → heart → paragraph → button). Adjust the divider SVG viewBox so the diamond sits at true center and the two gold lines are equal length across ~250px width.

No changes outside `.honeymoon`.