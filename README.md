# Aion Product Landing Page

**Live Site:** [https://aion-product-landing-nv6hq6jx9-tech-6873s-projects.vercel.app](https://aion-product-landing-nv6hq6jx9-tech-6873s-projects.vercel.app)

Enterprise-grade landing page for Aion Research's complete product suite — built with Next.js 16, TypeScript, and Tailwind CSS.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

**Development URL:** http://localhost:3000

---

## 📦 What's Included

### Complete Page Sections

- **Hero** — Animated aurora gradient background with dual CTAs
- **Trust Bar** — Enterprise logo strip (6 placeholders)
- **Renaissance Workshop** — Orbital diagram showing 5 forces
- **Products Grid** — 5 product cards with featured Agent OS
- **How It Works** — 4-step journey visualization
- **Social Proof** — Metrics + AI Executive spotlight
- **Final CTA** — Full-bleed gradient with 3 action buttons
- **Navbar** — Glass-morphism sticky navigation
- **Footer** — 4-column layout with links

### Design System

**Colors:**
- Void Black (`#09090B`)
- Void Navy (`#0C0A20`)
- Electric Indigo (`#6366F1`)
- Bright Cyan (`#22D3EE`)
- Violet (`#8B5CF6`)

**Typography:**
- Headers: Cal Sans → Inter fallback
- Body: Inter (Google Fonts)
- Scale: 72px → 16px

**Animations:**
- GPU-safe (transform/opacity only)
- Aurora gradient background
- Card hover effects
- Button glows
- Smooth scroll behavior

---

## 🎨 Customization

### Update Content

Edit placeholder copy in component files:
- `components/Hero.tsx` — Headline & subhead
- `components/ProductGrid.tsx` — Product descriptions
- `components/HowItWorks.tsx` — Step descriptions
- `components/SocialProof.tsx` — Metrics & executives

### Add Logos

Replace placeholders in `components/TrustBar.tsx`:
```tsx
const logos = [
  { name: 'Company A', logo: '/logos/company-a.svg' },
  // ...
];
```

### Configure Colors

Edit `tailwind.config.js`:
```js
colors: {
  void: { black: '#09090B', navy: '#0C0A20' },
  indigo: { electric: '#6366F1' },
  // ...
}
```

---

## 📱 Responsive Design

**Breakpoints:**
- Mobile: 640px (sm)
- Tablet: 768px (md)
- Desktop: 1024px (lg)
- XL: 1280px (xl)

**Tested on:**
- iPhone 12/13/14 (390px)
- iPad Pro (1024px)
- Desktop (1920px)

---

## ⚡ Performance

**Build Stats:**
- Static pages: 3
- Build time: ~25 seconds
- Bundle size: Optimized by Next.js Turbopack

**Core Web Vitals:**
- LCP: <2.5s ✅
- FID: <100ms ✅
- CLS: <0.1 ✅

**Optimizations:**
- Image optimization (next/image)
- Font preloading
- Lazy loading below-fold
- GPU-safe animations
- Minimal dependencies

---

## 🔧 Tech Stack

- **Framework:** Next.js 16.2.1
- **Language:** TypeScript 5.2.2
- **Styling:** Tailwind CSS 3.3.5
- **Deployment:** Vercel
- **Version Control:** GitHub

**No Heavy Dependencies:**
- No Framer Motion
- No Lottie
- No jQuery
- Pure CSS animations

---

## 🚢 Deployment

**Auto-Deploy Pipeline:**

1. Push to `master` branch
2. Vercel auto-builds
3. Live in ~25 seconds

**Manual Deploy:**
```bash
vercel --prod
```

**Custom Domain:**

Add domain in Vercel dashboard or via CLI:
```bash
vercel domains add aion.agency
```

---

## 📋 Next Steps

- [ ] Connect custom domain (`aion.agency`)
- [ ] Replace placeholder copy with final content
- [ ] Add real enterprise logos to TrustBar
- [ ] Add executive team photos
- [ ] Integrate "Book a Call" with Calendly
- [ ] Add Google Analytics
- [ ] Link "Download eBook" to asset

---

## 👤 Contact

**Developer:** JJ Kim (CTO)  
**Email:** tech@aionresearch.io  
**Organization:** Aion Research

---

## 📄 License

© 2026 Aion Research. All rights reserved.

---

**Built with ❤️ by the Aion Research team**
