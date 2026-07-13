The wedding party card structure has broken nesting: Ashley's (Matron of Honor) `.party-card` div is never closed, so Tori and Sophie's cards are nested inside it instead of being siblings in the grid. That's why the circles look disorganized.

## Fix

In `public/wedding.html` (lines ~1531–1551), restructure so each `.party-card` is a direct child of `.party-grid`. Keep the current order (Maid of Honor first, Matron of Honor second, then Bridesmaids, then Groomsmen):

1. Isamar — Maid of Honor
2. Ashley — Matron of Honor
3. Tori — Bridesmaid
4. Sophie — Bridesmaid
5. Groomsman 1–4

Specifically: close Ashley's `.party-card` right after her `.party-info` block, then remove the extra wrapping `</div>` that currently sits after Sophie's card. No CSS or content changes — just fixing the div nesting so all 8 cards sit as siblings inside `.party-grid`.