# Aalto Guard

> **Vesiturvallisuutta edistämässä** — Odotuslistasivusto Aalto Guard -palvelulle.

Moderni, kevyt ja responsiivinen landing page puhtaalla HTML:llä, CSS:llä ja JavaScriptillä.

## Ominaisuudet
- **Salamanpehmeä suorituskyky:** Ei raskaita kirjastoja tai riippuvuuksia.
- **Responsiivinen ulkoasu:** Optimoitu toimimaan saumattomasti mobiilissa (`100dvh`) ja tietokoneilla.
- **Odotuslistan keräys:** Yhdistetty suoraan Google Sheetiin taustalla (Google Apps Script).
- **Tietosuojaseloste:** Välitön GPU-kiihdytetty lasimodaali (`backdrop-filter`) ja erillinen tietosuojasivu.

## Rakenne
- `index.html` — Etusivu ja odotuslistalomake
- `style.css` — Sivuston tyylit, animaatiot ja responsiivisuus
- `script.js` — Lomakkeen lähetyskäsittelijä ja modaalin toiminnot
- `tietosuoja.html` — GDPR-tietosuojaseloste
- `google-apps-script.js` — Google Sheets -integraatiokoodi
- `pool-diagonal.jpg` — Taustakuva
