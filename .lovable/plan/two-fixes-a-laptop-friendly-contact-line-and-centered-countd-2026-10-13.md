# Two fixes: a laptop-friendly contact line and centered countdown details

## What we're adding

Two changes, both in the one page file. First, the contact fix: under the gold **Send a Text** button, the phone number becomes visible text that a laptop guest can read and copy with one click. Phone guests keep the button exactly as it is — it still opens Messages with the number filled in. Second, the countdown details (Date, Venue, Address) get centered on every screen, the way they already are on a laptop.

```text
        ❦  ───────────────────────────────  ❦

                 Have a question?

     If there's anything you'd like to know,
           feel free to send us a text.

           [   SEND A TEXT   ]

        or text us directly
          516-274-9104   ·  copy
```

## How it behaves

- Clicking the number (or the small **copy** hint beside it) puts `+15162749104` on the clipboard.
- The hint swaps to **copied** in gold for about two seconds, then returns to **copy** — no pop-ups, no alert boxes.
- If a browser blocks clipboard access, the number is simply there to select and copy by hand, so nothing breaks.
- Nothing else on the page moves: same section, same spacing rhythm, same gold accents.

## Technical details

**File:** `public/wedding.html` (single static page; no backend, no new packages).

**Markup** — inside the `.faq-ask` block (currently lines 1886–1892), after the existing `<a class="faq-ask-btn" href="sms:+15162749104">`:

- A label line, `or text us directly`, in Cormorant Garamond italic, the same muted slate used by `.faq-ask-sub`.
- A `<button type="button" class="faq-ask-number">` holding the number `516-274-9104` in gold `var(--gold)` and a `<span class="faq-ask-copy">copy</span>` hint.

**Styles** — new rules added directly after `.faq-ask-btn:hover` (line ~634), before the `@media (max-width: 860px)` block:

- `.faq-ask-number`: transparent background, no border, gold text, `Cinzel` at the button's 0.72rem with the same 0.22em letter-spacing so it reads as part of the same family, `cursor: pointer`, and a hover state matching `.faq-ask-btn:hover`'s gold-deep shift.
- `.faq-ask-copy`: smaller, lower-opacity gold, with a thin gold underline; swaps to `copied` via a `.is-copied` class on the button.
- Mobile sizing added to the existing `@media (max-width: 860px)` block so the number never wraps awkwardly on a phone.

**Script** — a small IIFE appended near the other page scripts (after the ember/fleck spawners), following the file's existing `var`-style vanilla JS:

- Try `navigator.clipboard.writeText('+15162749104')`; on failure or absence, fall back to a hidden `<textarea>` plus `document.execCommand('copy')`.
- On success add `.is-copied`, set the hint text to `copied`, and clear it with a `setTimeout` after 2000ms (clearing any prior timer first).

**The `sms:` button stays** — it is the fastest path on a phone, and the new line only adds a desktop route.

## Centering the countdown details

On a phone, the three lines under the countdown sit flush left:

```text
  DATE                     DATE
  JUNE 19, 2027      ->    JUNE 19, 2027
  VENUE                    VENUE
  501 UNION        ->      501 UNION
```

Why it happens: below 540px wide, each label stacks above its value, and the stacked row stretches every piece across the full card width, so the text falls to the left edge.

**Fix** — `public/wedding.html`, inside the `@media (max-width: 540px)` block at line 276: add `align-items: center;` to the `.cd-line` rule, so the stacked label and value both center. Same gold labels, same sizes, same wording, same order — only the alignment changes, and the wide-screen layout is untouched.

## Verification

Playwright run against `http://localhost:8080`: dismiss the envelope intro, scroll to the FAQ, click the number, then confirm the clipboard holds `+15162749104`, the hint reads `copied`, and it reverts. Then screenshot the countdown card at 390px and 1280px wide and confirm the Date, Venue and Address lines are centered in both. Both runs check for zero failed requests, no console errors, and no sideways swipe. Build log at `/tmp/observability/build-errors.log` stays clean.

## Note

You also ticked "Other" without a note — if you had a different idea in mind alongside this one, tell me and I'll fold it in.
