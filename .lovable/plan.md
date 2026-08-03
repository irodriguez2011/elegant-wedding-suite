# Fix critical dependency vulnerability

## What's wrong
The security scan flags three TanStack packages (`@tanstack/react-router`, `@tanstack/react-start`, `@tanstack/router-plugin`). None of them are actually vulnerable themselves — they all pull in the same transitive package, `seroval`, currently resolved at `1.5.2`.

Advisory GHSA-mv8w-475r-vwqw affects `seroval <= 1.5.2`; the first patched release is `1.5.3` (latest is `1.6.0`). Every TanStack dependency requests `seroval: ^1.5.0`, so a patched release satisfies their ranges without touching the TanStack versions.

## Fix
1. Add an override in `package.json` pinning `seroval` (and `seroval-plugins`, which tracks the same version line) to `^1.5.6`, so the resolver can never fall back to a vulnerable build:
   ```json
   "overrides": {
     "seroval": "^1.5.6",
     "seroval-plugins": "^1.5.6"
   }
   ```
2. Reinstall with `bun install` so `bun.lock` regenerates with the patched version.
3. Verify: confirm `bun.lock` no longer lists `seroval@1.5.2`, run a dependency scan to confirm the critical finding clears, and run a production build so the router/start packages still work with the bumped `seroval`.
4. Mark the security finding as fixed once the scanner confirms the lockfile is clean.

## Notes
- No application code changes — this is entirely a dependency-resolution fix.
- If the build surfaces an incompatibility with `1.5.6`, the fallback is pinning to `1.5.3` (the minimum patched release) instead.
