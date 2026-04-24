---
layout: page
title: Colophon
---

## TL;DR

- Built with Jekyll    
- Hosted in Github Pages   
- This website emits just [0.12g of CO2](https://www.websitecarbon.com/website/carlosrodrigo-com/) every time someone visits this web page.




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
| Primary text | Near-black | `#1a1b1e` |
| Secondary text | Blue-grey | `#607d8b` |
| Accent / links | Cornflower blue | `#4385BE` |
| Border / divider | Light grey | `#e8e8e4` |

**Principles:**
- Background is off-white to avoid harshness; no pure white page backgrounds
- Accent used for links and interactive elements only


---

## Typography

### Typefaces

| Role | Font | Source |
|---|---|---|
| Headings | **Schibsted Grotesk** | Google Fonts |
| Body | **Schibsted Grotesk** | Google Fonts |
| Code | **Courier** | System |

### Type Scale

| Element | Size | Weight | Line height |
|---|---|---|---|
| Wordmark (H1) | 16px / 1rem | 400 | 1 |
| H2 | 1.6em (~25.6px) | 700 | — |
| H3 | 1.1em (~17.6px) | 600 | — |
| H4 | 1em (16px) | 600 | — |
| H5 | 0.9em (~14.4px) | 600 | — |
| H6 | 0.8em (~12.8px) | 400 | — |
| Body | 16px / 1rem | 400 | 1.7 |
| Small / caption | 0.9em (~14.4px) | 400 | — |
| Figcaption | 0.75rem (12px) | 400 | 1.5rem |

**Principles:**
- Body and headings both use Schibsted Grotesk
- H4 is uppercase; used for section meta labels
- Table headers: uppercase, 0.75em, letter-spacing `0.05em`, muted colour
- Maximum content width: 680px

---

## Heading Hierarchy

```
Wordmark (H1) — Site name in nav (16px body-weight)
  H2 — Section title / page heading
    H3 — Sub-section or item title
      H4 — Label / meta category (uppercase)
        Body — Description, paragraph text
          Small / H6 — Meta info, dates, captions
```

**Usage rules:**
- H1 is reserved for the site wordmark in the nav — one per page
- H2 is the loudest content heading; use once per major section
- Never skip levels (H2 → H4)

---

## Spacing & Layout

| Token | Value |
|---|---|
| Site max-width | 680px |
| Section padding (top) | 120px |
| Section padding (bottom) | 80px |
| Section side padding | 40px |
| Article bottom padding | 40px |
| Article bottom margin | 40px |
| Header border-radius | 10px |
| Hero border-radius | 14px |
| Card / tag border-radius | 4px |
| Image border-radius | 10px |

---

## Components

### Navigation
- Fixed top bar, always blurred (`backdrop-filter: blur(14px)`), near-transparent white background
- Logo / name left-aligned; nav links right-aligned
- On mobile (≤480px): stacks vertically, links wrap

### Hero
- Compact card with `32px 28px` padding and 14px border-radius
- Amber-tinted glassmorphism background (`rgb(255 193 7 / 9%)`) with blur
- `.hero-greeting` (1.4em, 700) + `.hero-name` (0.95em, muted)
- Not full viewport height

### Articles / Cards
- Separated by `1px` bottom border in `var(--color-border)`
- No explicit card background — inherits page off-white
- Last article has no bottom border

### Buttons / CTAs
- Minimal: no background, no border, link colour text, inherits font
- Hover: `opacity: 0.7`
- No filled or outlined button variants in use

### Footer
- Centred, very large text (`3em`), muted blue-grey at low opacity (`#607d8b2e`)
- Back-to-top link: `0.5em`, regular weight, muted colour

---

## Imagery & Icons

- Images: `border-radius: 10px` inside articles; profile image uses organic radius

---

## Animation & Interaction

- Hover states use `opacity: 0.7` — no colour transitions
- Background ambient blobs animate on a slow drift (`14s` / `18s` ease-in-out loop)
- No explicit transition durations defined; keep interactions instant or under 200ms
- No parallax, no scroll-triggered explosions
- `em` text highlighted in soft yellow (`#ffff6687`), pill-shaped radius

---

## Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Generous whitespace | Crowded layouts |
| Single typeface (Schibsted Grotesk) | Mix typefaces |
| Subtle opacity hover feedback | Colour-shift animations |
| Off-white backgrounds | Pure `#FFFFFF` or `#000000` page backgrounds |
| One clear CTA per section | Multiple competing CTAs |
| Real project work | Filler placeholder content |

---

## File & Asset Notes

- OG image: 1200×630px, name + title on off-white background
- Fonts loaded via Google Fonts with `display=swap`
- All images: WebP format, lazy-loaded
