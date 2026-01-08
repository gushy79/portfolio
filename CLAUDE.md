# Portfolio Project

Personal portfolio website at **nickgushlow.com**

---

## Global Standards

**Inherits from:** `/home/nickg/ClaudeCode/GLOBAL-STANDARDS.md`

All writing standards, Nick's profile, contact information, and quality standards are defined in the global standards file.

---

## Project Purpose

Professional portfolio website showcasing 20+ years of architecture experience. Built with pure vanilla web technologies (no frameworks, no build process, no dependencies) for maximum performance, longevity, and maintainability.

**Target Audience:**
- Hiring managers and recruiters
- CTO/CIO decision-makers
- EA/Chief Architect peers
- Potential collaborators and clients

**Key Objectives:**
- Demonstrate technical depth and business impact
- Showcase "Just Enough Architecture" philosophy
- Highlight £800k+ cost savings and global scale delivery
- Provide downloadable CV and contact information
- Host perspective pieces (thought leadership)

---

## Project Location

**Directory:** `/home/nickg/ClaudeCode/Portfolio/`
**Git Repo:** `github.com/gushy79/portfolio` (public)
**Live URL:** https://nickgushlow.com
**Backup URL:** https://nickgushlow.pages.dev (CloudFlare default)

---

## Technical Approach

### Why Vanilla Web Development?

- **Performance:** Zero bundle overhead, instant loading
- **Maintainability:** No framework churn, no security vulnerabilities from dependencies
- **Simplicity:** What you see is what ships
- **Longevity:** HTML/CSS/JS from 2025 will work unchanged in 2035

### Architecture Highlights

- **Design system:** Token-based CSS with semantic colour scales ("Confident Clarity" v1.3)
- **WCAG 2.1 Level AA compliant:** All colour combinations meet contrast requirements
- **Responsive images:** WebP with JPEG fallbacks, srcset for multiple resolutions
- **Accessibility:** Semantic HTML, ARIA labels, full keyboard navigation
- **SEO optimised:** Meta tags, Open Graph, structured sitemap
- **Progressive enhancement:** Works with JavaScript disabled
- **Analytics:** Privacy-friendly CloudFlare Web Analytics (GDPR compliant, no cookies)

---

## Lighthouse Scores

**Verified:** 2026-01-07

- **Performance:** 99/100
- **Accessibility:** 100/100 ✓ **Perfect Score!**
- **Best Practices:** 96/100
- **SEO:** 100/100

---

## Project Structure

```
Portfolio/
├── index.html              # Main portfolio page
├── 404.html                # Custom error page
├── robots.txt              # Search engine directives
├── sitemap.xml             # SEO sitemap
├── README.md               # GitHub repo documentation
├── CLAUDE.md               # This file
│
├── docs/
│   └── COLOUR-DECISION-TREE.md  # WCAG-compliant colour selection guide
│
├── assets/
│   ├── css/
│   │   ├── reset.css       # Modern CSS reset
│   │   ├── tokens.css      # Design tokens (colours, spacing, typography)
│   │   ├── utilities.css   # Utility classes
│   │   ├── typography.css  # Type scale and text styles
│   │   ├── components.css  # Reusable components
│   │   └── layout.css      # Page structure and grid
│   │
│   ├── js/
│   │   └── main.js         # Minimal progressive enhancement
│   │
│   ├── images/
│   │   ├── favicon/        # Multi-resolution favicons
│   │   ├── NG-Headshot-*   # Professional photos (WebP + fallbacks)
│   │   └── og-image.jpg    # Social media preview
│   │
│   └── Nick-Gushlow-CV.pdf # Downloadable curriculum vitae
│
├── website-status.md       # Current state and next steps
└── website-session-logs.md # Detailed session history
```

---

## Design System

**Colour Palette:** "Confident Clarity" v1.3

### Accent Colours (WCAG 2.1 Level AA Compliant)
- **Primary Accent:** Teal 700 (`#0F766E`) - 4.54:1 contrast on white
- **Accent Dark:** Teal 800 (`#115E59`) - 5.89:1 contrast (AAA for small text)
- **Accent Light:** Teal 100 (`#CCFBF1`) - Backgrounds and dark mode text
- **Warm Accent:** Amber 600 (`#D97706`) - Metrics and highlights

### Neutrals
- **Slate scale** (`#0F172A` to `#F8FAFC`) for text, backgrounds, and surfaces

### Typography
- **Headings:** Inter (locally hosted, system font stack fallback)
- **Body:** Inter (optimised for readability at 17px base size)
- **Monospace:** JetBrains Mono (for technical content)

### Responsive Breakpoints
- **Mobile:** < 640px (4 columns)
- **Tablet:** 640-1023px (8 columns)
- **Desktop:** 1024-1439px (12 columns)
- **Wide:** ≥ 1440px (12 columns)

### Accessibility Features
- Full keyboard navigation with visible focus indicators
- Dynamic tabindex management for mobile menu
- ARIA labels and landmarks
- Reduced motion preferences respected
- Colour contrast meets WCAG 2.1 Level AA across all components

### Documentation
- Comprehensive colour decision tree: `docs/COLOUR-DECISION-TREE.md`
- Inline token documentation with contrast ratios in `assets/css/tokens.css`

---

## Available Agents

### Personal Agents (Cross-Project)
Located in `/home/nickg/.claude/agents/`

**Career & Brand:**
- `exec-recruiter` - Career materials (if portfolio needs CV content updates)
- `personal-marketeer` - Portfolio positioning and brand strategy

**Review & Validation:**
- `architecture-peer` - Technical credibility (if adding architecture documentation)
- `content-critic` - Multi-persona review (if adding written content/perspectives)

### Project Agent (Portfolio-Specific)
Located in `Portfolio/.claude/agents/`

- `portfolio-developer` - Website implementation specialist
  - **Context:** Knows design system ("Confident Clarity" v1.3), asset locations, deployment workflow
  - **Expertise:** WCAG compliance, vanilla web development, CloudFlare Pages deployment
  - **Use for:** Website updates, accessibility fixes, design system changes

---

## Deployment

### Git Workflow

**Repository:** Public repo at `github.com/gushy79/portfolio`

**Branch strategy:**
- `main` - Production (auto-deploys to CloudFlare Pages)

**Making changes:**
```bash
cd /home/nickg/ClaudeCode/Portfolio

# Edit files...

# Commit changes
git add .
git commit -m "Your changes

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# Push to GitHub (auto-deploys)
git push origin main
```

**Deployment:** Automatic via CloudFlare Pages (~30 seconds after push to main)

### CloudFlare Pages Configuration

**Project:** nickgushlow.com
**Build command:** *(none - static site)*
**Output directory:** `/` *(root)*
**Framework preset:** None

**Custom domain:**
- Primary: nickgushlow.com
- www subdomain: www.nickgushlow.com → nickgushlow.com
- Legacy redirect: gushlow.com/nick → nickgushlow.com

**Analytics:** CloudFlare Web Analytics (privacy-friendly, GDPR compliant, no cookies)

---

## Cross-Project Integration

### Portfolio ↔ Perspectives
**Integration:** Published perspective pieces displayed on website

**Workflow:**
1. Write and review perspective in Perspectives project
2. Publish final piece to `Perspectives/Published/`
3. Add to Portfolio website (Perspectives section)

**Implementation status:**
- Perspectives section designed but not yet implemented
- Waiting for 3 pieces to be ready from Perspectives project

### Portfolio ↔ JobHunting
**Integration:** CV downloadable from website

**Workflow:**
1. Maintain CV in JobHunting project (`JobHunting/CVs/Hybrid/Nick.Gushlow-CV-Hybrid-2025.pdf`)
2. Export PDF from Google Docs
3. Copy to Portfolio: `Portfolio/assets/Nick-Gushlow-CV.pdf`
4. Commit and push to deploy

**File locations:**
- Source: `JobHunting/CVs/Hybrid/Nick.Gushlow-CV-Hybrid-2025.pdf`
- Website: `Portfolio/assets/Nick-Gushlow-CV.pdf`

---

## Development Workflow

### Local Development

**Serve locally:**
```bash
cd /home/nickg/ClaudeCode/Portfolio

# Python 3
python3 -m http.server 8000

# Or Node.js
npx serve .
```

**Visit:** `http://localhost:8000`

### Making Changes

**For content updates:**
1. Edit HTML files directly (no build step)
2. Test locally
3. Commit and push

**For CSS changes:**
1. Edit relevant CSS file (`tokens.css`, `components.css`, etc.)
2. Test locally and verify accessibility
3. Reference `docs/COLOUR-DECISION-TREE.md` for colour choices
4. Run Lighthouse audit to verify scores maintained
5. Commit and push

**For accessibility changes:**
1. Make changes
2. Test with keyboard navigation
3. Run Lighthouse accessibility audit (target: 100/100)
4. Test with screen reader if possible
5. Commit and push

### Quality Gates

Before pushing to production:
- ✅ Test locally in multiple browsers (Chrome, Firefox, Safari)
- ✅ Test responsive design (mobile, tablet, desktop)
- ✅ Test keyboard navigation (tab through all interactive elements)
- ✅ Run Lighthouse audit (maintain 99/100 Performance, 100/100 Accessibility)
- ✅ Verify colour contrast meets WCAG AA (use colour decision tree)
- ✅ Check for console errors

---

## Key Decisions Made

**Design:**
- **Headline:** "Enterprise Architect" leads (senior positioning), not dual-title
- **Tagline:** "Strategy to Execution" signals practical credibility without SA title
- **"Just Enough Architecture":** Featured prominently as key differentiator
- **Location:** UK-wide flexibility, no international mention (dilutes UK focus)
- **SEO:** "Solutions Architect" in meta description only for Principal SA role searches

**Content:**
- **Hero phrasing:** "From scratch to scale" preferred over "zero-to-one" (universally understood, not VC jargon)
- **Contact section:** Evergreen "open to" framing vs "I'm looking for" (works whether job hunting or employed)

**Technical:**
- **Performance target:** 99/100 is optimal (chasing 100/100 adds complexity for minimal gain)
- **Button hover pattern:** Same colour + shadow/lift (no contrast regression on hover states)
- **Dark backgrounds:** Always use accent-light, never standard accent (WCAG compliance)
- **Small text (<14px):** Use accent-dark for AAA compliance (5.89:1 ratio vs 4.54:1)

**Brand:**
- **LinkedIn sharing:** User preference is no announcement post ("not really me")
- **Perspectives workstream:** Separated into Perspectives project (content serves website, LinkedIn, interviews)
- **Website dependency:** Implement Perspectives section after 3 pieces ready from Perspectives project

---

## Status Files

**Current state:** `website-status.md`
- Read at start of each session
- ~50 lines, current phase, next steps
- Updated at end of session

**Detailed history:** `website-session-logs.md`
- Read when context needed
- Decision rationale, iterations, major changes

---

## Reference Documents

**In this project:**
- `docs/COLOUR-DECISION-TREE.md` - Visual guide for WCAG-compliant colour selection
- `README.md` - GitHub repository documentation (public-facing)

**In parent JobHunting project (to be moved/archived):**
- `Resume/lighthouse/WCAG-ACCENT-COLOR-ANALYSIS.md` - Comprehensive accessibility audit (700 lines)
- `Resume/lighthouse/QUICK-FIX-GUIDE.md` - Implementation reference (119 lines)

---

## Content Guidelines

**Voice & Tone:**
- Professional but authentic
- Confident without arrogance
- Demonstrates depth through specificity
- Business outcomes over technical jargon

**Copy Principles:**
- Lead with value, not background
- Concrete examples over abstract claims
- Measurable outcomes (£800k savings, 8M users, 11 countries)
- "Just Enough Architecture" philosophy woven throughout

**Accessibility:**
- Alt text for all images
- ARIA labels for interactive elements
- Semantic HTML structure
- Keyboard-accessible navigation

---

## Browser Support

- **Modern browsers:** Full support (Chrome, Firefox, Safari, Edge latest versions)
- **Legacy browsers:** Graceful degradation with fallbacks
- **Mobile:** Tested on iOS Safari and Chrome Android

---

## Version History

**2026-01-08 (Project Split):**
- Separated from monolithic JobHunting project
- Created as standalone Portfolio project
- Inherited git history from Resume/website/

**2026-01-07 (Perfect Accessibility):**
- Achieved 100/100 Lighthouse Accessibility score
- Fixed mobile menu accessibility (WCAG 2.4.3 and 4.1.2 compliance)

**2026-01-06 (Launch):**
- Deployed to CloudFlare Pages
- Custom domain nickgushlow.com activated
- Portfolio URL added to all CV variants

**2025-12-23 to 2026-01-05:**
- Initial design and development
- Created "Confident Clarity" design system
- Implemented responsive layout and components

---

**Last Updated:** 2026-01-08
**Project Owner:** Nick Gushlow
**Maintained By:** Claude Code + Nick
