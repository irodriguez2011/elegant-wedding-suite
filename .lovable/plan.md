# Add a "Have a question?" note box under the FAQs

Add a short ask-us block directly below the FAQ accordion, styled to match the reference image and the existing style guide.

## What it looks like

- A thin gold hairline divider and small ❦ ornament close the FAQ list.
- Header: "Have a question?" in the existing serif display style, dark charcoal (#1a1a2a).
- Subheader: "If you couldn't find what you're looking for above, send us a note." in the soft blue-grey italic used elsewhere.
- One large textarea, placeholder "Type your question here…", filled with the site ivory (`--ivory-2` #f9f7f1), thin gold-tinted border, subtle inner shadow, square corners — no bright white.
- Gold button below, centered: "SEND QUESTION" in letterspaced caps, matching existing gold (#B8954E) button treatment with the same hover.
- Fades in on scroll like the other FAQ items; mobile stacks full-width with reduced padding.

## Behavior

The form posts to the same Formspree endpoint the RSVP form already uses, with a "Question" field. On submit it shows the same inline confirmation pattern the RSVP form uses.

## Technical notes

- All changes are in `public/wedding.html`: new `.faq-ask` CSS near the existing `/* ── FAQ ── */` block, new markup after `.faq-list` inside `#faq`, and `.faq-ask` added to the scroll-reveal selector list.
- Colors use existing variables (`--ivory-2`, `--gold`, `--gold-deep`) only; no new palette values.
