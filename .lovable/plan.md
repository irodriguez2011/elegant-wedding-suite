# Match the seal to the site's gold

## Answer
The gold used for lettering across the page is **#B8954E**, a muted antique gold. The new champagne seal averages **#B58961**: just as light, but rosier. The old seal was a brighter, more saturated yellow than the lettering. Neither one matched exactly. The old one was off in brightness and the new one is off in warmth.

## Change
Re-tint the seal so its wax matches #B8954E: the same antique gold as your lettering, without the yellow glare or the rosy cast. The shine, shape, size, "C&S" and clear background all stay the same.

## Technical details
- Use PIL to shift the hue and saturation of opaque pixels in `public/wax-seal.png` so their median lands on about #B8954E, keeping each pixel's lightness. Alpha stays as it is.
- Verify the median color and the transparency.
