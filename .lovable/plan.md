## 1. Commit message convention (going forward)

All future commits I make will follow Conventional Commits with a scope:

```
<type>(<scope>): <message>
```

- `type`: feat, fix, style, refactor, docs, chore, perf
- `scope`: short area of the site (`hero`, `countdown`, `marquee`, `nav`, `mobile`, `readme`, etc.)
- `message`: imperative, lowercase, no trailing period

Examples:
- `fix(hero): prevent horizontal overflow on mobile`
- `style(countdown): center venue backdrop on small screens`
- `docs(readme): note work-in-progress status`

## 2. Mobile responsiveness fixes (`public/wedding.html`)

Root cause of the horizontal swipe: the hero and countdown sections use the `width:100vw; left:50%; margin-left:-50vw` full-bleed trick while sitting inside a `<section>` that has horizontal padding. On mobile Safari `100vw` includes the scrollbar gutter and the negative margins escape the parent, so the page becomes wider than the viewport — that's the empty gradient + cut navbar you see when swiping right. `overflow-x:hidden` on `body` alone isn't enough; iOS still lets you pan when `html` can scroll.

### Fixes

1. **Lock horizontal scrolling at the root**
   - Add `overflow-x: hidden; max-width: 100vw` to `html` (in addition to `body`).
   - Remove `background-attachment: fixed` on mobile (causes iOS jitter / oversize backgrounds) via a `@media (max-width: 860px)` override to `background-attachment: scroll`.

2. **Stop the full-bleed escape on `.hero-editorial` and `.countdown-band`**
   - Move both blocks out of the padded `<section>` wrapper (or wrap them in a zero-padding container) so they can simply use `width:100%` instead of the `100vw` + negative-margin hack. This guarantees they match the viewport exactly on every device.

3. **Hero image (mobile)**
   - Drop the `min-height: 280px` on `.hero-frame` at `≤600px` — combined with `aspect-ratio:16/9` it was stretching the frame and leaving the photo cropped at the top.
   - Add `@media (max-width: 600px)`:
     - `.hero-editorial { padding: 2.5rem 1rem; }` (keeps the ivory background visible around the photo).
     - `.hero-frame { aspect-ratio: 4 / 5; min-height: 0; }` so the portrait photo fits without cropping.
     - `object-position: center 25%` on the hero `img` so heads aren't cut.

4. **Countdown band / venue photo (mobile)**
   - Replace the inline-styled fixed background with `background-attachment: scroll` and `background-position: center` on small screens so the venue photo is centered and fully contained instead of pushed off-screen.
   - Reduce `.countdown-band` padding to `3rem 1rem` and `.hero-countdown-card` padding to `1.6rem 1.2rem` at `≤600px`.
   - Ensure the card uses `width: 100%; max-width: 100%` on mobile (currently `min(640px, 100%)` is fine, but the parent overflow was making it visually cut).

5. **Sanity guards**
   - Audit any remaining `100vw` usage in the file (e.g. `.ambient-leaves` animation translations) and switch to `100%` where they sit inside the document flow.
   - Add `img, video { max-width: 100%; }` as a global safeguard.

### Verification

After the edit, I'll run a headless Chromium check at 375×812 to confirm:
- `document.documentElement.scrollWidth === window.innerWidth` (no horizontal scroll).
- The hero photo is fully visible with ivory padding around it.
- The countdown card sits centered over the venue photo with no clipping.

Screenshots saved for review before I report back.
