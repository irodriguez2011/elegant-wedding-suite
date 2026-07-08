### Problem
The `.countdown-split` section inherits the global `section { padding: 5rem 2rem; }` rule. That padding is what leaves the visible gradient strip on the left, right, and (most noticeably) below the venue photo before the RSVP section — so the photo never actually reaches the edges of the page and there is a large gap above RSVP.

The photo itself is already rendered with `background-size: cover`, so it does fill whatever box it is given. The fix is to give it the full section box, not to swap the image.

### Changes to `public/wedding.html`

1. Override the global section padding just for the countdown split so the venue panel goes edge‑to‑edge horizontally and sits flush against the RSVP section vertically:
   ```css
   .countdown-split { padding: 0; margin: 0; }
   ```
2. Drop the venue photo opacity from `1` to `0.7` on `.countdown-split__panel::before`.
3. Leave `background-size: cover` and `min-height: 520px` in place so the photo always fills the panel from left to right, and keep the countdown card centered on top.

No other sections, no HTML structure, no image asset changes.
