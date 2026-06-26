## Plan: Refine masthead typography and remove issue/date line

### 1. Define a font style guide for the wedding site
Limit the page to a clear, wedding-appropriate hierarchy:
- **Pinyon Script** — romantic script moments: masthead headline, envelope seal, footer names, and the countdown card headline.
- **Cinzel** — formal labels and structure: navigation, section tags, buttons, countdown numerals.
- **Cormorant Garamond** — elegant section titles and pull quotes.
- **Jost** — body copy and paragraphs.

This drops the now-redundant **Great Vibes** usage so we stay at four fonts total.

### 2. Change the masthead headline font
Update `.masthead-headline` in `public/wedding.html` to use `Pinyon Script` with a larger size and a little extra letter-spacing so "Krissie & Cory say 'I do'" feels more elegant and romantic. Keep the existing color/structure.

### 3. Remove the issue/date line
Delete the `.masthead-top` block (lines ~964-968) containing `Issue No. 001`, `Queens, New York`, and `June 19, 2027`. The wedding date is already repeated in the countdown card footer and other sections, so the date is not lost.

### 4. Consolidate the countdown headline into Pinyon Script
The `.cd-headline` currently uses `Great Vibes`. Switch it to `Pinyon Script` so script moments share one font, then remove the unused `Great Vibes` import from the Google Fonts link.

### 5. Validate the preview
Refresh the preview and confirm the masthead reads cleanly, the headline feels elegant, and the issue/date line is gone without breaking the countdown or surrounding spacing.

### Technical notes
- File to edit: `public/wedding.html`.
- No new fonts or npm packages are needed; we reuse the existing `Pinyon Script` load.
- Only CSS and static HTML changes are required; no server logic or routes are affected.