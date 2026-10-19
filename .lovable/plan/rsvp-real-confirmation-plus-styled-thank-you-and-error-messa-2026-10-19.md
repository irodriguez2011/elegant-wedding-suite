# RSVP: real confirmation, plus styled thank-you and error messages

## What guests will see
- **While sending:** the button greys out and reads "Sending...".
- **Success:** the form fades away and a centered thank-you card fades in where the form was. It has the same gold ❦ flourish that sits under the "RSVP" heading, a **Thank You** heading in the site's serif font, and the italic line *"Your RSVP has been received. We can't wait to celebrate with you."*
- **Error:** the form stays up with everything the guest typed. The button works again and reads "Send RSVP". A soft box fades in just above the button: a translucent dusty-blue tint, a thin gold border, a small spaced-out gold label "SOMETHING WENT WRONG", and the italic line *"We weren't able to save your RSVP. Please try again, or text us and we'll make sure you're on the list."* The box disappears as soon as they press Send RSVP again.
- No browser pop-ups. "Contact Us" and the rest of the page stay unchanged.

## One thing your Google script must do
The page will now only show success if your Google Apps Script replies with exactly the word `ok`. For example, it should end with `return ContentService.createTextOutput("ok");`, and it must be deployed with access set to "Anyone". If it replies with anything else, every guest will see the error box even when their answers were saved.

## Technical details (public/wedding.html only)
- In the fetch, drop `mode: "no-cors"`. Keep the URLSearchParams body (a simple request, so the browser doesn't send a preflight check first). Then run `const text = (await res.text()).trim();`. Show success when `text === "ok"`, and show the error state in every other case or in `catch`.
- At submit start, hide `#rsvpError`, disable the button, and set its text to "Sending...".
- Replace the `#rsvpSuccess` markup with: `.section-divider` (❦), `<h3 class="rsvp-thanks-title">Thank You</h3>` (Cormorant Garamond, ivory), and `<p class="rsvp-thanks-sub">` (italic, gold-light). Show it with a `.show` class: display block plus a 0.8s fade-and-rise keyframe. Hide the form and the `.rsvp-sub` intro line when it shows.
- Move `#rsvpError` above the submit button as `.rsvp-error`: `background: rgba(114,156,196,0.18)`, `border: 1px solid var(--gold)`, small radius, padding. Its label is `.rsvp-error-label` (Jost, 0.7rem, uppercase, letter-spacing 0.2em, gold-light), and its text is `.rsvp-error-msg` (Cormorant italic, ivory). It uses the same fade keyframe when `.show` is added.
- Check in Playwright with the Google URL mocked three ways: a reply of "ok" shows the card; a reply of "error" shows the box with the fields still filled in; a network failure shows the box. Pressing submit again hides the box. Screenshot both states.
