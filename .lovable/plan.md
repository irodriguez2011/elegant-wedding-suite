## Hero layout fix + photo frame refinement

**File:** `public/wedding.html`

### 1. Stop the countdown card from covering the bride (desktop)
- Remove the overlapping/absolute positioning on the countdown card at desktop widths.
- Make the hero a single stacked column at ALL breakpoints: photo on top, countdown card centered below — matching the current tablet/mobile behavior shown in the screenshot.
- Constrain max-width (~1100px) and center the stack so it sits nicely on wide screens.
- Keep the existing reveal animations (photo fade-up, card slide-up).

### 2. Photo frame: lace trim + soft blue corner glow
- **Outer glow:** wrap the photo in a container with four soft radial gradients in the corners using the site blue (`#729cc4`) fading to transparent — creates a faded blue halo bleeding into the gradient background.
- **Lace trim:** add a thin scalloped gold SVG border (same lace style/gold tone as the envelope flap trim) hugging the photo edges, sitting just inside the existing lilac offset frame.
- **Corners:** keep gently rounded corners (~14px) on the photo itself; lace follows the rounded shape.
- Preserve existing lilac offset border + deep-blue drop shadow underneath the lace layer.

### 3. No other changes
- Countdown contents, fonts, colors, RSVP button, and all other sections stay exactly as they are.
