## Fade venue photo and update location text

### 1. Decrease venue photo opacity behind the countdown
In `public/wedding.html`, move the venue photo from `.countdown-split__panel`'s `background-image` to a `::before` pseudo-element so its `opacity` can be set independently. Set the pseudo-element opacity to `0.8` (80% visible, 20% faded). Keep the panel's beige fallback background so the area never looks empty.

### 2. Replace "Queens" with "Brooklyn"
Update every text occurrence of "Queens" in `public/wedding.html` to "Brooklyn":
- Hero card date: "June 19, 2027 · Queens, NY" → "Brooklyn, NY"
- Details section: "Queens, New York" → "Brooklyn, New York"
- Weekend agenda: "Meet the family at our favorite Queens spot." → "...Brooklyn spot."
- Countdown footer: "June 19, 2027 · Queens, New York" → "Brooklyn, New York"
- Footer: "The Allens · June 19, 2027 · Queens, New York" → "Brooklyn, New York"

### Files touched
- `public/wedding.html`

### Verification
Preview the countdown section to confirm the venue photo is slightly faded and the countdown card text remains readable; spot-check that all "Queens" references now read "Brooklyn".
