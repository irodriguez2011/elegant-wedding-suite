# Hero video: loop it, drop the ending photo

## What changes

Right now the clip plays once and then fades out to reveal the still photo underneath it. You asked for the opposite: the clip should keep running, and that still photo should be gone.

- The video plays continuously, looping back to the start each time it finishes (~10 seconds per pass).
- The still photo that was waiting underneath is removed, so the hero is the moving clip the whole time.
- The names, "are getting married", the date and the venue line stay exactly where they are, sitting on top of the clip.

Two small safeguards that come with an endless video:

- If the clip ever fails to load, the first frame of the couple is shown instead of an empty dark box.
- People who ask their device for reduced motion get that same still frame rather than a clip that never stops.

One thing to expect: the hero band becomes a little shorter than it is today, because the clip is wider (16:9) than the photo it replaces (3:2). On a phone that is roughly 260px tall becoming 220px; on a wide screen about 684px becoming 577px. Nothing gets cropped and neither of you gets cut off. If you would rather keep today's taller band, say so and I will crop the sides of the clip instead.

## Technical

File: `public/wedding.html` only. No new files, no package changes.

1. **Markup** (`~1458-1474`)
   - Delete the `<img class="hero-full-img" src="hero.png" ...>` element.
   - Add `loop` to `<video id="heroVideo">` and set `v.loop = true` in the start function for older Safari.
   - Keep `poster="hero.png"` — it is the pre-play / failed-load / reduced-motion still, not the old ending photo.

2. **CSS** (`~340-364`)
   - Remove the `.hero-full-img` rule and the `.hero-full-video.is-done` rule plus the now-pointless `opacity` transition.
   - Make the video the element that gives the hero its height: `position: static; display: block; width: 100%; height: auto;` (intrinsic 16:9). `.hero-full` keeps `position: relative` so `.hero-full-overlay` (`inset: 0`) still anchors to it.

3. **JS** (`startHeroVideo`, `~1975-1991`)
   - Drop the `ended` listener that added `is-done`; with `loop` it never fires anyway.
   - Keep the `error` path as a no-op — the poster already covers it.
   - Skip `startHeroVideo()` entirely when `__reduceMo` is true, leaving the poster visible.
   - Add an `IntersectionObserver` on `.hero-full`: pause the clip when the hero scrolls out of view, resume when it returns, so an infinite loop does not keep burning battery while the guest reads the rest of the page.

4. **Verify** with Playwright: hero height comes from the video (not zero), `video.loop === true`, no `is-done` class ever applied, `hero.png` requested only as poster, zero failed requests, and the clip still running after 12 seconds.

## Left alone

`public/hero.png` stays on disk (poster). The unused `.hero-photo` styles from an older hero layout are untouched — unrelated to this change.
