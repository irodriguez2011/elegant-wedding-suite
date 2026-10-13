# Dress code: Formal + children welcome

Two wording changes on the wedding page. Nothing moves, nothing restyles.

## 1. Dress code — Black Tie becomes Formal

In the "Dress Code" section (the card under "What to wear"):

- The big label changes from **Black Tie** to **Formal**.
- The paragraph is rewritten to actually define formal, keeping the current warm opening line and closing sentiment:

> We can't wait to celebrate with our family and friends in their finest attire. The dress code for our wedding is Formal — dressed-up elegance, a step below black tie but well beyond everyday wear. Ladies are encouraged to wear floor-length gowns, dressy midi dresses, or elegant cocktail dresses. Gentlemen are asked to wear a suit and tie; a tuxedo is welcome but not required. When in doubt, err on the side of dressing up — and wear something you can dance the night away in.

The section tag ("What to wear"), the "Dress Code" heading, and the menu link stay exactly as they are. "Black Tie" appears nowhere else on the page, so no other spot needs touching.

## 2. FAQ — children are now allowed

The question "Are children allowed?" stays. The answer changes from the adults-only note to:

> Yes — children are welcome! We would love for your little ones to join us and be part of the celebration. Please include them in your guest count when you RSVP so we can plan accordingly.

The guest-count picker (1–4 guests) and the optional note field both already exist on the RSVP form, so that instruction matches what guests actually see. The new answer is short enough to fit the answer panel without clipping.

## What I'll check after

- Open the page and confirm the dress-code card reads "Formal" with the new paragraph, and no stray "Black Tie" remains anywhere.
- Click the "Are children allowed?" question and confirm the new answer opens fully and reads cleanly on both phone and desktop widths.
- Confirm no other section (countdown, hero, footer, invitation) still says black tie or adults only.

## Technical notes

- Single file edit: `public/wedding.html`, two text blocks (the `.style-code` / `.style-note` pair, and the children `.faq-answer` paragraph).
- No CSS changes: the accordion cap is `max-height: 220px`, and the new answer is roughly two lines, well inside it.
- No asset, route, or dependency changes.
