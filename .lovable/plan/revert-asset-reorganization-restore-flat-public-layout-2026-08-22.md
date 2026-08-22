# Revert asset reorganization — restore flat `public/` layout

## Goal
Undo the asset subfolder reorganization done earlier today. Move all 23 files back to flat `public/` and restore the original flat paths inside `public/wedding.html`. No other changes.

## What gets moved back (flat `public/`)

From `public/assets/images/decorative/` → `public/`:
- floral-corner.png, floral-divider.png, floral-masthead.png, wedding-arch.png

From `public/assets/images/party/` → `public/`:
- party-ashley.jpg, party-derrick.jpg, party-greg.jpg, party-isamar.jpg,
  party-jamie.jpg, party-kyle.jpg, party-rasheeda.jpg, party-reggie.jpg,
  party-sophie.jpg, party-tori.jpg

From `public/assets/images/sections/` → `public/`:
- countdown-bg.jpg, countdown-photo.jpg, countdown-venue.jpg, hero.png,
  honeymoon-photo.jpg, krissie-and-corey.jpeg, story-holding-hands.jpeg, venue-bg.jpg

From `public/assets/videos/` → `public/`:
- hero-video.mp4

Then delete the now-empty `public/assets/` tree.

## Path updates in `public/wedding.html`

Reverse every path change made during the reorganization, so references point at the flat root again:
- `/assets/images/decorative/<file>` → `/<file>`
- `/assets/images/party/<file>` → `/<file>`
- `/assets/images/sections/<file>` → `/<file>`
- `/assets/videos/hero-video.mp4` → `/hero-video.mp4`
- (CSS `url(...)` background images get the same treatment)

`gallery/` references are unchanged — that folder was never moved.

## Verification
- `ls public/*.png public/*.jpg public/*.jpeg public/*.mp4` lists all 23 files flat at root.
- `public/assets/` no longer exists.
- `rg "/assets/" public/wedding.html` returns no matches.
- Load the page in the browser and confirm hero image, hero video, party photos, and florals all render with no 404s.

## Not changing
- No content, styling, copy, or behavior changes — this is a pure file-move + path-rename revert.
- `src/` untouched. `public/gallery/` untouched.
