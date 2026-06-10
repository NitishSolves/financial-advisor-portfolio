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
│   │   ├── Photo.png           # Advisor portrait used by the live pages
│   │   └── Logo.jpg            # Site / advisor logo image
│   ├── icons/
│   │   └── .gitkeep            # Empty placeholder for future custom icons
│   └── fonts/
│       └── .gitkeep            # Empty placeholder for future self-hosted fonts
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

- **Sticky Navbar** — Transparent on the homepage hero, then switches to a frosted-glass state on scroll
- **Mobile Hamburger Menu** — Full-screen mobile navigation overlay with focus management and a book-consultation CTA
- **Mobile Menu Contact Shortcuts** — Call and WhatsApp actions are available inside the mobile menu
- **Floating WhatsApp Button** — Persistent WhatsApp entry point on live pages
- **Scroll Reveal Animations** — Intersection Observer reveals content without third-party animation libraries
- **Animated Counters** — Count-up statistics trigger when visible
- **FAQ Accordion** — Smooth expand/collapse behavior with ARIA support
- **Contact Form** — Client-side validation and a pre-filled WhatsApp handoff flow
- **Timeline** — Alternating desktop / single-column mobile milestone layout
- **Responsive at all breakpoints** — Layouts adapt from small mobile screens through wide desktop screens

> Note: CSS and JavaScript hooks for a `.mobile-cta-bar` exist, but no bottom CTA bar markup is currently rendered in the HTML pages. The implemented mobile CTA experience is the hamburger menu CTA plus Call/WhatsApp shortcuts.

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

The current production advisor details used across the live pages are:

| Field | Current value |
|-------|---------------|
| Advisor name | `Jitendra Singh` |
| Title / designation | `LIC Chief Advisor` / `Senior LIC Chief Insurance Advisor` |
| Phone | `+91 83170 82328` |
| WhatsApp link | `https://wa.me/918317082328` |
| Email | `jitendras138530@gmail.com` |
| Office location | `Civil Lines, Deoria, Uttar Pradesh` |
| Domain | Replace with your production domain, for example `https://example.com` |

Before deploying, verify the HTML metadata, canonical URLs, JSON-LD, mail links, and JavaScript WhatsApp handoff all use the same production details.

### 2. Update Professional Photo and Logo

The repository currently includes these production image files:

| Asset | Path | Notes |
|-------|------|-------|
| Advisor portrait | `assets/images/Photo.png` | Used for advisor photo placements |
| Logo image | `assets/images/Logo.jpg` | Used for site / advisor branding |

If replacing these files, keep the same paths or update all HTML references at the same time. Optimize images before deployment and include accurate `alt`, `width`, and `height` attributes wherever the images are rendered.

### 3. Update WhatsApp Number

Production WhatsApp links should use `https://wa.me/918317082328`. If the advisor number changes, replace the digits after `wa.me/` with `91` + the 10-digit Indian mobile number, with no spaces or dashes.

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

## Current Assets

The repository currently tracks these asset paths:

| Asset | Location | Notes |
|-------|----------|-------|
| Advisor portrait | `assets/images/Photo.png` | Production portrait image |
| Logo image | `assets/images/Logo.jpg` | Production logo / brand image |
| Icons placeholder | `assets/icons/.gitkeep` | Keeps the empty icons directory in Git |
| Fonts placeholder | `assets/fonts/.gitkeep` | Keeps the empty fonts directory in Git |

Add any future images directly under `assets/images/` or create new folders only when the corresponding files are actually added and referenced by the site.

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

This website code is built for the production LIC advisor portfolio. All finalized client content, design customizations, and client stories should be treated as proprietary unless the project owner grants redistribution rights.

---

## Support & Contact

For technical issues or customization help:

- Developer: [Your Name / Agency]
- Email: [developer@email.com]

For business inquiries:

- Jitendra Singh
- Email: jitendras138530@gmail.com
- Phone: +91 83170 82328
- WhatsApp: https://wa.me/918317082328
