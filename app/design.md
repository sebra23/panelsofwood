# PanelsOfWood — Redesign v2

## Philosophy
Cleaner. Simpler. Stronger than WoodUpp. No gimmicks. Just wood, price, and an effortless path to purchase.

The design strips away everything that does not drive a sale. The hero is the product. The calculator is the engine. The checkout is two taps. Every pixel earns its place.

---

## Design Tokens

### Colors
| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#FFFFFF` | Primary background |
| `--bg-warm` | `#FAF8F5` | Alternate section background |
| `--text` | `#1C1917` | Headings, primary text |
| `--text-secondary` | `#78716C` | Captions, labels |
| `--accent` | `#B45309` | CTA, highlights, price callouts — warm amber wood tone |
| `--accent-hover` | `#92400E` | CTA hover |
| `--border` | `#E7E5E4` | Subtle dividers |
| `--success` | `#15803D` | Checkout confirmation |

### Typography
| Role | Font | Weight | Size |
|---|---|---|---|
| H1 | Inter | 300 | 56px / 1.1 |
| H2 | Inter | 400 | 36px / 1.2 |
| H3 | Inter | 500 | 20px / 1.3 |
| Body | Inter | 400 | 16px / 1.6 |
| Price | Inter | 600 | 48px / 1.0 |
| Small | Inter | 500 | 12px / 1.4, uppercase tracking 0.05em |

### Spacing
- `--section`: 80px vertical
- `--container`: max 1100px, centered
- `--radius`: 12px (cards), 8px (buttons), 999px (pills)

---

## Global Layout

### Header (Fixed)
- Left: **PanelsOfWood** wordmark
- Center: Product links — Akupanel | Aluwood | Outdoor | Samples
- Right: Language switcher (pill-shaped: DE | FR | IT | EN) + Cart icon with badge
- Background: transparent → `rgba(255,255,255,0.92)` + `backdrop-blur` on scroll
- Height: 64px. No shadow until scrolled.

### Footer
- 4 columns: Products, Company, Support, Contact
- Large wordmark at top
- Background: `#1C1917`, text: `#FAF8F5`

---

## Quadrilingual URL Structure
```
/de/akustikpaneele-eiche/         (German — Efficiency, Lagerware Schweiz)
/fr/panneaux-acoustiques-bois/    (French — Design & Ambiance, Tasseaux bois muraux)
/it/pannelli-acustici-legno/      (Italian — Home Renovation, Fai da te)
/en/acoustic-wood-panels/          (English — Rental-Friendly, No-Drill)
```

Default redirect: `/` → browser-detected or `/en/`

### Language Content Strategy
**German (DE):**
- Tone: Direct, precise, engineering-focused
- Keywords: "Akustikpaneele Eiche", "Lagerware Schweiz", "Schnelle Lieferung"
- Angle: Efficiency & Quality. Lead with Swiss stock and fast delivery.

**French (FR):**
- Tone: Elegant, aspirational, design-forward
- Keywords: "Panneaux acoustiques bois", "Tasseaux bois muraux", "Design intérieur"
- Angle: Design & Ambiance. Transform your space for under 500 CHF.

**Italian (IT):**
- Tone: Warm, lifestyle, DIY-friendly
- Keywords: "Pannelli acustici legno", "Fai da te", "Ristrutturazione casa"
- Angle: Home Renovation & Style. Weekend project. Beat Italian luxury import prices.

**English (EN):**
- Tone: Practical, convenience-focused, expat-friendly
- Keywords: "Acoustic wood panels Switzerland", "No-drill mounting", "Rental friendly"
- Angle: Rental-Friendly & Easy. No drilling, no deposit loss.

---

## Page: Landing Page (per language)

### 1. Hero Section
**Layout:** Single column, centered. No split. No 3D gimmicks.
**Content:**
- Eyebrow (small, uppercase, amber): "CHF 59 per panel — Free Swiss delivery"
- H1: "Acoustic Wood Wall Panels" (language variant)
- Subtitle: One sentence value prop (language variant)
- Hero image: Single beautiful lifestyle shot, full width below text, max-height 50vh, rounded corners
- CTA button: "Calculate My Wall" (primary, amber) + "View Finishes" (secondary, ghost)

### 2. Price Anchor Bar
**Layout:** Full-width warm background strip
- "CHF 59" in giant type
- "per 60×240 cm panel" in small text
- 4 finish swatches as colored circles with labels
- "Includes acoustic felt backing, mounting clips, Swiss VAT"

### 3. Product Cards (3-up)
**Layout:** 3 equal cards in a row
- **Akupanel** — Interior acoustic slats
- **Aluwood** — Exterior facade cladding
- **Outdoor** — Terrace & garden
Each card: Image (16:10), title, one-line description, "Configure" link

### 4. Wall Calculator (The Engine)
**Layout:** Centered, max-width 700px, prominent warm background section
- H2: "Calculate Your Project"
- Two large inputs side-by-side: Width (m) × Height (m)
- Stepper buttons (+/− 0.1m) on each input
- Real-time readout:
  - Panels needed
  - Coverage m²
  - Total CHF
- Finish selector: 4 swatches, horizontal row
- **Big amber CTA:** "Add to Cart — CHF {total}"

### 5. Why PanelsOfWood
**Layout:** 4 feature icons in a row
- "Ships from Swiss warehouse" (2-day delivery)
- "No drilling required" (rental-safe mounting)
- "Premium acoustic felt" (NRC 0.85)
- "FSC-certified oak & walnut"

### 6. Installation Visual
**Layout:** 3-step horizontal timeline
- Step 1: Measure (icon)
- Step 2: Mount clips (icon)
- Step 3: Click panels in place (icon)
Each with a single sentence.

### 7. Social Proof
**Layout:** Single row of 3 testimonial cards
- Stars + quote + name + city
- Zurich, Geneva, Lugano

### 8. FAQ Accordion
**Layout:** Centered, max-width 700px
- 5 questions per language
- Clean accordion, no borders, just text and chevrons

---

## Core Interactions

### Calculator Logic
- Panel dimensions: 600mm × 2400mm (0.6m × 2.4m)
- Coverage per panel: 1.44 m²
- Price per panel: CHF 59 (Natural Oak), CHF 69 (other finishes)
- Formula: `ceil(width / 0.6) × ceil(height / 2.4)`
- Show price instantly on input change

### Cart Drawer
- Slides from right
- List of wall projects (each calculator submission is a line item)
- Show: Finish, dimensions, panel count, price
- Remove button per item
- Running total + "Checkout" CTA

### Checkout (2-step)
**Step 1 — Details:**
- Name, Email, Phone, Address
- Delivery options: Standard (free) / Express (+15 CHF)

**Step 2 — Payment:**
- Payment method icons: Card, PayPal, Twint (Swiss!)
- Card number / expiry / CVC
- "Pay CHF {total}" amber button
- Success: Checkmark + "Order confirmed" + "We will contact you within 24h"

---

## Assets Needed
Reuse existing 15 generated images. No new generations needed.

---

## Notes
- All measurements in metric (meters, millimeters) across all languages
- Currency: CHF everywhere
- hreflang tags in HTML head for all 4 variants
- No auto-translation slugs — manually crafted per language
- The CHF 59 price is the hero anchor. Everything leads back to it.
