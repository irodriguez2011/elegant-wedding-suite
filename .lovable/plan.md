# RSVP: friendly "required" hints, phone-or-email rule, and an error preview

## What guests will see
- If they press **Send RSVP** with something missing, a small italic gold line appears under each problem field, and the first problem field gets the cursor. Nothing is sent until everything is fixed.
  - First Name: "First name is required"
  - Last Name: "Last name is required"
  - Phone / Email: if both are blank, a line under Email reads "Please add a phone number or email so we can reach you". One of the two is enough.
  - Email: if they type something that isn't an email address, "Please enter a valid email"
  - Will you attend?: "Please let us know if you'll attend"
- Each hint disappears as soon as the guest fixes that field.
- The browser's own grey pop-up bubbles are turned off, so only these site-styled hints appear.

## Temporary error preview (for you only)
- Open the site with `?rsvpPreview=error` added to the address, for example `.../wedding.html?rsvpPreview=error#rsvp`. The RSVP error box shows right away, exactly as guests would see it.
- Regular visitors never see it. I'll remove it once you tell me the design looks good.

## Technical details (public/wedding.html only)
- Add `novalidate` to the form and handle validation in JS before the fetch.
- Add `<small class="rsvp-field-error">` under first name, last name, email (phone-or-email message), and the attend group. The style is Cormorant italic, about 0.85rem, gold-light, hidden by default, shown with `.show` and the existing rsvpFade animation. Invalid inputs get a gold-light border via `.invalid`.
- Clear a field's hint on its `input`/`change` event. Editing phone also clears the phone-or-email hint.
- Email format check: a simple `/^\S+@\S+\.\S+$/` when email is filled in.
- Preview hook: on load, if `URLSearchParams(location.search).get('rsvpPreview') === 'error'`, add `.show` to `#rsvpError`. It's marked with a `TEMP PREVIEW` comment so it's easy to remove later.
- Check in Playwright: an empty submit shows 4 hints and sends nothing; phone only passes; a bad email shows the email hint; the preview link shows the error box.
