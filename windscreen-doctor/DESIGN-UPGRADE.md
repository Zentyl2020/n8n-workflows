# Windscreen Doctor — visual upgrade map

Audit of the current multi-page prototype against the Rivian / Apple / Linear brief. This is an upgrade of the existing site, not a rebuild.

## Functional inventory (preserve)

| Item | Current behaviour | Upgrade action |
| --- | --- | --- |
| Quote form `#quote-form` | Demo submit; shows `.form-success`; does not transmit data | Keep IDs, names, demo success state |
| Field IDs | `name`, `mobile`, `province`, `suburb`, `vehicle-year`, `vehicle-make`, `vehicle-model`, `photo`, `notes` | Preserve. Add optional `city`, `postcode`, `vehicle-variant`, `damage-size`, `damage-position` |
| Damage radios | `Chip repair`, `Crack`, `Smashed`, `Unsure` | Keep values. Labels become Chip / Crack / Shattered / Unknown |
| Suburb handoff | `areas-we-serve.html` → `get-a-quote.html?suburb=` | Keep |
| Photo upload | `#photo` + `#file-label`; `accept="image/*"` | Keep; add `capture="environment"` for mobile camera |
| WhatsApp | Disabled button, no number | Keep disabled. Do not invent a number |
| Phone | None | Do not invent. Contact CTA remains the quote form |
| FAQ search | `#faq-search` filters `.faq-item` | Keep |
| Mobile menu | `.menu-toggle` / `.nav-list.open` | Keep selectors; restyle panel |
| Year stamp | `[data-year]` | Keep |

## Section map

| Brief section | Current | Decision |
| --- | --- | --- |
| 01 Hero | Split navy hero + technician photo | **Improve** — cinematic full-bleed, tighter copy, Send a Photo dominant |
| Stats strip | Teal 4-up | **Merge** into hero/mobile-service labels |
| 02 Repair or replace | Two compact service cards | **Improve** — large editorial pair with criteria lists from longer prototype |
| 03 Damage visualiser | Missing | **Add** — interactive windscreen zones |
| 04 Mobile service | Split copy + van interior | **Improve** — full-width image, Home / Work / Suitable Location |
| 05 How it works | Four small step cards | **Improve** — oversized numbered editorial rows |
| 06 Quote form | Homepage CTA only; form on `get-a-quote.html` | **Add** homepage Linear form; **improve** dedicated quote page |
| 07 Technical trust | Missing / light ADAS mention | **Add** — glass, sensors, honest ADAS wording |
| 08 Workmanship | Three editorial rows | **Improve** — split editorial, no invented certifications |
| 09 Coverage | Navy map + markers | **Keep** map; **improve** city list + suburb check |
| 10 Trust / reviews | None | **Add** clearly marked content slot. No invented quotes |
| 11 FAQ | Three items | **Improve** — restore longer-prototype answers |
| 12 Final CTA | Compact navy band | **Improve** — cinematic close |
| 13 Footer | Thin 4-column | **Improve** — full footer with legal/contact slots |

## Content to keep

- Repair-first / mobile-by-design / clear-recommendation copy
- Repair vs replace criteria (no rigid millimetre thresholds)
- Insurance wording: support is being finalised
- ADAS: advise, do not claim in-house calibration
- Coverage: confirm locally, no blanket national promise
- Glass-care article and tips archive
- Inner service pages: chip repair, replacement, mobile fitment, how it works, areas, FAQ

## Visual system

- Type: Inter (engineered grotesk)
- Surfaces: near-black, graphite, warm white, white
- Accent: existing teal `#00A6A6` for selected/progress/links
- CTA: existing amber `#F6A800` for primary actions
- Radii: 8 / 12–16 / 20–24
- Motion: header blur, visualiser states, scroll reveal; respect `prefers-reduced-motion`
