Update the Day-of Schedule timeline in `public/wedding.html` with the new times and event labels provided.

## Changes

Replace the existing 5 timeline items in `<section id="schedule" class="timeline">` with 6 new items:

| Time | Event |
|------|-------|
| 5:00 PM | Guest Arrival |
| 5:30 PM | Ceremony |
| 6:30 PM | Cocktail Hour |
| 7:30 PM | Reception |
| 8:30 PM | Dinner |
| 11:00 PM | Guest Departure |

## Implementation notes
- Keep the existing `.timeline-list` structure, `.t-time`, `.t-line`/`.t-dot`, `.t-title`, and `.t-desc` classes.
- Update or remove the `.t-badge` labels to match the new events (e.g., remove location badges that no longer apply, or simplify them).
- Keep the section heading and divider styling unchanged so it remains consistent with the rest of the page.

## Verification
- Open `/wedding.html` in the preview and scroll to the Day-of Schedule section.
- Confirm all six new times and labels appear in order and the layout is intact on desktop and mobile.