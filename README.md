# slowly. · Landing Page

> **Wellness that doesn't shout.** — The marketing landing page for [slowly.health](https://slowly.health), a calm wellness app built for India.

---

## Overview

This repo contains the static landing page for **Slowly** — a daily wellness app that gives users one action a day, no leaderboards, no streaks, no shouting. The page is built with plain HTML, CSS, and vanilla JavaScript. No build step required.

**Live page:** India-first beta launching 2026 · Waitlist open

---

## What's Inside

| File | Purpose |
|---|---|
| `index.html` | Full landing page — hero, manifesto, how-it-works, app tour, FAQ, footer |
| `landing.css` | All styles — theming, layout, phone mockups, responsive breakpoints |
| `tweaks-panel.jsx` | In-browser edit mode panel (JSX source, used for headline/accent tweaks) |

---

## Sections

The page is structured as a single-scroll narrative:

1. **Hero** — Headline, waitlist signup form, three phone mockups (Today / Recap / You tabs)
2. **Manifesto (`#why`)** — "Every other app is shouting. We don't." — the philosophy
3. **How it works (`#how`)** — Three steps: Write your sentence → Open once a day → Sunday recap
4. **App Tour (`#tour`)** — Screen-by-screen walkthrough of the three core tabs
5. **Sunday Moment** — Weekly coach letter explained with a live phone mockup
6. **Founder Note** — From Yash Bhardwaj, Bengaluru — with a second waitlist CTA
7. **FAQ (`#faq`)** — Six questions covering launch timeline, pricing, data privacy, and philosophy
8. **Footer** — Links, legal, branding

---

## Running Locally

No build step. Just open `index.html` in a browser:

```bash
# Clone the repo
git clone https://github.com/SlowlyLabs/slowly-landing.git
cd slowly-landing

# Open in browser (macOS)
open index.html

# Or serve with any static server
npx serve .
```

---

## Tweaks Panel

The page ships with a built-in **Tweaks Panel** for live A/B testing of headline copy and accent colours — activated via `postMessage` from a parent frame (e.g., a design/preview tool).

**Available headline variants:**
- `lasts` → *Slow training, lasting results.*
- `better` → *Get better slowly. For good.*
- `rush` → *The body you want isn't built in a rush.*
- `everyday` → *Eat well. Train well. Every day. For years.*
- `shout` → *Wellness that doesn't shout.*

**Available accent colours:** `lime`, `mint`, `amber`, `rose`

Trigger the panel by sending this message from a parent frame:

```js
iframe.contentWindow.postMessage({ type: '__activate_edit_mode' }, '*');
```

---

## Tech Stack

- **HTML5** — semantic, no frameworks
- **CSS** — custom properties, CSS Grid, Flexbox, `backdrop-filter`
- **Vanilla JS** — nav scroll behaviour, tweaks panel, form UX
- **Fonts** — [Inter](https://fonts.google.com/specimen/Inter) + [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) via Google Fonts
- **Icons** — [Ionicons 7](https://ionic.io/ionicons) via CDN

---

## Brand

| Token | Value |
|---|---|
| Primary accent (lime) | `#C8FF3C` |
| Secondary accent (mint) | `#9EFFC4` |
| Background (ink) | `#0A0E0C` |
| Serif font | Instrument Serif |
| Sans font | Inter |

---

## Deployment

The page is a single static file — deploy to any static host:

- **Vercel** — `vercel deploy`
- **Netlify** — drag & drop the folder
- **GitHub Pages** — enable in repo Settings → Pages → branch `main`

---

## License

© 2026 Slowly Labs · Built quietly in Bengaluru.
