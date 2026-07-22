# Taro Salon — Landing Page

A single-page, mobile-first landing site for **Taro Salon** (Phuket), a Western-modern barbershop. Dark-luxury base with warm accents, built as one self-contained HTML file — no build step, no dependencies, no backend.

**Live status:** in progress — placeholder copy/prices are still being swapped for real content (see [Content checklist](#content-checklist) below).

---

## Preview

Just open `index.html` in any browser. That's it — no `npm install`, no server required.

```bash
open index.html        # macOS
start index.html        # Windows
xdg-open index.html     # Linux
```

For local development with live reload, any static server works too:

```bash
npx serve .
# or
python3 -m http.server
```

---

## Tech stack

| Layer | Choice |
|---|---|
| Markup / styling | Plain HTML + CSS (no framework, no Tailwind build step) |
| Interactivity | Vanilla JavaScript (no dependencies) |
| Fonts | Google Fonts — [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) + [Inter](https://fonts.google.com/specimen/Inter) (body) |
| Images | Embedded as base64 data URIs directly in the HTML |
| Hosting | Any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages) — it's a single file |

The whole site is intentionally shipped as **one `index.html`** with CSS and JS inlined. This was a deliberate choice after an earlier multi-file version (`css/style.css`, `js/main.js`, separate image files) failed to render correctly in some preview contexts because the relative file references didn't resolve. A single self-contained file guarantees the page always looks right regardless of where it's opened or previewed.

---

## Design system

- **Palette:** Obsidian `#121212` (background) · Warm Panel `#1C1712` (alternating sections) · Champagne Gold `#C5A059` / `#E3C688` (accent) · White `#FFFFFF` (headings, high-contrast elements) · Cream `#F5EFE6` / `#C9C0B2` (body text)
- **Type:** Fraunces (display/headings) + Inter (body/UI)
- **Signature motif:** a recurring circular "seal" — echoing the salon's real logo shape — used for the hero badge, price medallions, icon frames, and the before/after slider handle
- **Brand colors for social icons:** Facebook blue `#1877F2`, LINE green `#06C755`

---

## Features

- Responsive, mobile-first layout (single breakpoint at `860px`)
- Sticky navbar that solidifies on scroll + full-screen mobile menu
- Scroll-reveal animations on section entry (`IntersectionObserver`)
- Interactive **before/after** image comparison slider (drag or touch)
- **Live open/closed status** badge in the Contact section — calculated from the visitor's local clock against business hours (closed Wednesdays, 09:00–20:00 other days), updates every minute
- Cursor-following ambient light effect (desktop/pointer devices only; respects `prefers-reduced-motion`)
- Floating LINE contact button + LINE/Facebook icons in the footer, using each brand's real color for instant recognition
- Embedded Google Maps location + click-to-call phone link
- No tracking, no analytics, no external JS dependencies

---

## File structure

```
.
├── index.html   # everything — markup, styles, script, images (base64)
└── README.md
```

---

## Content checklist

Still pending before this is launch-ready:

- [ ] Full services list with real prices (currently `฿---` placeholders)
- [ ] Hero tagline / About Us copy (currently placeholder Thai copy)
- [ ] Real before/after photo pairs for the gallery slider (currently a colored placeholder, not real images)
- [ ] LINE OA link or LINE ID (floating button and "แชท LINE" button currently link to `#`)
- [ ] Confirm/update business hours if they differ from Google's current listing

## Business info currently wired in

- **Address:** วิชิต 2/286 หมู่ 6 ถนนเมืองทองเขาขาด ตำบลวิชิต อำเภอเมือง จังหวัดภูเก็ต 83000
- **Phone:** 080 456 1415
- **Hours:** closed Wednesdays, open 09:00–20:00 all other days
- **Facebook:** [facebook.com/profile.php?id=61557197266200](https://www.facebook.com/profile.php?id=61557197266200)

---

## Deploying

Since it's a single static file, any of these work with zero config:

- **GitHub Pages:** enable Pages on this repo, set source to the root/`main` branch — `index.html` is picked up automatically.
- **Netlify / Vercel / Cloudflare Pages:** drag-and-drop the file or connect the repo; no build command needed.

---

## License

Private project for Taro Salon, Phuket. Not for reuse without permission.
