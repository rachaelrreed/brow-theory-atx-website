# Brow Theory ATX

Production website for **Rachael Reed, RN, BSN** — nurse-trained permanent makeup artist in Austin, Texas.

Built to drive direct bookings and establish Rachael as the premier powder brow specialist in Austin.

**Live domain:** [browtheoryatx.com](https://browtheoryatx.com)  
**Booking:** [book.peek.com/browtheoryatx](https://book.peek.com/browtheoryatx)

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Forms | React Hook Form + Formspree |
| Fonts | Playfair Display + Montserrat (Google Fonts) |
| Deployment | Vercel |

---

## Run locally

```bash
npm install
cp .env.example .env.local   # optional
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

---

## Project structure

```
app/                 # Pages, layout, globals, sitemap, robots
components/          # Navbar, Footer, section components
lib/                 # constants.ts, gallery-data.ts, faq-data.ts
public/              # Images, logos, manifest
```

---

## Edit content without touching components

| File | Purpose |
|------|---------|
| `lib/constants.ts` | Contact, booking URL, med spa, Formspree |
| `lib/gallery-data.ts` | Instagram gallery images |
| `lib/faq-data.ts` | FAQ answers |
| `lib/testimonials-data.ts` | Client reviews |

---

## Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Set environment variable: `NEXT_PUBLIC_SITE_URL=https://browtheoryatx.com`
4. Deploy — Vercel auto-detects Next.js
5. Add custom domain `browtheoryatx.com` in Vercel → Settings → Domains
6. Update GoDaddy DNS with the records Vercel provides
7. Enable Vercel Analytics and Speed Insights after first deploy

---

## License

Private — © Brow Theory ATX. All rights reserved.
