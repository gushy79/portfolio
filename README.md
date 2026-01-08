# Nick Gushlow - Portfolio

Professional portfolio website for Nick Gushlow, Enterprise Architect specialising in cloud-native architecture, digital transformation, and strategic technology leadership.

**Live site:** [nickgushlow.com](https://nickgushlow.com)

---

## About

This portfolio showcases 20+ years of architecture experience, including:

- Building architecture practices from zero to scale
- Cloud-native design and legacy modernisation (Azure, GCP)
- Enterprise integration and platform engineering
- "Just Enough Architecture" pragmatic governance
- Proven commercial impact (£800k+ cost savings, 11-country deployments)

Target roles: Enterprise Architect | Principal Solutions Architect | Head of Architecture

---

## Technical Approach

**Pure vanilla web development** - no frameworks, no build process, no dependencies.

### Why Vanilla?

- **Performance:** Zero bundle overhead, instant loading
- **Maintainability:** No framework churn, no security vulnerabilities from dependencies
- **Simplicity:** What you see is what ships
- **Longevity:** HTML/CSS/JS from 2025 will work unchanged in 2035

### Architecture Highlights

- **Design system:** Token-based CSS with semantic colour scales and WCAG 2.1 Level AA compliance
- **Responsive images:** WebP with JPEG fallbacks, srcset for multiple resolutions
- **Accessibility:** WCAG 2.1 Level AA compliant, semantic HTML, ARIA labels, full keyboard navigation
- **SEO optimised:** Meta tags, Open Graph, structured sitemap
- **Progressive enhancement:** Works with JavaScript disabled
- **Analytics:** Privacy-friendly CloudFlare Web Analytics (GDPR compliant, no cookies)

---

## Project Structure

```
portfolio/
├── index.html              # Main portfolio page
├── 404.html                # Custom error page
├── robots.txt              # Search engine directives
├── sitemap.xml             # SEO sitemap
│
├── docs/
│   └── COLOUR-DECISION-TREE.md  # WCAG-compliant colour selection guide
│
└── assets/
    ├── css/
    │   ├── reset.css       # Modern CSS reset
    │   ├── tokens.css      # Design tokens (colours, spacing, typography)
    │   ├── utilities.css   # Utility classes
    │   ├── typography.css  # Type scale and text styles
    │   ├── components.css  # Reusable components
    │   └── layout.css      # Page structure and grid
    │
    ├── js/
    │   └── main.js         # Minimal progressive enhancement
    │
    ├── images/
    │   ├── favicon/        # Multi-resolution favicons
    │   ├── NG-Headshot-*   # Professional photos (WebP + fallbacks)
    │   └── og-image.jpg    # Social media preview
    │
    └── Nick-Gushlow-CV.pdf # Downloadable curriculum vitae
```

---

## Design System

**Colour Palette:** "Confident Clarity" v1.3

**Accent Colours (WCAG 2.1 Level AA Compliant):**
- Primary Accent: Teal 700 (`#0F766E`) - 4.54:1 contrast on white
- Accent Dark: Teal 800 (`#115E59`) - 5.89:1 contrast (AAA for small text)
- Accent Light: Teal 100 (`#CCFBF1`) - Backgrounds and dark mode text
- Warm Accent: Amber 600 (`#D97706`) - Metrics and highlights

**Neutrals:**
- Slate scale (`#0F172A` to `#F8FAFC`) for text, backgrounds, and surfaces

**Typography:**
- Headings: Inter (locally hosted, system font stack fallback)
- Body: Inter (optimised for readability at 17px base size)
- Monospace: JetBrains Mono (for technical content)

**Responsive Breakpoints:**
- Mobile: < 640px (4 columns)
- Tablet: 640-1023px (8 columns)
- Desktop: 1024-1439px (12 columns)
- Wide: ≥ 1440px (12 columns)

**Accessibility Features:**
- Full keyboard navigation with visible focus indicators
- Dynamic tabindex management for mobile menu
- ARIA labels and landmarks
- Reduced motion preferences respected
- Colour contrast meets WCAG 2.1 Level AA across all components

**Documentation:**
- Comprehensive colour decision tree guide (`docs/COLOUR-DECISION-TREE.md`)
- Inline token documentation with contrast ratios in `assets/css/tokens.css`

---

## Deployment

**Hosting:** CloudFlare Pages
**Repository:** [github.com/gushy79/portfolio](https://github.com/gushy79/portfolio)
**Deployment:** Automatic on push to `main`

**Build configuration:**
- Build command: *(none - static site)*
- Output directory: `/` *(root)*
- Framework preset: None

---

## Development

This is a static site with no build process. To develop locally:

```bash
# Clone the repository
git clone git@github.com:gushy79/portfolio.git
cd portfolio

# Serve locally (Python 3)
python -m http.server 8000

# Or use any static file server
npx serve .
```

Visit `http://localhost:8000` in your browser.

---

## Performance & Quality

**Lighthouse Scores** (verified 2026-01-07):
- **Performance:** 99/100
- **Accessibility:** 100/100 ✓ **Perfect Score!**
- **Best Practices:** 96/100
- **SEO:** 100/100

**Core Web Vitals:**
- **First Contentful Paint:** < 0.5s
- **Time to Interactive:** < 1s
- **Total page weight:** < 500KB

**Accessibility Standards:**
- WCAG 2.1 Level AA compliant
- All colour combinations meet contrast requirements
- Full keyboard navigation support
- Screen reader optimised with semantic HTML and ARIA

---

## Browser Support

- **Modern browsers:** Full support (Chrome, Firefox, Safari, Edge)
- **Legacy browsers:** Graceful degradation with fallbacks

---

## Recent Updates

**January 2026:**
- ✅ Achieved 100/100 Lighthouse Accessibility score
- ✅ Fixed mobile menu accessibility (WCAG 2.4.3 and 4.1.2 compliance)
- ✅ Optimised colour tokens for WCAG 2.1 Level AA compliance
- ✅ Added comprehensive colour decision tree documentation
- ✅ Deployed to CloudFlare Pages with custom domain
- ✅ Integrated privacy-friendly CloudFlare Web Analytics

**December 2025:**
- ✅ Initial design and development
- ✅ Created "Confident Clarity" design system
- ✅ Implemented responsive layout and component library
- ✅ Added professional headshots and CV download

---

## Licence

© 2026 Nick Gushlow. All rights reserved.

Portfolio content and design are proprietary. Code structure and CSS architecture patterns may be referenced for educational purposes.

---

## Contact

- **Email:** nick@gushlow.com
- **LinkedIn:** [linkedin.com/in/nickgushlow](https://www.linkedin.com/in/nickgushlow)
- **Location:** Reading, UK (Remote | Hybrid UK-wide)
