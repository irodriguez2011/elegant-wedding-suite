## Honeymoon Fund Redesign

Convert the current centered card into a full-width, edge-to-edge ivory band (matching the `reg-desc`/beige tone at similar opacity) with a two-column layout.

### Layout
- Full-bleed section (edge-to-edge, no side gutters like the countdown band).
- Background: ivory/beige at ~0.6 opacity (matching `.reg-card` background feel), with a subtle soft glow / drop shadow above and below the section for depth.
- Two columns on desktop:
  - **Left (~55%)**: Section tag "In lieu of gifts", title "Honeymoon Fund" (italic serif), divider, description text, and "Contribute" button — all left-aligned.
  - **Right (~45%)**: The uploaded photo of Krissie & Cory on the stairs, saved as `public/honeymoon-photo.jpg`, with a soft drop shadow / warm glow around it for depth.
- Mobile: stacks vertically (text on top, photo below), full width, same ivory background.

### Styling
- Remove the current lilac linear-gradient background and the centered `.reg-card` box.
- Add drop shadow / glow: photo gets `box-shadow: 0 20px 50px rgba(58,16,21,0.25)` plus a soft ivory/gold glow ring for the "depth" feel.
- Section itself gets a subtle inner drop shadow at top/bottom edges to lift it visually from the surrounding gradient.
- Keep the existing gold "Contribute" button styling, just left-aligned instead of centered.

### Files changed
- `public/honeymoon-photo.jpg` — new (copied from uploaded image).
- `public/wedding.html`:
  - Rewrite `.honeymoon` CSS block (lines ~739–758) for the full-bleed two-column layout, ivory bg, shadows/glow, and mobile stack.
  - Rewrite the `<section id="honeymoon">` markup (lines 1565–1579) to use the new two-column structure and photo.
