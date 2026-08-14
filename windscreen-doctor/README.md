# Windscreen Doctor website concept

Interactive, responsive multi-page website concept for `windscreendoctor.co.za`.

Visual direction: Rivian automotive confidence, Apple editorial storytelling, Linear form precision, with Windscreen Doctor’s existing service copy.

## Preview locally

```bash
python3 -m http.server 4173 --directory windscreen-doctor
```

Then open `http://localhost:4173`.

## Content status

The site deliberately avoids unverified claims about:

- insurance-claim handling
- glass or technician certifications
- warranties
- same-day response
- in-house ADAS recalibration
- fixed pricing
- invented testimonials

Confirm those details before production launch. The quotation form is an
interactive demonstration and does not submit or store customer data.
Phone and WhatsApp numbers are left unpublished until confirmed.

Chip repair is **not currently offered**. The previous chip-repair page is
saved in `archive/chip-repair.html` for a later return.

Current live positioning:

- Nationwide mobile **windscreen replacement**
- Seven days a week
- Cars, bakkies and yellow metal / plant
- Towns and outlying sites, not only metros

## Quote form fields

Preserved IDs and names:

- `name`, `mobile`, `province`, `suburb`
- `vehicle-year` / `vehicle_year`, `vehicle-make` / `vehicle_make`, `vehicle-model` / `vehicle_model`
- `damage` values: `Chip`, `Crack`, `Smashed`, `Unsure` (was `Chip repair`; now describes damage, not a service)
- `photo`, `notes`

Added optional fields (do not exist in any live backend yet):

- `city`, `postcode`, `vehicle-variant`, `vehicle-type`, `damage-size`, `damage-position`

Suburb handoff from `areas-we-serve.html?suburb=` is unchanged.

## WordPress handoff

1. Homepage
2. Windscreen replacement
3. Mobile fitment
4. How it works
5. Areas we serve
6. Frequently asked questions
7. Request a quote
8. Glass care tips archive
9. Glass care article
10. Privacy Policy (placeholder)
11. Terms (placeholder)
12. Chip repair stub (points to replacement; full page in `archive/`)

## Brand tokens

- Near black: `#0A0A0A`
- Graphite: `#171717`
- Warm white: `#F7F7F5`
- White: `#FFFFFF`
- Muted grey: `#858585` (labels only; body text is darker for contrast)
- Brand teal: `#00A6A6` (selected states, progress, links)
- Action amber: `#F6A800` (primary CTA)
- Type: Inter

See `DESIGN-UPGRADE.md` for the section-by-section keep/improve map.

## Prototype photography

Photographic assets are optimized WebP. The favicon and service-area map use SVG.

Replace generated and stock photography with an authentic South African
Windscreen Doctor photoshoot before production launch.

The South Africa province map is adapted from
["Map of South Africa with provincial borders"](https://commons.wikimedia.org/wiki/File:Map_of_South_Africa_with_provincial_borders.svg)
by Adrian Frith under CC BY-SA.

Crack and trim photographs include Pexels sources:

- Cracked windscreen: https://www.pexels.com/photo/cracks-on-windshield-of-car-on-road-19773544/
- Adhesive application: https://www.pexels.com/photo/auto-glass-technician-putting-glue-from-glass-placement-11950155/
- Trim/fitment: https://www.pexels.com/photo/mechanic-holding-a-car-s-wiper-8478211/
