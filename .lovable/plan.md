Replace the `.olive` SVG above "IN LIEU OF GIFTS" in the Honeymoon Fund section with a hand-drawn diagonal leaf-branch outline that mirrors the reference: a curved stem running from lower-left to upper-right with ~6 outlined teardrop leaves alternating along it, drawn as outlines (stroke, no fill) in the existing muted gold (`#b48a3c`) with rounded line caps/joins for a soft hand-drawn feel.

Scope
- File: `public/wedding.html`
- Replace only the inline `<svg class="olive">…</svg>` markup (currently the upright filled branch) with the new diagonal outlined branch.
- Bump display size slightly (~44px wide) so the outlined leaves read clearly at small sizes; keep all surrounding elements, spacing, and colors unchanged.
- Use `stroke="#b48a3c"`, `fill="none"`, `stroke-linecap="round"`, `stroke-linejoin="round"`.
- Not using Canva — an inline SVG matches better, stays crisp, and inherits the site's gold color.

Out of scope
- No other layout, typography, divider, heart, heading, or button changes.
