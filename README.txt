SEIREI MOBILE UPDATE V2

Replace these three files in the GitHub Pages repository:
- index.html
- style.css
- script.js

Keep all existing site assets and folders unchanged, especially:
- images/
- audio/
- seirei-town-map.png

Changes:
- Mobile calendar event labels can wrap instead of being clipped with ellipses.
- Calendar day rows can grow to accommodate wrapped event labels.
- Month navigation and legend spacing are tightened for small screens.
- The OST player becomes a compact single-row dock on mobile.
- Extra bottom scroll space keeps final page content reachable above the fixed player.
- The recovered intro HTML/JS behavior is retained. Only the stylesheet cache version was updated.

Desktop layout rules are not changed by the new mobile-only CSS block.
The JavaScript is carried forward unchanged from the working intro-recovery version.
