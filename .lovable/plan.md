# Rebalance the wedding party circles

There are 10 people: 5 on the bridal side (Ashley, Isamar, Tori, Sophie, Rasheeda) and 5 groomsmen (Greg, Kyle, Derrick, Jamie, Reggie). The current 3-across desktop grid leaves Reggie stranded alone on a fourth row, and a mobile rule forces the last card full-width so Jamie and Reggie each sit alone.

## What changes
- **Desktop:** switch to 5 across, so the layout becomes two clean, symmetric rows — the bridal party on top, the groomsmen underneath. No orphan row, no dead space. Circles shrink slightly (about 130-140px) and the section widens to fit comfortably.
- **Tablet (medium widths):** keep a comfortable middle step so circles don't get too small.
- **Mobile:** stay 2 across and remove the rule that stretches the last card full-width, so the pairs read Ashley/Isamar, Tori/Sophie, Rasheeda/Greg, Kyle/Derrick, Jamie/Reggie — Jamie and Reggie side by side as requested.
- Names, roles, order, gold rings, and hover lift all stay exactly as they are.

## Technical notes
- Only `public/wedding.html`: `.party-grid` column counts and `max-width`, `.party-photo` `max-width` at each breakpoint, and removal of the `.party-grid .party-card:last-child` full-width override in the 860px media query.
