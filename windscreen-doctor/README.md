# Windscreen Doctor website concept

Interactive, responsive single-page website concept for `windscreendoctor.co.za`.

## Preview locally

Serve this directory with any static web server, for example:

```bash
python -m http.server 4173 --directory windscreen-doctor
```

Then open `http://localhost:4173`.

## Content status

The site deliberately avoids unverified claims about:

- insurance-claim handling
- glass or technician certifications
- warranties
- same-day response
- ADAS recalibration capability
- fixed pricing

Confirm those details before production launch. The quotation form is an
interactive demonstration and does not submit or store customer data.

## WordPress handoff

The page maps cleanly to reusable Gutenberg blocks or an Elementor/Bricks
template:

1. Utility bar and global header
2. Hero
3. Trust/service strip
4. Service cards
5. Mobile-fitting feature
6. Repair-versus-replace guide
7. Four-step process
8. Coverage section
9. Benefits grid
10. FAQ accordion
11. Quotation form
12. Global footer

Set the colours and typography as WordPress global styles before recreating
the sections.

## Brand tokens

- Midnight Navy: `#092E3E`
- Clear Teal: `#00A6A6`
- Action Amber: `#F6A800`
- Sky Mist: `#EAF7F6`
- Graphite: `#17242C`
- White: `#FFFFFF`
- Heading font: Sora
- Body font: Source Sans 3

## Prototype photography

The remote prototype images are sourced from Pexels:

- Auto-glass technician: https://www.pexels.com/photo/auto-glass-technician-putting-glue-from-glass-placement-11950155/
- Cracked windscreen: https://www.pexels.com/photo/cracks-on-windshield-of-car-on-road-19773544/
- Mechanic working at a windscreen: https://www.pexels.com/photo/mechanic-holding-a-car-s-wiper-8478211/

Replace the hero and service imagery with an authentic South African
Windscreen Doctor photoshoot before the production launch.
