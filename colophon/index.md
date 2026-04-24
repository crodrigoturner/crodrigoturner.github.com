---
layout: page
title: Design system
---


## Overview

**Site type:** Personal portfolio  
**Aesthetic:** Minimal & clean  
**Tone:** Confident, thoughtful, human  
**Audience:** Potential clients, collaborators, employers

---

## Colour Palette

| Role | Name | Hex |
|---|---|---|
| Background | Off-white | `#F7F5F2` |
| Surface | White | `#FFFFFF` |
| Primary text | Charcoal | `#1C1C1C` |
| Secondary text | Warm grey | `#6B6B6B` |
| Accent | Slate blue | `#3D5A80` |
| Accent hover | Deep navy | `#2B3F5C` |
| Border / divider | Light grey | `#E4E4E0` |

**Principles:**
- No pure white backgrounds — use off-white to avoid harshness
- Accent colour used sparingly: links, CTAs, hover states only
- No gradients; flat, intentional use of colour

---

## Typography

### Typefaces

| Role | Font | Source |
|---|---|---|
| Headings | **Schibsted Grotesk** | Google Fonts |
| Body | **Schibsted Grotesk** | Google Fonts |
| Mono / labels | **JetBrains Mono** | Google Fonts |

### Type Scale

| Element | Size | Weight | Line height |
|---|---|---|---|
| H1 | 48px / 3rem | 700 | 1.15 |
| H2 | 32px / 2rem | 600 | 1.2 |
| H3 | 22px / 1.375rem | 600 | 1.3 |
| Body | 17px / 1.0625rem | 400 | 1.7 |
| Small / caption | 13px / 0.8125rem | 400 | 1.5 |
| Label / tag | 11px / 0.6875rem | 600 | 1.4 |

**Principles:**
- Body text always in Inter; never use Playfair for long-form reading
- Labels and tags in uppercase + letter-spacing: `0.08em`
- Maximum line length: 65–70 characters (prose sections)

---

## Heading Hierarchy

```
H1 — Page title / hero statement (one per page)
  H2 — Section title (About, Work, Contact…)
    H3 — Project or item title
      Body — Description, paragraph text
        Small — Meta info, dates, tags
```

**Usage rules:**
- H1 is the loudest element on the page — only one per view
- H2 sections are separated by generous whitespace (80–120px)
- Never skip levels (H1 → H3)

---

## Spacing & Layout

| Token | Value |
|---|---|
| Base unit | 8px |
| Section padding (vertical) | 96px |
| Container max-width | 720px (content) / 1080px (full) |
| Grid | 12-column, 24px gutter |
| Card padding | 32px |
| Border radius | 6px (cards, inputs) |

---

## Components

### Navigation
- Fixed top bar, transparent background, blurs on scroll
- Logo / name left-aligned; nav links right-aligned
- No hamburger on desktop; minimal mobile drawer

### Hero
- Full viewport height
- H1 name + one-line descriptor
- Subtle fade-in animation on load (300ms ease-out)

### Project Cards
- White surface on off-white background
- Thin `1px` border in `#E4E4E0`
- On hover: slight `box-shadow` lift, no colour change
- Always include: title, year, 1–2 tags, short description

### Buttons / CTAs
- Primary: filled accent `#3D5A80`, white text, 6px radius
- Secondary: outlined, accent border, transparent fill
- No rounded-pill buttons

### Footer
- Minimal: name + year + social links
- No heavy footer with multiple columns

---

## Imagery & Icons

- Photography: black & white or desaturated preferred
- Icons: [Lucide](https://lucide.dev) — stroke weight `1.5px`, size `20px`
- No stock photography; use project screenshots or original work only

---

## Animation & Interaction

- Keep motion subtle and purposeful
- Default transition: `200–300ms ease-out`
- No parallax, no scroll-triggered explosions
- Hover states on all interactive elements (links, cards, buttons)

---

## Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Generous whitespace | Crowded layouts |
| Consistent type scale | Mix more than 2 typefaces |
| Subtle hover feedback | Flashy animations |
| Off-white backgrounds | Pure `#FFFFFF` or `#000000` |
| One clear CTA per section | Multiple competing CTAs |
| Real project work | Filler placeholder content |

---

## File & Asset Notes

- Favicon: monogram "CR" in Schibsted Grotesk, charcoal on off-white
- OG image: 1200×630px, name + title on off-white background
- Fonts loaded via Google Fonts with `display=swap`
- All images: WebP format, lazy-loaded
