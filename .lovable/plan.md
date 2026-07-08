## Fix hero image cropping on tablet & mobile

**Problem:** `.hero-full` has a fixed viewport-based height and `.hero-full-img` uses `object-fit: cover`, so on narrower screens the image is cropped horizontally and the bride is chopped off the right side.

**Fix:** Let the hero fit the full width of the page and show the entire photo edge-to-edge on all screen sizes.

### Change in `public/wedding.html`

Update `.hero-full` and `.hero-full-img`:
- `.hero-full` — remove the fixed `height: clamp(...)`. Set `height: auto` and remove `overflow: hidden` so the section takes the natural height of the image at whatever width the screen is.
- `.hero-full-img` — change `object-fit: cover` to `object-fit: contain` isn't needed once height is auto; use `width: 100%; height: auto; display: block;` so the image scales proportionally left-to-right with no cropping.
- `.hero-full-overlay` — keep absolute-positioned title/subtitle over the image. Since the container now sizes to the image, the overlay still covers it; keep the top gradient so text stays legible.
- Drop the two mobile height overrides at `@media (max-width: 860px)` and `@media (max-width: 540px)` since height is now driven by the image itself.

### Verification
Playwright screenshots at 1440, 1024, 768, and 390 wide — confirm the full couple photo is visible edge-to-edge with no horizontal cropping, and the "Krissie & Cory" title overlay still reads well.

### Files touched
- `public/wedding.html` (CSS only)
