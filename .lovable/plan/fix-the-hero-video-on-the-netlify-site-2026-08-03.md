# Fix the hero video on the Netlify site

## Why it's not showing
The video tag points at `/__l5e/assets-v1/.../hero-video.mp4`, a Lovable-internal asset path. That URL returns the file on the Lovable preview but does not exist on Netlify, so the element fails silently and only the hero photo shows.

## What changes
- Copy the actual video file into the site folder as `public/hero-video.mp4` so it deploys with the rest of the assets.
- Point the hero video at `hero-video.mp4` (same relative style as `hero.png`), which works on both Lovable and Netlify.
- Hold playback until the guest finishes the intro: switch the video to `preload="none"` with no `src` on load, and only attach the source and press play at the moment "Enter" is clicked on the cordially-invited card. The envelope seal tap alone will not start it.
- Keep the existing behavior after that: plays once, then cross-fades into the hero photo, with a fallback straight to the photo if playback is blocked or errors.

## Technical notes
- Files touched: new `public/hero-video.mp4`; `public/wedding.html` (video element attributes and `startHeroVideo()` in the intro script).
- `startHeroVideo()` is already only called from `closeIntro()`, so the Enter gate stays; the change makes the file also not download until then.
