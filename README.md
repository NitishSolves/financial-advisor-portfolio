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

---

## Setup Instructions

### Option 1 — Open Locally (Zero Setup)

```bash
# Clone or download the project
git clone https://github.com/NitishSolves/financial-advisor-portfolio.git

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


## License

This website code is built for the production LIC advisor portfolio. All finalized client content, design customizations, and client stories should be treated as proprietary unless the project owner grants redistribution rights.

---

## 👨‍💻 Author

Made with ❤️ by **Nitish** | [GitHub](https://github.com/NitishSolves)

---