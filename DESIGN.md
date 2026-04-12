# Design System Document: The Ethereal Professional

This design system is engineered to move away from the "bootstrap" aesthetic of the modern web, favoring a high-end editorial approach that emphasizes depth, light, and typographic authority. It is designed for a minimalist landing page that feels less like a website and more like a curated digital gallery.

---

## 1. Overview & Creative North Star: "The Ethereal Professional"

The North Star for this design system is **"The Ethereal Professional."**

This direction prioritizes breathing room (whitespace) and the physics of light. We reject the rigid, "boxed-in" grid in favor of an organic, layered composition. The goal is to create an interface that feels like a singular, fluid sheet of frosted glass resting on a shifting gradient. By utilizing high-contrast typography scales against soft, tonal backgrounds, we establish an immediate sense of prestige and intentionality.

---

## 2. Colors & Atmospheric Depth

Our palette is rooted in soft slate and muted periwinkle tones, designed to reduce eye strain while maintaining a modern, sophisticated edge.

### The "No-Line" Rule

**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Structural boundaries must be defined solely through background color shifts.

- To separate a section, transition from `surface` to `surface-container-low`.
- To highlight a content block, use `surface-container-lowest` as a "well" within a `surface` section.

### Surface Hierarchy & Nesting

Treat the UI as a series of physical layers.

- **Base Layer:** `surface` (#f7f9fb)
- **Secondary Sectioning:** `surface-container-low` (#f0f4f7)
- **Floating Cards/Interactive Elements:** `surface-container-lowest` (#ffffff)

### The "Glass & Gradient" Rule

To achieve the user's request for a "blur effect," apply a `backdrop-blur: 24px` to any navigation or floating element. Use the `primary-fixed-dim` (#afb9ee) at 20% opacity as the fill for these glass layers.

### Signature Textures

Main CTAs and the Hero background should utilize a linear gradient:

- **From:** `primary` (#525c8c)
- **To:** `tertiary` (#6f557d)
  Apply this at a 135-degree angle to provide a "visual soul" that flat colors cannot mimic.

---

## 3. Typography: Editorial Authority

We use **Manrope** across the entire system. Its geometric yet humanist qualities allow it to scale from massive display sizes to tiny labels without losing character.

- **Display Scale (`display-lg` 3.5rem):** Reserved exclusively for the "Name." It should have a tight letter-spacing (-0.04em) to feel like a logotype.
- **Headline Scale (`headline-md` 1.75rem):** Used for the "Profession." This provides a clear secondary anchor.
- **Body Scale (`body-lg` 1rem):** For narrative descriptions. Use a generous line-height (1.6) to ensure the minimalist vibe remains readable and airy.
- **Label Scale (`label-md` 0.75rem):** Used for navigation and metadata. These should be all-caps with increased letter-spacing (0.1em) to feel premium and discreet.

---

## 4. Elevation & Depth: Tonal Layering

We ignore traditional CSS "drop-shadow: black" defaults. Elevation in this system is a result of light and opacity.

- **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` element placed on a `surface-container` background creates a natural lift.
- **Ambient Shadows:** If a floating element (like a mobile nav) requires a shadow, use:
  `box-shadow: 0 20px 40px rgba(82, 92, 140, 0.06);`
  _(Using a tinted version of `primary` instead of black)._
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` (#acb3b7) at **15% opacity**. Never use 100% opacity borders.

---

## 5. Components

### Navigation (Discreet & Transparent)

- **Style:** No background color. Use `surface-container-lowest` at 40% opacity with a heavy `backdrop-blur`.
- **Items:** Use `label-md`. Interaction state (Hover) should shift the color from `on-surface-variant` to `primary` with a subtle 300ms transition.

### Buttons (The Signature CTA)

- **Primary:** Background: Gradient (`primary` to `tertiary`). Text: `on-primary` (#faf8ff). Border-radius: `full`.
- **Secondary:** Background: Transparent. Border: Ghost Border (15% `outline-variant`). Text: `on-surface`.
- **Interaction:** On hover, primary buttons should have a slight "lift" (transform: translateY(-2px)) rather than a color change.

### Cards & Content Blocks

- **Constraint:** Forbid the use of divider lines.
- **Implementation:** Separate content items using `1.5rem` (xl) of vertical whitespace. If separation is visually required, use a subtle background shift to `surface-container-high`.

### Input Fields (Contact)

- **Style:** Underline only. Use `outline-variant` for the underline. When focused, the underline transitions to `primary` and grows to 2px.

---

## 6. Do’s and Don'ts

### Do:

- **Do** use asymmetrical layouts. Place the "Name" (display-lg) off-center to create a modern, editorial feel.
- **Do** use the `tertiary` color (#6f557d) for accent highlights in text (e.g., a specific keyword in a bio).
- **Do** maximize the use of `surface-container-lowest` for "white-out" areas that draw the eye to high-priority content.

### Don’t:

- **Don’t** use pure black (#000000) for text. Always use `on-background` (#2c3437) to maintain the "soft" aesthetic.
- **Don’t** use standard shadows. If it looks like a "box shadow," it's too heavy.
- **Don’t** use 1px solid borders to define the edges of the screen or footer. Let the content float within the background gradient.

---

## 7. Interaction States

- **Hover:** All interactive elements should feel "magnetic." Use soft transitions (cubic-bezier(0.4, 0, 0.2, 1)).
- **Blur Transition:** When opening a menu or modal, the background blur should animate from 0px to 24px, creating a "dreamlike" focus on the foreground.
