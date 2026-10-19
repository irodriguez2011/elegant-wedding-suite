Remove the "RSVP Now" button from the countdown card

The RSVP section starts right below the countdown, so the button repeats it.

- Delete the gold "RSVP Now" button at the bottom of the countdown card.
- The card will end with the Date / Venue / Address lines. Keep the spacing at the bottom so the card doesn't look cut off.
- The RSVP link in the top menu stays.
- Check the card on phone and laptop.

Technical: remove the `button.hero-cta` in the countdown `aside` in public/wedding.html. If the `.cd-footer` loses its bottom spacing, add a small margin back.
