# Make the site's blue a touch darker

## What changes
- Every place that uses the site's dusty blue changes from #729cc4 to #6690bb, about 8% darker. That includes the background, the envelope, the countdown, the RSVP error box, and the other blue accents.
- The see-through blue tints (for example the RSVP error box) keep their see-through look and just use the new color.
- Gold, ivory, and everything else stay the same.

## Technical details
- `public/wedding.html`: replace all 14 `#729cc4` with `#6690bb`, and all 3 `rgba(114,156,196,…)` with `rgba(102,144,187,…)`, keeping each alpha value.
- Save the new blue as a project design rule in memory.
- Check on phone and laptop: the envelope, background, and countdown should all show the new blue, and there should be no errors.
