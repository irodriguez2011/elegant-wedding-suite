Plan: Add soft corner fades to the hero photo

1. **Goal**: Soften only the corners of the hero couple photo so they blur into the surrounding page, while keeping the top/bottom/side edges crisp and the main subject untouched.

2. **Approach**:
    - Apply a CSS mask to the inner hero image using a radial gradient at each corner. Each corner gradient fades from transparent at the extreme corner to opaque a short distance inward (only ~10–15% of the image width/height).
    - The center and straight edges remain fully visible, so it is not a heavy vignette.
    - Add the same mask to `mask-image` with a `-webkit-` prefix for Safari.

3. **Implementation**:
    - Edit `public/wedding.html` hero styles (`.hero-photo img`).
    - Add a mask rule using a layered radial-gradient at the four corners, e.g.:
      ```
      mask-image:
        radial-gradient(circle at 0 0, rgba(0,0,0,0) 0, rgba(0,0,0,1) 22%),
        radial-gradient(circle at 100% 0, rgba(0,0,0,0) 0, rgba(0,0,0,1) 22%),
        radial-gradient(circle at 0 100%, rgba(0,0,0,0) 0, rgba(0,0,0,1) 22%),
        radial-gradient(circle at 100% 100%, rgba(0,0,0,0) 0, rgba(0,0,0,1) 22%);
      mask-composite: intersect;
      -webkit-mask-composite: source-in;
      ```
    - Keep the existing rounded corners (14px), blue glow halo, and thin lilac offset frame.
    - Adjust the radius/percentage so the fade is subtle and elegant, not a strong vignette.

4. **Validation**: Refresh the preview and confirm the four corners of the hero photo fade softly into the page while the middle and edges of the photo remain sharp and clear.