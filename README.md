# AMM Logistics LLC — Website

A fast, static, single-page marketing website for AMM Logistics LLC (owner-operated
flatbed & box-truck freight carrier, Frisco TX, MC-1536951).

Built from the "Industrial Integrity" Stitch design. Pure static HTML + compiled
Tailwind CSS — **no server, no database, no runtime JavaScript framework.**

## What's here

```
site/
├─ index.html          # main single-page site (Hero, Services, About/Area, Contact)
├─ privacy.html        # Privacy Policy
├─ terms.html          # Terms of Service
├─ 404.html            # Not-found page
├─ favicon.svg         # navy + orange truck favicon
├─ robots.txt          # allows indexing, points to sitemap
├─ sitemap.xml         # 3 URLs
├─ _headers            # security + cache headers (Cloudflare Pages / Netlify)
├─ assets/
│  ├─ styles.css       # COMPILED Tailwind (committed — deploy needs no build)
│  └─ hero.jpg         # hero background (placeholder stock, 1920×1080)
├─ src/input.css       # Tailwind source (dev only)
├─ tailwind.config.js  # design tokens (dev only)
└─ package.json        # build scripts (dev only)
```

> **Deployment requires NO build step.** `assets/styles.css` is already compiled
> and committed. Just upload the static files.

## Deploy (recommended: Cloudflare Pages — free)

1. Push this `site/` folder to a GitHub repo (or use direct upload).
2. Cloudflare Pages → Create project → connect repo (or "Direct Upload").
   - **Build command:** *(leave empty)*
   - **Output directory:** `/` (the folder containing `index.html`)
3. Add custom domain **ammlogisticsllc.com** (and `www`) → set the DNS records
   Cloudflare shows you. HTTPS is automatic.
4. Post-launch: submit `https://ammlogisticsllc.com/sitemap.xml` to Google Search
   Console, and test the page in Google's Rich Results tool (validates the JSON-LD).

Netlify / Vercel work the same way (drag-and-drop the folder, no build command).
`_headers` is honored by Cloudflare Pages and Netlify automatically.

## Editing content

All company facts live in the HTML. To change phone, email, etc., search & replace
across `index.html`, `privacy.html`, `terms.html` (kept identical on purpose).
Key values: `+16156535987`, `Vaughn@ammlogisticsllc.com`, `MC-1536951`, `Frisco, TX`.

## Rebuilding the CSS (only if you change classes/design tokens)

Option A — npm:
```
npm install
npm run build      # outputs assets/styles.css
```

Option B — standalone CLI (no npm needed):
Download the Tailwind v3 standalone binary from
https://github.com/tailwindlabs/tailwindcss/releases (tailwindcss-windows-x64.exe),
then:
```
./tailwindcss.exe -i ./src/input.css -o ./assets/styles.css --minify
```

## Before final launch — confirm with client

- [ ] **Domain & DNS access** for ammlogisticsllc.com.
- [ ] **Replace `assets/hero.jpg`** with the client's own truck photo if provided
      (Q20). Current image is a free Pexels stock photo (no attribution required).
- [ ] Pending questionnaire answers Q15–Q21 (truck count, company blurb, logo,
      color preference, photos, extras) — fold any updates into the copy.
- [ ] Confirm business hours / preferred public address detail.
- [ ] Optional: add USDOT number to the trust badges if the client has one.

## Notes

- Fonts (Sora + Inter + JetBrains Mono) load from Google Fonts with preconnect.
- Icons are inline SVG (no icon-font dependency).
- Includes SEO meta, Open Graph tags, and `MovingCompany` JSON-LD structured data
  carrying the legal name, MC number, contact, and states served — important for
  search visibility and for the dialer/VoIP provider's business verification.
