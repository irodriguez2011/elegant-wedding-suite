Update only the left text column of the Honeymoon Fund section in `public/wedding.html` to match the reference image (centered layout).

**CSS changes (`.honeymoon` block):**
- `.honeymoon-text`: `align-items: center; text-align: center; max-width: 620px; margin: 0 auto;` (remove the left-aligned flex-start).
- `.honeymoon .section-tag`: remove the flex-row + `::before` gold line; render as plain centered eyebrow text (letter-spacing 0.28em, no side lines).
- `.olive` (sprig above eyebrow): `display: block; margin: 0 auto;` centered.
- `.tag-divider`: `display: block; margin: 0 auto;` centered directly under "IN LIEU OF GIFTS" — keep the equal-length hairlines + center diamond SVG.
- `.honeymoon .section-title`: keep large clamp size, `text-align: center`, remove `white-space: nowrap` so "Honeymoon" and "Fund" stack naturally via `<br/>`.
- `.heart-orn`: `display: block; margin: 0 auto;` centered directly beneath the heading.
- `.honeymoon .reg-desc`: `text-align: center; max-width: 560px; margin-left: auto; margin-right: auto;`.
- Contribute button: centered (wrap in a centered container or `margin: 0 auto; display: inline-block;`).
- Mobile (`@media max-width: 900px`): heading ~48px, paragraph width 100%, everything remains centered.

**Markup order (unchanged):** sprig → "IN LIEU OF GIFTS" eyebrow → divider (with center diamond) → "Honeymoon<br/>Fund" title → heart → paragraph → Contribute button.

No changes to the photo, background color, two-column grid, button colors, or any other section.
