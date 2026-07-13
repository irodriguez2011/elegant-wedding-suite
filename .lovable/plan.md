## Problem
The body gradient uses `160deg` with `background-attachment: fixed` on desktop, which spreads ivory → blue → lilac visibly across the viewport. On mobile/tablet, `background-attachment` switches to `scroll` and the diagonal compresses on the narrower/taller layout, pushing the lilac stop into the very bottom (behind the FAQ section only).

## Fix
Add a mobile/tablet override for the body gradient in `public/wedding.html` (inside the existing `@media (max-width: 860px)` block near line 72) that uses a vertical (`180deg`) gradient with the lilac introduced earlier and repeated so pink is visible mid-scroll — not only at the very bottom — while blue remains dominant.

New mobile/tablet gradient stops:
```
linear-gradient(
  180deg,
  #f9f7f1 0%,
  #dfeaf3 10%,
  #a8c3dd 22%,
  #729cc4 38%,
  #a6b9d8 52%,
  #d5b6e2 66%,
  #729cc4 80%,
  #e4bbed 100%
)
```
Also reposition the pink radial bloom higher (from `85% 85%` → `50% 55%`) so a soft lilac glow appears in the middle of the page on narrow viewports.

Desktop styles (>860px) stay untouched.
