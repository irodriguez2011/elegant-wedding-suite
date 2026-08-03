# Our Story — single unified layout

## What changes

- Remove the heading "An exclusive look at their love story".
- Remove the standalone two-column paragraph block that currently sits above the photo.
- Move all of that story text next to the photo, condensed into exactly two paragraphs to the right of the image:
  - Paragraph 1: the Hinge match, the birthday nudge, the ask-out, and the Brooklyn bowling alley first date where things turned serious.
  - Paragraph 2: traveling and NYC nights, moving in together, the two proposals (private one, then the surprise at the Colombian restaurant), and the invitation to celebrate on June 19th, 2027.
- Keep the P.S. paragraph exactly as written, in its current position below.
- Keep the section title, tag, and divider as they are.

## Technical notes

In `public/wedding.html`: delete the `.story-cols` block and the `.story-subhead` element, and rewrite `.story-feature-text` to hold the two merged paragraphs. Remove the now-unused `.story-cols` CSS rules and its entry in the scroll-reveal selector list at the bottom of the file. Photo stays left, text right, stacking to one column on mobile as it does now.
