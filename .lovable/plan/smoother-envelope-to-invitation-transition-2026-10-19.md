# Smoother envelope-to-invitation transition

## What changes
Tapping the envelope will flow straight into the invitation card with no dead pause:
- The letter rises out of the envelope, and while it is still moving the envelope gently fades and sinks away.
- At the same moment the invitation card fades and rises in, so the two motions overlap (a cross-fade) instead of one finishing, a pause, then the next starting.
- Total time from tap to readable card drops from about 2 seconds to about 1.3 seconds.
- The seal still pops off first; nothing else about the look changes.

## Technical details
- In `public/wedding.html`: shorten the `setTimeout(toInvite, 1100)` to ~600ms so step2 starts while the letter is still rising.
- Add opacity/transform transitions (~0.7s ease) to `.stage-env` and `.stage-card` so step2 cross-fades rather than snapping; envelope scales slightly down/fades on step2.
- Shorten `cardRise` to ~0.7s with a softer ease (cubic-bezier) and smaller offset (20px), no delay.
- Keep reduced-motion behavior instant.
- Verify on phone (393px) and laptop with Playwright screenshots mid-transition.
