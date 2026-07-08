## Goal
Relocate the countdown from its current full-width band (near the top, before Our Story) down to where the `gallery2.jpg` image band currently sits (between Schedule and RSVP), and lay it out side-by-side with the stairs photo of the bride & groom. Also swap the image sitting behind the countdown card for a new one you'll provide.

## Changes to `public/wedding.html`

1. **Remove** the current `<section class="countdown-band">…</section>` block (lines ~1225–1244) from its position above Our Story. Keep all countdown markup/JS intact — just relocate.

2. **Replace** the existing `<div class="image-band" data-file="gallery2.jpg">…</div>` block (lines ~1597–1604, between Schedule and RSVP) with a new two-column section:
   - **Left column:** the stairs photo (`gallery2.jpg` for now, swapped for the new image you send).
   - **Right column:** the countdown card (`.hero-countdown-card` with its headline "The countdown is on!" and the `#countdown` grid).
   - The right column gets a soft background image (the new one you provide via Canva/upload) with a light overlay so the countdown card reads clearly.

3. **Responsive behavior:**
   - Desktop/tablet ≥ 900px: two columns side-by-side, equal height, photo fills left, countdown fills right on top of its background image.
   - Mobile < 900px: stacks vertically — photo on top, countdown block below — no horizontal overflow.

4. **Styles:** add a small `.countdown-split` CSS block (grid, 1fr 1fr on desktop, 1fr on mobile, matching the existing lilac→blue gradient palette and section rhythm). Reuse existing `.hero-countdown-card` and `.cd-*` styles unchanged so the visual language stays consistent.

## Image you'll provide
Once you send the new background image (upload it here, or paste a Canva design link / `canva.link/...` shortlink), I'll drop it into `public/` and wire it as the right-column background. If you also want to change the stairs photo itself, send that too and I'll swap `gallery2.jpg`.

## Verification
Screenshot at desktop (1280 wide) and mobile (390 wide) after the change to confirm:
- Countdown no longer appears above Our Story.
- Stairs photo + countdown sit side-by-side on desktop, stacked on mobile.
- No horizontal scroll on mobile.
- Countdown timer still ticks (JS untouched).
