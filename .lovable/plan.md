## Plan

Remove the **The Details** section from `public/wedding.html` and reposition the **Day-of Schedule** section to where Details currently sits, so the page flow is continuous and no empty gap is left.

## Changes

1. **Remove the Details section**
   - Delete the entire `<section id="details" class="details">` block (currently after the gallery strip, before The Style Edit).

2. **Remove the Details nav link**
   - Delete the `<a href="#details" onclick="closeMenu()">Details</a>` item from the sticky nav menu.

3. **Move Day-of Schedule up**
   - Cut the entire `<section id="schedule" class="timeline">` block from its current location (after Wedding Party).
   - Paste it in the spot vacated by Details: after the gallery strip and before The Style Edit section.

4. **Verify flow**
   - Confirm the new section order reads: Gallery → Day-of Schedule → Style Edit → Wedding Party → FAQ → RSVP → Honeymoon Fund.
   - Confirm no orphaned `#details` anchors remain in the nav or elsewhere.

## File affected

- `public/wedding.html`

## Verification

- Open `/wedding.html` in the preview.
- Scroll from the hero down through the sections and confirm Details is gone and Day-of Schedule appears right after the gallery.
- Test the nav menu on desktop and mobile to confirm the removed Details link is no longer present and Schedule still jumps to the correct section.