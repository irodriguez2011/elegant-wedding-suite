# Replace the Scrolling Photo Carousel Images

## What changes

The scrolling photo strip (the band of photos that slides sideways between "Our Story" and the Day-of Schedule) currently cycles through 3 photos. It will be replaced with the 5 photos you just uploaded, in the order you attached them:

1. Embrace in the stone arcade — bride's hand on his shoulder, looking at camera
2. Full-length, face to face, holding hands in the grand hallway
3. Forehead kiss, sunlit park with green foliage behind
4. Cheek kiss close-up, warm arched interior
5. Holding hands, bride facing camera in the pleated gown

The old 3 photos are used nowhere else on the site, so they are removed entirely. Nothing else on the page moves or changes — same heights, same gold-bordered cards, same slide speed and pause-on-hover.

## How it works

The carousel is a seamless loop: the photo set is repeated 4 times in a row and the strip slides exactly one set's width before jumping back, so you never see a seam. Today that is 3 photos x 4 repeats = 12 images. It becomes 5 photos x 4 repeats = 20 images. Because the strip is still exactly 4 identical copies, the existing slide animation stays seamless with no timing changes.

## Technical details

- Copy the 5 uploads from `/mnt/user-uploads/` into `public/gallery/` as `g1.jpg` through `g5.jpg`, overwriting the current `g1.jpg`–`g3.jpg` and adding `g4.jpg`, `g5.jpg`. Real files in `public/` match how every other photo on this site is served, and the new files are small (124–259 KB each) — the swap actually drops about 1.8 MB since the old `g3.jpg` was a 2.6 MB duplicate of the countdown photo.
- Rewrite the `.photo-marquee-track` block in `public/wedding.html` (lines 1520–1533) to the 5-photo set repeated 4 times. The first copy carries `alt="Cory and Shornakay"`; the other three copies stay `alt="" aria-hidden="true"` so screen readers announce each photo once.
- `@keyframes marqueeRight` (`translateX(-25%)`) and all `.photo-marquee` sizing/media-query rules are untouched — one copy of 5 photos is still 25% of the track.
- Verify with Playwright: 20 `<img>` elements in the track, zero failed network requests, and a screenshot of the strip to confirm the photos render and the loop has no visible gap.
