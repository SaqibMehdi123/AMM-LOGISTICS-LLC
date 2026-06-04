# AMM Logistics LLC — Website

A fast, static, single-page marketing website for AMM Logistics LLC — an
owner-operated flatbed & box-truck freight carrier based in Frisco, TX (MC-1536951).

Charcoal + brass "Industrial Luxe" design. Pure static HTML + compiled Tailwind CSS
(Sora / Inter / JetBrains Mono). **No server, no database, no runtime framework.**
The website files live at the **root of this repo**, so it deploys with zero config.

## What's here

```
index.html          # single-page site (Hero, Services, Service Area, About, Contact)
privacy.html        # Privacy Policy
terms.html          # Terms of Service
404.html            # Not-found page
favicon.svg         # charcoal + brass truck favicon
apple-touch-icon.png# 180×180 icon for iOS home-screen
robots.txt          # allows indexing, points to sitemap
sitemap.xml         # 3 URLs
_headers            # security + cache headers (Cloudflare Pages / Netlify)
assets/
  styles.css        # COMPILED Tailwind (committed — deploy needs no build)
  hero.jpg          # hero background (stock photo, 1920×1080 — swap for client photo)
src/input.css       # Tailwind source (dev only)
tailwind.config.js  # design tokens (dev only)
package.json        # build scripts (dev only)
```

> **Deployment requires NO build step.** `assets/styles.css` is already compiled
> and committed.

## Deploy (pick one — all free)

**Cloudflare Pages / Netlify / Vercel (connect this repo):**
- Build command: *(leave empty)*
- Output / publish directory: `/` (repo root — `index.html` is here)
- Add custom domain **ammlogisticsllc.com** (and `www`); set the DNS records the
  host shows you. HTTPS is automatic.

**GitHub Pages:**
- Repo → Settings → Pages → Source: `Deploy from a branch` → `main` / `/ (root)`.

Post-launch: submit `https://ammlogisticsllc.com/sitemap.xml` to Google Search
Console, and test the page in Google's Rich Results tool (validates the JSON-LD).

## Editing content

All company facts live in the HTML. To change phone, email, etc., search & replace
across `index.html`, `privacy.html`, `terms.html`.
Key values: `+16156535987`, `Vaughn@ammlogisticsllc.com`, `MC-1536951`, `Frisco, TX`.

## Rebuilding the CSS (only if you change classes/design tokens)

Option A — npm: `npm install` then `npm run build` (outputs `assets/styles.css`).

Option B — standalone CLI (no npm): download the Tailwind v3 binary from
https://github.com/tailwindlabs/tailwindcss/releases, then
`./tailwindcss.exe -i ./src/input.css -o ./assets/styles.css --minify`.

## Before final launch — confirm with client

- [ ] **Domain & DNS access** for ammlogisticsllc.com.
- [ ] **Replace `assets/hero.jpg`** with the client's own truck photo if provided.
      Current image is a free Pexels stock photo (no attribution required).
- [ ] Confirm name, phone, email, MC number are exactly correct.
- [ ] Optional: add a USDOT number, business hours, or company logo if available.

## Notes

- Fonts (Sora + Inter + JetBrains Mono) load from Google Fonts with preconnect.
- Icons are inline SVG (no icon-font dependency).
- Includes SEO meta, Open Graph tags, and `MovingCompany` JSON-LD structured data
  (legal name, MC number, contact, states served) — important for search visibility
  and for the dialer/VoIP provider's business verification.
