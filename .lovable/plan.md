## Goal
On mobile (≤600px), make the hero overlay text ("Krissie & Cory" / "are getting married") slightly smaller and shift it upward.

## Change
In `public/wedding.html`, add a mobile media query near the hero-full styles (around line 375):

```css
@media (max-width: 600px) {
  .hero-full-overlay { padding-top: 1.4rem; }
  .hero-full-title { font-size: 2.4rem; margin-bottom: 0.25rem; }
  .hero-full-sub { font-size: 0.68rem; letter-spacing: 0.28em; }
}
```

This reduces the script title from ~3rem to 2.4rem, the caps subtitle from ~0.75rem to 0.68rem, and reduces the top padding of the overlay so both lines sit higher on the hero image. Desktop/tablet sizing is unaffected.
