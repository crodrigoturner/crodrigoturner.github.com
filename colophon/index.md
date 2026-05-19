---
layout: page
title: Colophon
---

<p>This website was last updated {{ site.time | date: "%b %d, %Y" }}. Thanks for stopping by!</p>

### TL;DR

- Built with Jekyll
- Hosted on Github Pages
- This website emits just [0.12g of CO<sub>2</sub>](https://www.websitecarbon.com/website/carlosrodrigo-com/) every time someone visits this page.

---

### Overview

**Site type:** Personal website  
**Aesthetic:** Minimal & editorial  
**Tone:** Confident, thoughtful, human  
**Audience:** Potential clients, collaborators, employers

---

### Colour Palette

| Role | Hex |
|---|---|
| Background | `#F7F5F2` |
| Primary text | `#111` |
| Muted / secondary text | `#607d8b` |
| Accent / links | `#4385BE` |
| Borders | `#e8e8e4` |

**Principles:**
- Background is off-white to avoid harshness; no pure white
- Accent used for links only
- Muted colour used for metadata, nav links, captions

---

### Typography

#### Typefaces

| Role | Font | Source |
|---|---|---|
| Display headings (H2, H3) | **Fraunces** | Google Fonts |
| UI & body text | **Schibsted Grotesk** | Google Fonts |
| Numeric / inline | **Inter** | Google Fonts |
| Code | **Courier** | System |

#### Type Scale

| Element | Size | Weight | Font | Notes |
|---|---|---|---|---|
| Wordmark (H1) | 1em | 400 | Schibsted Grotesk | Site name in sidebar |
| H2 | 3em | 700 | Fraunces | Page/section title |
| H3 | 1.3em | 700 | Fraunces | Sub-section title |
| H4 | 1em | 600 | Schibsted Grotesk | Uppercase, muted, label |
| H5 | 0.9em | 600 | Schibsted Grotesk | — |
| H6 | 0.8em | 400 | Schibsted Grotesk | Muted, inline meta |
| Body | 16px | 400 | Schibsted Grotesk | Line-height 1.7 |
| Meta / small | 0.8em | 400 | — | Dates, tags |
| Figcaption | 0.75rem | 400 | — | Line-height 1.5rem |

**Principles:**
- H2 and H3 use Fraunces for editorial weight; everything else uses Schibsted Grotesk
- H4 is always uppercase; used for section meta labels
- `<em>` renders with a soft yellow highlight (`#ffff6687`), pill-shaped

---

### Heading Hierarchy

```
Wordmark (H1) — Site name in sidebar (1em, body-weight)
  H2 — Page heading or major section
    H3 — Sub-section or item title
      H4 — Label / meta category (uppercase)
        Body — Description, paragraph text
          H6 / small — Meta info, dates, captions
```

**Rules:**
- H1 is reserved for the site wordmark — one per page
- H2 is the loudest content heading; use once per major section
- Never skip levels (H2 → H4)

---

### Layout

| Token | Value |
|---|---|
| Site max-width | 860px |
| Grid | `1fr 160px` (main + sidebar), gap 60px |
| Section padding | 40px top/bottom |
| Site side padding | 20px |
| Image border-radius | 10px |
| Tag / code border-radius | 4px |

The layout uses a two-column CSS grid. The sidebar (160px) holds the sticky navigation on desktop. On mobile (≤640px) the grid collapses to a single column and the nav becomes a full-screen hamburger overlay.

---

### Components

#### Navigation / Sidebar
- Desktop: sticky right sidebar, 160px wide
- Links use muted colour; active link turns `--color-text`
- Includes: logo image, site name, page links, tag cloud
- Mobile: hidden behind a hamburger button (fixed, top-right); toggles a full-screen overlay

#### Hero
- Left-aligned text block with `80px` bottom margin
- `.hero-greeting`: 1.4em, 700 weight, tight letter-spacing
- `.hero-name`: 0.95em, muted colour

#### Posts / Articles
- Separated by thin `1px` borders in `var(--color-border)`
- No card backgrounds — inherits page off-white
- `.meta` and `<small>` at 0.8em for date and tag labels

#### Buttons / CTAs
- `.cta`: inline-flex, link colour, arrow appended via `::after`
- Hover: `opacity: 0.7`; arrow slides 4px right
- No filled or outlined button variants

#### Footer
- Full-width, centred, large quote text (`3em`, `#607d8b2e`)
- Back-to-top link: 0.5em, muted colour

---

### Imagery

- All images: `border-radius: 10px` inside articles
- Profile image: organic asymmetric radius
- `.alignright` / `.alignleft` for floated inline images

---

### Interaction

- Hover: `opacity: 0.7` — no colour transitions
- CTA arrow: `translateX(4px)` on hover, 200ms ease
- `<em>` highlights in soft yellow, pill-shaped
- No parallax, no scroll animations, no backdrop blur
