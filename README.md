# Jitendra Singh — LIC Insurance Advisor Portfolio Website

A premium, production-ready personal portfolio and lead-generation website for a Senior LIC Chief Insurance Advisor. Built with pure HTML5, CSS3, and Vanilla JavaScript — no frameworks, no build tools required.

---

## Project Overview

This website serves as a professional digital presence for an experienced LIC insurance advisor, designed to:

- Build immediate trust and authority with visitors
- Clearly explain insurance services and offerings
- Generate leads through WhatsApp, phone, and contact form
- Showcase 25+ years of career milestones and client stories
- Assist claim-seeking clients with process guidance

**Design Philosophy:** Trust-first, conversion-focused, premium financial brand aesthetic — calm, credible, and human-centered.

---

## Live Demo



---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, Grid, Flexbox) |
| Scripting | Vanilla JavaScript (ES6+, Intersection Observer) |
| Fonts | Google Fonts (Cormorant Garamond + DM Sans) |
| Icons | Font Awesome 6.5 (CDN) |
| Hosting | Vercel / GitHub Pages (static) |
| Backend | None — 100% static |

---

## Project Structure

```
financial-advisor-portfolio/
│
├── index.html                  # Home page
│
├── pages/
│   ├── services.html           # Full services detail page
│   ├── legacy.html             # Legacy, milestones & client stories
│   └── contact.html            # Contact form & office info
│
├── css/
│   ├── global.css              # Design tokens, reset, typography, utilities
│   ├── navbar.css              # Sticky navigation, mobile hamburger
│   ├── hero.css                # Full-height hero section
│   ├── services.css            # Services, about, timeline, testimonials,
│   │                           # FAQ, contact form, footer styles
│   └── responsive.css          # All breakpoints & mobile-first overrides
│
├── js/
│   ├── navbar.js               # Scroll state, hamburger menu, active links
│   ├── animations.js           # Intersection Observer reveal + counters
│   ├── faq.js                  # Accordion expand/collapse, ARIA
│   ├── scroll.js               # Smooth scrolling, scroll-to-top
│   └── contact.js              # Form validation, WhatsApp redirect
│
├── assets/
│   ├── images/
│   │   ├── hero/               # Advisor portrait (replace placeholder)
│   │   ├── legacy/             # Award photos, seminar images
│   │   ├── services/           # Service illustration images
│   │   └── logos/              # LIC logo, IRDAI badge, certifications
│   ├── icons/                  # Custom SVG icons (if any)
│   └── fonts/                  # Self-hosted font files (optional)
│
└── README.md
```

---

## Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero, metrics, services overview, about, timeline, testimonials, FAQ, CTA |
| Services | `pages/services.html` | Detailed service categories with 24 service cards |
| Legacy & Milestone | `pages/legacy.html` | 11-entry career timeline, awards, client stories |
| Contact | `pages/contact.html` | Split-layout contact form + map + office hours |

---

## Key Features

- **Sticky Navbar** — Transparent on hero, becomes frosted-glass on scroll
- **Mobile Hamburger Menu** — Full-screen overlay with keyboard trap
- **Mobile Bottom CTA Bar** — Fixed [Call | WhatsApp | Book] bar on mobile
- **Floating WhatsApp Button** — Pulsing, always accessible
- **Scroll Reveal Animations** — Intersection Observer, no library needed
- **Animated Counters** — Count-up on scroll for stats
- **FAQ Accordion** — Smooth height animation, ARIA-compliant
- **Contact Form** — Full validation + WhatsApp redirect on submit
- **Timeline** — Alternating desktop / single-column mobile
- **Responsive at all breakpoints** — 320px to 1400px+

---

## Setup Instructions

### Option 1 — Open Locally (Zero Setup)

```bash
# Clone or download the project
git clone https://github.com/yourusername/financial-advisor-portfolio.git

# Navigate to folder
cd financial-advisor-portfolio

# Open in browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

> The site works without a local server since it uses no Node.js, no build step, and no server-side code.

### Option 2 — Local Dev Server (Recommended for development)

```bash
# Using VS Code Live Server extension (recommended)
# Install "Live Server" by Ritwick Dey → right-click index.html → Open with Live Server

# OR using Python
python3 -m http.server 8080
# Visit: http://localhost:8080

# OR using Node.js
npx serve .
# Visit: http://localhost:3000
```

---

## Customization Guide

### 1. Replace Advisor Details

Search and replace the following across all HTML files:

| Placeholder | Replace with |
|------------|-------------|
| `Rajesh Kumar Sharma` | Actual advisor name |
| `RKS` | Advisor initials |
| `+91 98765 43210` | Actual phone number |
| `contact@rajeshskarma.in` | Actual email |
| `Civil Lines, Deoria` | Actual office address |
| `274001` | Actual PIN code |
| `LIC Chief Advisor` | Actual title/designation |
| `rajeshskarma.in` | Actual domain |

### 2. Add Professional Photo

Replace the `.hero__photo-placeholder` div in `index.html` with:

```html
<img
  src="assets/images/hero/advisor-photo.webp"
  alt="Rajesh Kumar Sharma — Senior LIC Insurance Advisor"
  loading="eager"
  width="440"
  height="587"
/>
```

**Photo requirements:**
- Format: WebP (preferred) or JPG
- Dimensions: ~440×587px (portrait, 3:4 ratio)
- File size: Under 120KB (compress at squoosh.app)
- Background: Solid color or professional setting

Repeat for the About section photo placeholder.

### 3. Update WhatsApp Number

Find all instances of `wa.me/919876543210` and replace `919876543210` with:
`91` + your 10-digit number (no spaces or dashes).

Example: For number `9876543210` → use `wa.me/919876543210`

### 4. Add Google Maps Embed

In `pages/contact.html`, find the `contact-map__placeholder` div and replace with your Google Maps iframe:

1. Go to [Google Maps](https://maps.google.com)
2. Search your office address
3. Click **Share → Embed a map → Copy HTML**
4. Paste the `<iframe>` code inside `.contact-map`

### 5. Update Color Scheme (Optional)

All colors are CSS variables in `css/global.css`. The main tokens to customize:

```css
:root {
  --navy:  #0B1F3A;   /* Primary dark color */
  --gold:  #C9A84C;   /* Accent / CTA color */
}
```

### 6. Update SEO Meta Tags

In every HTML file's `<head>`:
- Update `<title>` with advisor name and city
- Update `<meta name="description">` with accurate content
- Update `<link rel="canonical">` with actual domain URL
- Update Open Graph (`og:`) tags with actual domain and images
- Update JSON-LD structured data with real business information

### 7. Add Real Testimonials

In `index.html` and `pages/legacy.html`, replace the sample testimonials with real client feedback. Keep testimonials authentic, specific, and non-promotional.

### 8. Add Real Timeline Data

In `index.html` and `pages/legacy.html`, update the timeline cards with real career milestones, actual years, actual awards, and actual achievements.

---

## Deployment

### Deploy to Vercel (Recommended — Free)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel

# Follow prompts → choose "Static Site" → done!
# Vercel provides HTTPS automatically
```

Or use [vercel.com](https://vercel.com) → New Project → Import GitHub repo → Deploy.

### Deploy to GitHub Pages (Free)

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial production build"

# Push to GitHub
git remote add origin https://github.com/yourusername/financial-advisor-portfolio.git
git push -u origin main
```

Then in GitHub repo → **Settings → Pages → Source: main branch → Save**.

Your site will be live at `https://yourusername.github.io/financial-advisor-portfolio/`

### Deploy to Netlify (Free)

1. Go to [netlify.com](https://netlify.com) → New site from Git
2. Connect your GitHub repo
3. Build command: *(leave empty)*
4. Publish directory: `.` (root)
5. Deploy site

---

## Performance Optimization Checklist

Before deploying to production:

- [ ] Compress all images with [Squoosh](https://squoosh.app) (target < 100KB each)
- [ ] Convert images to WebP format
- [ ] Add `loading="lazy"` to all below-fold images
- [ ] Add `width` and `height` attributes to all `<img>` tags
- [ ] Verify all links are correct (no broken hrefs)
- [ ] Test on Chrome, Firefox, Safari, and Edge
- [ ] Test on real mobile device (not just browser emulation)
- [ ] Run [Lighthouse audit](https://pagespeed.web.dev/) — target 90+ all categories
- [ ] Validate HTML at [validator.w3.org](https://validator.w3.org)
- [ ] Check color contrast at [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## Assets Required (Add to `/assets/`)

Replace placeholder elements with these real assets:

| Asset | Location | Notes |
|-------|----------|-------|
| Advisor portrait (front-facing) | `assets/images/hero/` | WebP, ~440×587px |
| Advisor portrait (candid/office) | `assets/images/hero/` | For About section |
| Award ceremony photos | `assets/images/legacy/` | LIC awards, recognition events |
| Seminar/event photos | `assets/images/legacy/` | Financial literacy drives |
| LIC logo (authorized) | `assets/images/logos/` | Use official LIC branding |
| IRDAI badge | `assets/images/logos/` | Download from IRDAI website |
| Office exterior/interior | `assets/images/` | For contact page trust |

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| iOS Safari 14+ | ✅ Full |
| Android Chrome | ✅ Full |
| IE 11 | ❌ Not supported |

---

## Git Commit Convention

```bash
feat: add timeline section
fix: correct mobile navbar overflow
style: improve hero spacing and typography
content: update advisor bio and milestones
perf: compress hero images to WebP
a11y: add ARIA labels to service cards
seo: add structured data to contact page
```

---

## Legal Compliance Notes

The following have been included per financial industry standards:

- **Disclaimer** in footer on all pages
- **IRDAI Registered** trust signal
- **No guaranteed return claims**
- **Privacy Policy** link (create actual page)
- **Terms of Use** link (create actual page)

Consult a legal professional to draft the actual Privacy Policy and Disclaimer pages appropriate for LIC advisors in India.

---

## License

This website code is built for and belongs to Rajesh Kumar Sharma. All content, design, and client stories are proprietary. Not for redistribution.

---

## Support & Contact

For technical issues or customization help:

- Developer: [Your Name / Agency]
- Email: [developer@email.com]

For business inquiries:

- Rajesh Kumar Sharma
- Email: contact@rajeshskarma.in
- Phone: +91 98765 43210
- WhatsApp: wa.me/919876543210
