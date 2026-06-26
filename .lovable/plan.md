## Plan

Move the venue photo behind the hero image, drop the beige mat, and give the countdown a solid beige-ivory block.

### What will change

1. **Hero background becomes the venue photo**
   - Move `venue-bg.jpg` from the `.countdown-band` to the `.hero-editorial` wrapper.
   - Make the venue image span the full hero section width with `background-size: cover` and center positioning.
   - Keep the existing color harmonization (saturate/hue-rotate/sepia) so the photo still meshes with the palette.
   - **Lessen the beige overlay** over the venue photo: replace the heavy multi-layer beige wash with a very subtle lightening layer, so the venue is clearly visible but still cohesive.

2. **Remove the beige `.hero-photo-panel` div**
   - Delete the beige mat wrapper and its inner decorative border.
   - Keep the couple photo (`hero.png` / `krissie-and-corey.jpeg`) as the foreground element.

3. **Add depth to the couple photo**
   - Frame the photo with a `box-shadow` drop shadow (soft, in the blue/grey range) so it lifts off the venue background.
   - Keep the rounded corners and subtle warm-white-gold corner glow already in place.

4. **Countdown becomes a solid beige-ivory block**
   - Strip the venue image and beige overlay out of `.countdown-band`.
   - Set `.countdown-band` to a solid `var(--beige)` / `var(--ivory-2)` background that matches the nav and other sections.
   - Keep the countdown card translucent with its current backdrop blur and gold border so the new solid background shows through elegantly.

5. **Responsive check**
   - Ensure the hero photo still scales well on tablet/mobile, and the venue background never looks cropped or washed out.

### File to edit

- `public/wedding.html` only (CSS around `.hero-editorial`, `.hero-photo-panel`, `.countdown-band`, `.hero-countdown-card`, and the matching HTML structure).

### Out of scope

- No color palette changes.
- No font changes.
- No countdown logic changes.
- No other sections touched.