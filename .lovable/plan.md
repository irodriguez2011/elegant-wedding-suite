### Problem
The current page has a "Weekend Agenda" section that should be removed entirely, and a "Travel & Accommodations" section that should be replaced with a Frequently Asked Questions section. The nav still links to the removed/replaced sections, and the scroll-reveal script references the old selectors.

### Changes to `public/wedding.html`

1. **Remove the Weekend Agenda section**
   - Delete the entire `<section id="weekend" class="weekend">` block (the three-day agenda grid).

2. **Replace Travel & Accommodations with FAQ**
   - Replace the `<section id="travel" class="travel">` block with a new `<section id="faq" class="faq">` block.
   - Use the existing section heading pattern: `.section-tag`, `.section-title`, `.section-divider`.
   - Heading: tag = "Need to know", title = "Frequently <em>Asked Questions</em>".
   - Add the following FAQs as styled accordion items:
     - What time should I arrive?
     - Where should I park?
     - Wedding Registry
     - Will there be open bar?
     - Are children allowed?
     - Can I take photos during the event?
   - Each item has a question button and an answer panel.

3. **Add FAQ styles**
   - `.faq-list` max-width 800px, centered.
   - `.faq-item` with a subtle border/separator.
   - `.faq-question` as a full-width button using the existing heading font (`Cinzel`) and accent color (`var(--gold-deep)`).
   - `.faq-answer` with the body font, muted color, and smooth height animation.
   - Add a small plus/minus or chevron indicator on the question.
   - Responsive: single column on mobile.

4. **Update navigation**
   - Remove the "Agenda" link (`href="#weekend"`).
   - Replace the "Travel" link with "FAQ" (`href="#faq"`).

5. **Update scroll-reveal selectors**
   - Remove `.agenda-item` and `.travel-card` from the reveal list.
   - Add `.faq-item` so the new FAQ items animate in on scroll.

6. **Remove unused CSS**
   - Delete the `.agenda-grid`, `.agenda-item`, `.agenda-icon`, `.agenda-day`, `.agenda-title`, `.agenda-text` rules.
   - Delete the `.travel-grid`, `.travel-card`, `.travel-card-head`, `.travel-icon`, `.travel-card-title` rules.

No other sections or page structure will change. The page flow will naturally close the gap where the agenda was and the new FAQ will sit in the same position as the old Travel section.