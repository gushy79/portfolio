# Nick Gushlow - Portfolio

Professional portfolio website for Nick Gushlow, Enterprise Architect specialising in cloud-native architecture, digital transformation, and strategic technology leadership.

**Live site:** [nickgushlow.com](https://nickgushlow.com) *(coming soon)*

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

- **Design system:** Token-based CSS with semantic colour scales
- **Responsive images:** WebP with JPEG fallbacks, srcset for multiple resolutions
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation
- **SEO optimised:** Meta tags, Open Graph, structured sitemap
- **Progressive enhancement:** Works with JavaScript disabled

---

## Project Structure

```
portfolio/
├── index.html              # Main portfolio page
├── 404.html                # Custom error page
├── robots.txt              # Search engine directives
├── sitemap.xml             # SEO sitemap
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

**Colour Palette:**
- Primary: Indigo (`#6366f1`) - trust, professionalism
- Accent: Orange (`#f97316`) - energy, action
- Neutrals: Slate scale for text and backgrounds

**Typography:**
- Headings: Inter (system font stack fallback)
- Body: System font stack for optimal performance

**Responsive Breakpoints:**
- Mobile: < 768px
- Desktop: ≥ 768px

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

## Performance

- **First Contentful Paint:** < 0.5s
- **Time to Interactive:** < 1s
- **Total page weight:** < 500KB
- **Lighthouse score:** 100/100 (Performance, Accessibility, Best Practices, SEO)

---

## Browser Support

- **Modern browsers:** Full support (Chrome, Firefox, Safari, Edge)
- **Legacy browsers:** Graceful degradation with fallbacks

---

## Licence

© 2025 Nick Gushlow. All rights reserved.

Portfolio content and design are proprietary. Code structure and CSS architecture patterns may be referenced for educational purposes.

---

## Contact

- **Email:** nick@gushlow.com
- **LinkedIn:** [linkedin.com/in/nick-gushlow](https://www.linkedin.com/in/nick-gushlow)
- **Location:** Reading, UK (Remote | Hybrid UK-wide)
