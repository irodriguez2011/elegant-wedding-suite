# Organize public assets into subfolders

Reorganize everything in `public/` into a clear asset tree, then update every reference in `public/wedding.html` so nothing breaks.

## New structure

```text
public/
├── assets/
│   ├── images/
│   │   ├── decorative/   floral-corner.png, floral-divider.png,
│   │   │                 floral-masthead.png, wedding-arch.png
│   │   ├── party/        party-ashley.jpg, party-derrick.jpg, party-greg.jpg,
│   │   │                 party-isamar.jpg, party-jamie.jpg, party-kyle.jpg,
│   │   │                 party-rasheeda.jpg, party-reggie.jpg,
│   │   │                 party-sophie.jpg, party-tori.jpg
│   │   └── sections/     hero.png, krissie-and-corey.jpeg, venue-bg.jpg,
│   │                     countdown-bg.jpg, countdown-photo.jpg,
│   │                     countdown-venue.jpg, honeymoon-photo.jpg,
│   │                     story-holding-hands.jpeg
│   └── videos/           hero-video.mp4
├── gallery/              g1.jpg, g2.jpg, g3.jpg (unchanged)
└── wedding.html
```

## Reference updates in wedding.html

All paths become root-absolute so they work no matter the URL:

- Party photos: `/party-*.jpg` -> `/assets/images/party/party-*.jpg`
- Hero photo/fallback, story, honeymoon, and the two CSS `url(...)` backgrounds (`venue-bg.jpg`, `countdown-venue.jpg`) -> `/assets/images/sections/...`
- Florals (`floral-corner.png`, `floral-divider.png`) -> `/assets/images/decorative/...`
- Hero video `hero-video.mp4` -> `/assets/videos/hero-video.mp4` (both the markup and the JS in `startHeroVideo()` that sets the source)
- Gallery images -> `/gallery/g1.jpg` etc. (folder stays, paths made absolute)

## Notes

- Files are moved with `git mv`-style moves so history and the deployed Netlify build stay intact; no images are re-encoded.
- `countdown-bg.jpg`, `countdown-photo.jpg`, `floral-masthead.png`, and `wedding-arch.png` are currently unreferenced but will be kept and filed in the right folder.
- After the move, the page is loaded in a browser check to confirm every image and the hero video still load (no 404s in the network log).
