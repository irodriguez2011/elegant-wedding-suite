# Match the phone menu to the top banner

## Answer
The banner is not a gradient. It is a single warm ivory color that is slightly see-through (85%) with a soft blur, so the blue page behind it tints it a little. The opened menu sits on top with its own solid ivory, which is why it looks a touch different.

## Change
- Make the opened phone menu see-through so it shows the banner's exact color and blur underneath, instead of painting its own ivory. The two will read as one continuous panel.
- Keep the thin lines between each menu item and the line above the list.
- Nothing changes on laptop.

## Also noticed
The banner logo still reads "K & C". Since the seal was changed to S & C, I'll update it to "S & C" too.

## Technical details
In `public/wedding.html` mobile media query: `.nav-links` background `var(--ivory-2)` -> `transparent`. Logo text line ~1260 `K &amp; C` -> `S &amp; C`. Verify at 390px with menu open.
