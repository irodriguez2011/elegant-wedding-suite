Add pressed-flower / dried-flower floral accents to the wedding site, sourced from Canva, and integrate them around the Wedding Party section and the "Krissie & Cory say I do" masthead.

**Visual direction:**
- Style: vintage pressed/dried florals (delicate petals, muted stems, soft shadows), with a heavier ivory/cream tone to match the site's cool ivory palette.
- Colors: ivory, soft cream, muted lilac, dusty blue, and hints of sage/gold so the florals blend with the existing gradient.
- Placement: corner sprays, small under-heading accent, and a divider sprig.

**Implementation steps:**
1. **Search Canva** for pressed-flower wedding floral templates and elements using the Canva connector (`search-brand-templates`).
2. **Generate/create** a small asset set in Canva:
   - top-left corner floral spray
   - top-right corner floral spray
   - small horizontal divider/branch
   - optional accent for the masthead
3. **Export** the chosen assets as transparent PNGs from Canva (`export-design`).
4. **Bring assets into the project** as local files under `public/` (or Lovable CDN assets if sizes warrant).
5. **Update `public/wedding.html`:**
   - Add corner floral images around the `Wedding Party` section (`#party`).
   - Add a small pressed-flower divider under the section title.
   - Add a subtle floral accent above or beside the `Krissie & Cory say "I do"` masthead.
   - Wrap the party grid in a soft ivory feature panel so the florals read cleanly against the gradient.
6. **Responsive check:** ensure the decorative images scale and never trigger horizontal overflow on mobile or tablet.

**Acceptance criteria:**
- Wedding Party section has visible pressed-flower corner accents and a divider.
- Masthead area gains a subtle floral accent that feels elegant, not cluttered.
- No horizontal overflow on mobile/tablet.
- Florals use ivory-forward tones and match the existing blue/lilac/ivory palette.