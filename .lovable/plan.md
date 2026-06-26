## Why no images show

The files exist at `public/gallery/g1.jpg`, `g2.jpg`, `g3.jpg`, but each slide is `position:absolute; opacity:0` with only `.is-active` fading in. If the JS init fails (or the slide images haven't loaded yet at first paint) you see an empty walnut band. Replacing the carousel with a real side-by-side marquee removes the problem.

## Plan — side-by-side auto-scrolling marquee

Replace the fade carousel (CSS lines 594–626, HTML lines 1145–1159, JS lines ~1740–1772) with an infinite horizontal marquee in `public/wedding.html`.

1. **HTML** — swap the `.carousel-band` block for:
   ```html
   <div class="photo-marquee" aria-label="Krissie and Cory gallery">
     <div class="photo-marquee-track">
       <!-- original set -->
       <img src="gallery/g1.jpg" alt="" />
       <img src="gallery/g2.jpg" alt="" />
       <img src="gallery/g3.jpg" alt="" />
       <!-- duplicated set for seamless loop -->
       <img src="gallery/g1.jpg" alt="" aria-hidden="true" />
       <img src="gallery/g2.jpg" alt="" aria-hidden="true" />
       <img src="gallery/g3.jpg" alt="" aria-hidden="true" />
     </div>
   </div>
   ```
2. **CSS** — replace the carousel block with a marquee:
   - `.photo-marquee` fixed height (~420px desktop, 300px mobile), full-width, `overflow:hidden`, ivory background, soft top/bottom edge gradient.
   - `.photo-marquee-track` `display:flex; gap:1.25rem; width:max-content;` with `animation: marqueeRight 45s linear infinite;` and `:hover { animation-play-state: paused; }`.
   - `@keyframes marqueeRight { from { transform: translateX(-50%); } to { transform: translateX(0); } }` — moves the strip visually to the right (track starts shifted left, slides back to 0, then loops).
   - `.photo-marquee img` height 100%, width auto, `object-fit: cover`, rounded corners, subtle shadow.
3. **JS** — remove the old carousel script (lines ~1740–1772). No JS needed; the marquee is pure CSS.
4. **Leave everything else alone.**

The result: the three photos sit side by side at their natural aspect ratio, the strip drifts slowly rightward forever, pauses on hover, and if any single image fails to load the others still show.