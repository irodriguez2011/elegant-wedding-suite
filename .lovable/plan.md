# Hero video that fades into the hero photo

Play your engagement clip in the hero area at the top of the page. When it finishes (about 10 seconds), it cross-fades softly into the current `hero.png` image, which then stays for the rest of the visit. The "Krissie & Cory / are getting married / June 19, 2027 / 501 Union" overlay text stays on top the whole time, so nothing disappears during the swap.

## Behavior

- Video autoplays muted and inline the moment the envelope opens and the page is revealed (browsers block autoplay with sound, so it plays silently).
- Plays once, no loop, no controls.
- On `ended`, video fades out over ~1.2s while the photo fades in underneath — no flash or jump.
- Fallback: if the browser blocks autoplay or can't load the video, the photo shows immediately and nothing looks broken.
- Mobile/tablet: same behavior, video is cropped with `object-fit: cover` to match how the hero photo currently fills the band.

## Technical notes

- Upload `cory_engagement.mov` as a Lovable asset and reference its CDN URL (the file is 2.7 MB, H.264 1280x720, 9.9s). Since `public/wedding.html` is a static file, the URL is hardcoded into the markup.
- Add a `<video class="hero-full-video" autoplay muted playsinline preload="auto">` layered above `.hero-full-img` inside `.hero-full`, both absolutely positioned and `object-fit: cover`.
- Video starts at `opacity: 1`; an `ended` listener adds a class that transitions opacity to 0 over 1.2s. Also attach `error` and a play-promise catch that trigger the same fade so the photo always ends up visible.
- Poster set to `hero.png` so the very first frame matches the photo instead of showing black.
- Uses only `public/wedding.html`; no other files change.
