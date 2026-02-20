# Design System — Industrial Precision

A design system built to escape the "AI startup aesthetic." The goal: **quiet confidence** — the feeling that systems are built to last, not to demo.

---

## Essence

*Precise, honest, substantial. No soft gradients. No floating orbs. No pill-shaped buttons.*

---

## Typography

| Role | Font | Usage |
|------|------|-------|
| Body | IBM Plex Sans | 400, 500, 600, 700 — technical, legible, not generic |
| Display | Playfair Display | Section titles — serif contrast for hierarchy |
| Code | Fira Code | Technical snippets |

**Why IBM Plex Sans (not Inter/Geist):** Corporate objectivity, legibility at small sizes, perceived as "current" without being trendy. No italic needed for this UI.

---

## Color System

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-ink` | #1a1a1a | Primary text, borders, accents |
| `--color-paper` | #f5f4f0 | Background — warm paper tone |
| `--color-muted` | #5c5c5c | Secondary text |
| `--white` | #ffffff | Cards, inputs |

**Forbidden:** Soft gradients, pastels, muted pastels, glow effects.

---

## Shape Language

| Element | Radius | Rationale |
|--------|--------|--------|
| Cards | 6px | Precise, not pill-shaped |
| Buttons | 4px | Sharp, intentional |
| Inputs | 4px | Consistency |

**Rejected:** `rounded-2xl`, `rounded-3xl`, `rounded-full` — too soft, too generic.

---

## Depth & Texture

- **Shadows:** Subtle, directional. `--shadow-card`, `--shadow-elevated` — no soft blurs.
- **Background:** Flat `#f5f4f0` with subtle noise overlay (4% opacity, multiply). No floating orbs, no radial gradients.
- **Cards:** `bg-white` with 1px border, minimal shadow.

---

## Motion

- **Easing:** `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — slight bounce, not linear.
- **Duration:** 160–180ms for interactions.
- **Hover:** `translateY(-2px)` on cards, not `-4px`. Restrained.

---

## Signature Elements

1. **Solid hero name** — No gradient text. Name in `font-weight: 600`, solid ink.
2. **Left-origin nav underline** — `transform-origin: left` on active nav link.
3. **Paper grain** — Subtle SVG noise overlay for material feel.

---

## Anti-Patterns

- No floating orbs.
- No soft radial gradients.
- No pill-shaped buttons.
- No gradient text.
- No `scale-110` on hover (too playful).
- No excessive backdrop blur.

---

## Tailwind Tokens

```js
colors: { ink: "#1a1a1a", paper: "#f5f4f0", muted: "#5c5c5c" }
borderRadius: { card: "6px", btn: "4px" }
```

---

*Built for reliability, not demos.*
