# Design Standards — Quick Reference

---

## Colors

### Surfaces (backgrounds, layering)
| Token | Hex | Use |
|---|---|---|
| `surface` | `#f7f9fb` | Page base background |
| `surface-container-low` | `#f0f4f7` | Secondary section background |
| `surface-container` | `#eaeff2` | Mid-level container |
| `surface-container-high` | `#e3e9ed` | Subtle separation between items |
| `surface-container-highest` | `#dce4e8` | Strongest tonal surface |
| `surface-container-lowest` | `#ffffff` | Floating cards, "white-out" highlight areas |

### Text
| Token | Hex | Use |
|---|---|---|
| `on-background` | `#2c3437` | All body text — never use pure black |
| `on-surface` | `#2c3437` | Text on surface backgrounds |
| `on-surface-variant` | `#596064` | Secondary / muted text |
| `on-primary` | `#faf8ff` | Text on primary-colored elements |

### Brand
| Token | Hex | Use |
|---|---|---|
| `primary` | `#525c8c` | Primary actions, signature gradient start |
| `tertiary` | `#6f557d` | Accent highlights, signature gradient end |
| `outline-variant` | `#acb3b7` | Ghost borders (always at 15% opacity) |

### Signature Gradient
```css
background: linear-gradient(135deg, #525c8c 0%, #6f557d 100%);
```
Use on: main CTAs, hero decorative elements.

---

## Typography

All text uses **Manrope**. Set once on `body` — no need to repeat per element.

| Scale | Size | Weight | Letter-spacing | Use |
|---|---|---|---|---|
| Display | `3.75rem` / `5.5rem` (md+) | 900 | `-0.04em` | Hero name / page title |
| Headline | `1.875rem` | 700 | — | Section headings |
| Subtitle | `1.25rem` / `1.5rem` (md+) | 300 | `0.1em` | Profession / tagline |
| Body | `1rem` | 400 | — | Narrative paragraphs, line-height `1.6` |
| Label | `0.75rem` | 500–700 | `0.1em` | Nav links, metadata — always uppercase |
| Micro | `0.65rem` | 400 | `0.2em` | Scroll hints, fine print — always uppercase |

---

## Buttons

### Primary
```css
padding: 1rem 2rem;
background: linear-gradient(135deg, #525c8c 0%, #6f557d 100%);
color: #faf8ff;
border-radius: 9999px;
font-size: 0.75rem;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.1em;
box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
/* hover */ transform: translateY(-0.25rem);
```

### Secondary (Ghost)
```css
padding: 1rem 2rem;
background: transparent;
border: 1px solid rgba(172, 179, 183, 0.15);
color: #2c3437;
border-radius: 9999px;
font-size: 0.75rem;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.1em;
transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
/* hover */ background-color: #f0f4f7;
```

---

## Elevation & Shadows

Never use black-tinted shadows. Use `primary`-tinted ambient shadows only.

| Level | CSS |
|---|---|
| Card / section | `box-shadow: 0 20px 40px rgba(82, 92, 140, 0.06)` |
| Floating badge | `box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)` |
| Heavy float | `box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25)` |

---

## Borders & Dividers

- **No 1px solid borders** for layout/section separation — use background color shifts instead.
- **Ghost border** (accessibility fallback only): `border: 1px solid rgba(172, 179, 183, 0.15)`
- **Border radius**: cards `2rem`, images `9999px` (full), inner elements `1rem`

---

## Spacing

| Name | Value | Use |
|---|---|---|
| xs | `0.5rem` | Between inline text elements |
| sm | `0.75rem` | Icon–text gap |
| md | `1rem` | Padding on compact elements |
| lg | `1.5rem` | Gap between CTA buttons |
| xl | `2rem` | Section padding-top, button padding |
| 2xl | `3rem` | Gap between major layout blocks |
| 3xl | `8rem` | Section vertical padding |

---

## Glass / Frosted Nav

```css
background-color: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(64px);
-webkit-backdrop-filter: blur(64px);
box-shadow: 0 20px 40px rgba(82, 92, 140, 0.06);
```

---

## Rules to Remember

1. **No pure black** — use `#2c3437` for all text.
2. **No 1px borders** to divide sections — shift background color instead.
3. **No heavy box shadows** — always tint with `primary` at low opacity.
4. **All transitions** use `cubic-bezier(0.4, 0, 0.2, 1)` at `300ms`.
5. **Hover = lift**, not color change, for primary buttons.
6. **Labels are always uppercase** with `letter-spacing: 0.1em`.
