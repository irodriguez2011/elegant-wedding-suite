# Revert to August 16 commit

## Goal
Restore the project to the exact state of the August 16 commit (`8e2240d` — "Update README with wedding website link"), undoing all work done after that point (the asset-folder reorganization and its revert).

## What changed since Aug 16 (only 3 files)
| File | Change | Why it matters |
|------|--------|----------------|
| `public/wedding.html` | Modified | Path prefixes went from relative (`src="hero.png"`) to root-absolute (`src="/hero.png"`). Also **52 class attributes got corrupted** with a leading slash (`class="/party-panel"`, `class="/party-grid"`, etc.) during the buggy revert — these break the wedding-party CSS styling. |
| `.lovable/plan/organize-public-assets-into-subfolders-2026-08-22.md` | Added | Archived plan from the reorg work. |
| `.lovable/plan/revert-asset-reorganization-restore-flat-public-layout-2026-08-22.md` | Added | Archived plan from the revert work. |

No other files (routes, components, README, assets) changed after Aug 16.

## Steps

1. **Restore `public/wedding.html`** to the exact Aug 16 commit content (extracted via `git show 8e2240d:public/wedding.html`).
   - This fixes the 52 corrupted `class="/..."` attributes back to clean `class="party-panel"` etc.
   - Returns asset references to relative paths (`src="hero.png"`, `url('venue-bg.jpg')`) — these resolve correctly since assets sit flat at the `public/` root and the page is served at `/wedding.html`.
2. **Delete the two archived plan files** added after Aug 16:
   - `.lovable/plan/organize-public-assets-into-subfolders-2026-08-22.md`
   - `.lovable/plan/revert-asset-reorganization-restore-flat-public-layout-2026-08-22.md`
3. **Verify** with Playwright: load `/`, confirm it redirects to the wedding page, no 404s on assets, the wedding-party circles render with correct styling, and the hero/countdown images display.

## Note on the built-in alternative
You can also do this yourself via the **History tab** (top of chat) → select the Aug 16 version → revert. The manual restore above is offered because it's surgical and also fixes the broken class names that a history-revert alone would reproduce if the corrupted state was saved as a snapshot.
