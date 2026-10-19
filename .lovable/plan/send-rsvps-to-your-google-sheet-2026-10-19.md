# Send RSVPs to your Google Sheet

Right now the RSVP form tries to send answers to an unfinished Formspree address, so nothing arrives. There's no text-message step in the RSVP form today. The "Contact Us" button stays exactly as it is.

## What guests will see
- They tap **Send RSVP**. The button greys out and says **Sending...**
- When it's sent, the form is swapped for a message in the site's ivory-and-gold style: **"Thank you! Your RSVP has been received."**
- If it fails, the button works again and a small message shows: **"Something went wrong. Please try again or text us."**
- Required: First Name, Last Name, and "Will you attend?". Neither attend option is picked to start with, so guests have to choose one. Phone and Email become optional, since you only listed those three fields as required.

## Technical details (public/wedding.html only)
- Remove the Formspree `action`/`method` and the hidden `_subject` field from the form.
- Rename the inputs to `firstName`, `lastName`, `phone`, `email`, `guests`, `attend`, `dietary`, `note`. The guest options get values 1 to 4, and the labels stay "1 guest" and so on. The attend values stay "Joyfully accepts" / "Regretfully declines", with `required` and no default choice.
- Replace the submit handler: `preventDefault`, disable the button and set its text to "Sending...", build `URLSearchParams` with exactly those 8 keys, then `fetch(APPS_SCRIPT_URL, { method: "POST", mode: "no-cors", body })`.
- When the fetch finishes, hide the form and show `#rsvpSuccess` with the new text. In `catch`, re-enable the button, restore "Send RSVP", and show the error in a new `.rsvp-error` line styled like `.rsvp-sub`.
- Because of `no-cors`, the page can't read the reply. It can only catch network failures, not errors inside the script.
- No styling changes beyond that one error line. No backend.
- Check: submit once in Playwright and confirm the POST goes out with the right fields and the thank-you message appears.
