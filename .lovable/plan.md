## Honeymoon Section Restyle — Soft Blue & Watercolor Accents

Match the reference: swap the ivory band for a soft powdery blue, add a watercolor wash accent in the bottom-left corner, and re-tone the eyebrow tag, divider, and small ornaments to blend with the new palette.

### Background
- Replace the current ivory/beige band with a soft blue wash (approx `#e6edf5` → `#dbe6f0`), matching the pale blue in the reference.
- Add a watercolor bloom in the bottom-left corner: a soft, irregular deeper-blue (`~#a7bcd4`) radial/blur shape with faint gold flecks scattered around it, echoing the reference's painterly edge.
- Add a very subtle mirrored wash in the top-right at low opacity for balance.
- Keep the full-bleed layout and existing depth shadows on the photo.

### Eyebrow tag, dividers, and ornaments
- "IN LIEU OF GIFTS" tag: keep Cinzel uppercase with wide tracking, recolor to muted gold (`#b48a3c`), and flank it with two thin gold hairlines that end in a small diamond/asterisk glyph in the center — matching the reference's `— ✦ —` treatment.
- Under the "Honeymoon Fund" title: replace the current gold heart with a small gold sprig/laurel SVG above the tag and a tiny gold heart below the title (keep, but reduce size and soften color to match).
- Body copy stays in the existing deep navy; nudge slightly if contrast on the new blue background is off.
- "Contribute" button: keep as-is (already soft blue) since it now blends naturally with the section.

### Files changed
- `public/wedding.html`
  - `.honeymoon` CSS block: swap ivory background to blue gradient, add `::before` / `::after` pseudo-elements for the bottom-left watercolor bloom and top-right wash.
  - Section markup: replace the current section-tag markup with the hairline + diamond variant, add the gold sprig SVG above the tag, keep the small heart under the title.
  - Add a small inline SVG (or reuse an existing one) for the laurel sprig and diamond glyph.

No changes to other sections — colors, spacing, and layout elsewhere stay put.
