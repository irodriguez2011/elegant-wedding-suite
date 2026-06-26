# Plan: Marquee background + centered start + more ambient flecks

1. **Match the marquee background to the hero ivory panel**
   - Change `.photo-marquee { background: var(--ivory); }` to `var(--beige)` (`#f7f4ec`) so it matches the cool ivory behind the hero image.

2. **Center the image strip and remove blank space**
   - Update the marquee CSS so the duplicated image set is centered within the section width at the start, then scrolls continuously to the right.
   - Keep the duplicated 3-image set (6 images total) for a seamless loop.
   - Maintain the soft edge fade on both sides so the images blend into the section.

3. **Add a few more subtle gold flecks across the whole page**
   - Increase the ambient floating gold fleck count from `14` to `24` so there is a gentle, continuous shimmer as the user scrolls down the page.
   - Keep the flecks small, low opacity, and slow-moving so they stay elegant and not overwhelming.

4. **No other changes**
   - Leave all other colors, fonts, layout, sections, and animations untouched.

File to edit: `public/wedding.html`