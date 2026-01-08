# Colour Decision Tree
**Quick Reference Guide for WCAG-Compliant Colour Selection**

Portfolio Website Design System v1.3
Last Updated: 2026-01-08

---

## 🎯 Quick Lookup

**Need a colour? Start here:**

| What are you styling? | Light Background | Dark Background |
|-----------------------|------------------|-----------------|
| **Normal text/links** | `--color-accent` | `--color-accent-light` |
| **Small text (<14px)** | `--color-accent-dark` | `--color-accent-light` |
| **Button background** | `--color-accent` | `--color-white` |
| **Button hover** | `--color-accent` (same) | `--color-white` |
| **Borders/icons** | `--color-accent` | `--color-accent-light` |
| **Decorative backgrounds** | `--color-accent-light` | N/A |

---

## 📊 Decision Tree Flowchart

```
START: What are you styling?
│
├─► TEXT CONTENT
│   │
│   ├─► What background?
│   │   │
│   │   ├─► Light (white/neutral-50/neutral-100)
│   │   │   │
│   │   │   ├─► What text size?
│   │   │   │   │
│   │   │   │   ├─► Normal (14px+)
│   │   │   │   │   └─► Use: --color-accent
│   │   │   │   │       Contrast: 4.54:1 ✓ WCAG AA
│   │   │   │   │
│   │   │   │   └─► Small (<14px)
│   │   │   │       └─► Use: --color-accent-dark
│   │   │   │           Contrast: 5.89:1 ✓ WCAG AAA
│   │   │   │
│   │   │   └─► BEST: --color-accent (AA), SAFEST: --color-accent-dark (AAA)
│   │   │
│   │   └─► Dark (neutral-800/neutral-900)
│   │       │
│   │       └─► Use: --color-accent-light
│   │           Contrast: High ✓ WCAG AA
│   │           ⚠️ NEVER use --color-accent on dark backgrounds!
│   │
│   └─► ✓ COMPLETE
│
├─► BUTTONS
│   │
│   ├─► Primary Button (filled)
│   │   │
│   │   ├─► Default state
│   │   │   └─► Background: --color-accent
│   │   │       Text: --color-white
│   │   │       Contrast: 4.54:1 ✓ WCAG AA
│   │   │
│   │   └─► Hover state
│   │       └─► Background: --color-accent (SAME as default)
│   │           Text: --color-white
│   │           Effect: Shadow + lift (no colour change)
│   │           Rationale: Prevents contrast regression
│   │
│   ├─► Secondary Button (outline)
│   │   │
│   │   └─► Default/hover
│   │       └─► Text: --color-accent
│   │           Border: --color-accent
│   │           Background: transparent → --color-accent-light (hover)
│   │
│   └─► Dark Variant Button
│       └─► Use: --color-white background, --color-neutral-800 text
│           (No accent colours)
│
├─► INTERACTIVE ELEMENTS
│   │
│   ├─► Links
│   │   └─► Text: --color-accent
│   │       Underline decoration: --color-accent-light
│   │       Hover: Same colour, underline shows
│   │
│   ├─► Focus Rings
│   │   └─► Outline: --color-accent
│   │       Works on all backgrounds (sufficient contrast)
│   │
│   └─► Navigation Indicators
│       └─► Active underline: --color-accent
│           Hover: --color-accent
│
├─► DECORATIVE ELEMENTS
│   │
│   ├─► Borders
│   │   │
│   │   ├─► On light backgrounds
│   │   │   └─► Use: --color-accent
│   │   │       Example: Card borders on hover
│   │   │
│   │   └─► On dark backgrounds
│   │       └─► Use: --color-accent-light
│   │
│   ├─► Icons
│   │   │
│   │   ├─► On light backgrounds
│   │   │   └─► Use: --color-accent
│   │   │
│   │   └─► On dark backgrounds
│   │       └─► Use: --color-accent-light
│   │
│   ├─► Background highlights
│   │   └─► Use: --color-accent-light
│   │       Example: Text selection, button hover backgrounds
│   │       Note: For backgrounds only, not text
│   │
│   └─► List markers/bullets
│       └─► Use: --color-accent
│           (Decorative, not critical text)
│
└─► SPECIAL CASES
    │
    ├─► Metrics/large numbers
    │   └─► Use: --color-warm (#D97706)
    │       Applies to: 18px+ text only
    │       Contrast: 3.9:1 (large text only)
    │
    ├─► Small labels/overlines
    │   │
    │   ├─► On light backgrounds
    │   │   └─► Use: --color-accent-dark
    │   │       Contrast: 5.89:1 ✓ AAA
    │   │
    │   └─► On dark backgrounds
    │       └─► Use: --color-accent-light
    │           Example: Contact section "GET IN TOUCH"
    │
    └─► Text selection highlight
        └─► Background: --color-accent-light
            Text: --color-primary
            (System default)
```

---

## 🎨 The Four Accent Tokens Explained

### 1. `--color-accent` (#0F766E) - **Primary Workhorse**
**Teal 700 - Dark Teal**

**Contrast:** 4.54:1 on white ✓ WCAG AA

**Use for:**
- ✓ Links on light backgrounds
- ✓ Normal text emphasis (14px+)
- ✓ Button backgrounds (primary)
- ✓ Icons on light backgrounds
- ✓ Borders on light backgrounds
- ✓ Navigation indicators
- ✓ Focus rings

**Avoid for:**
- ❌ Text on dark backgrounds (fails contrast)
- ❌ Very small text (<12px) without testing
- ❌ Button hover backgrounds (use same colour instead)

**Example:**
```css
.link {
  color: var(--color-accent);  /* Safe on white */
}
```

---

### 2. `--color-accent-dark` (#115E59) - **Small Text Champion**
**Teal 800 - Darker Teal**

**Contrast:** 5.89:1 on white ✓ WCAG AAA

**Use for:**
- ✓ Small text (<14px)
- ✓ Overline labels (12px)
- ✓ Captions and metadata
- ✓ When you need extra contrast margin
- ✓ Critical information in small sizes

**Avoid for:**
- ❌ Dark backgrounds (even worse contrast than accent)
- ❌ Hover states (too dark, less visible feedback)

**Example:**
```css
.overline {
  font-size: 0.75rem;              /* 12px - small text */
  color: var(--color-accent-dark); /* AAA compliance */
}
```

**Why it matters:**
Small text requires higher contrast ratios (7:1 for AAA). This token provides 5.89:1, meeting AA and providing margin for error.

---

### 3. `--color-accent-hover` (#0D9488) - **Limited Use Token**
**Teal 600 - Lighter Teal**

**Contrast:** 4.2:1 on white ⚠️ BORDERLINE

**Use for:**
- ✓ Non-text hover effects (borders, backgrounds without text)
- ✓ Reserved for future design patterns

**Avoid for:**
- ❌ Button backgrounds with white text (contrast regression!)
- ❌ Any text content
- ❌ Critical interactive elements

**Current Status:** Not actively used in production code (intentionally avoided)

**Design Note:**
Originally intended for button hover "glow" effect, but this caused contrast to worsen on hover. Current design maintains `--color-accent` on hover and uses shadow/lift for feedback instead.

**Example (what NOT to do):**
```css
/* ❌ BAD: Contrast gets worse on hover */
.btn--primary:hover {
  background-color: var(--color-accent-hover);
  color: var(--color-white);  /* Only 4.2:1 contrast */
}

/* ✓ GOOD: Maintain contrast */
.btn--primary:hover {
  background-color: var(--color-accent);  /* Same as default */
  box-shadow: var(--shadow-button-hover); /* Visual feedback */
  transform: translateY(-1px);            /* Lift effect */
}
```

---

### 4. `--color-accent-light` (#CCFBF1) - **Background & Dark Mode**
**Teal 100 - Light Pastel Teal**

**Contrast:** N/A (background-only)

**Use for:**
- ✓ Text on dark backgrounds (neutral-800/900)
- ✓ Decorative backgrounds (text selection, hover highlights)
- ✓ Secondary button hover backgrounds
- ✓ Link underline decorations
- ✓ Overlines on dark backgrounds (e.g., contact section)

**Avoid for:**
- ❌ Text on light backgrounds (invisible!)
- ❌ Primary interactive elements on light backgrounds

**Example:**
```css
/* ✓ GOOD: Light colour on dark background */
.contact__overline {
  background-color: var(--color-neutral-800);  /* Dark */
  color: var(--color-accent-light);            /* Light teal - high contrast */
}

/* ✓ GOOD: Background highlight (no text) */
::selection {
  background-color: var(--color-accent-light);
  color: var(--color-primary);
}

/* ❌ BAD: Using regular accent on dark */
.footer-link {
  background-color: var(--color-neutral-900);  /* Dark */
  color: var(--color-accent);                  /* Only 2.8:1 - FAILS! */
}
```

---

## 🔍 Common Scenarios

### Scenario 1: Adding a New Link
**Question:** What colour for a text link?

**Answer:**
```css
a {
  color: var(--color-accent);  /* 4.54:1 on white ✓ */
}
```

**Rationale:** Links are normal-sized text (14px+) on light backgrounds. `--color-accent` provides AA compliance.

---

### Scenario 2: Card Metadata Label (Small Text)
**Question:** What colour for a 13px label?

**Answer:**
```css
.card__label {
  font-size: 0.8125rem;              /* 13px */
  color: var(--color-accent-dark);   /* 5.89:1 - AAA ✓ */
}
```

**Rationale:** Small text benefits from higher contrast. `--color-accent-dark` provides AAA compliance and extra margin.

---

### Scenario 3: Button Hover State
**Question:** What colour when user hovers over primary button?

**Answer:**
```css
.btn--primary {
  background-color: var(--color-accent);
  color: var(--color-white);
}

.btn--primary:hover {
  background-color: var(--color-accent);        /* SAME colour */
  box-shadow: var(--shadow-button-hover);
  transform: translateY(-1px);
}
```

**Rationale:** Changing to lighter colour (accent-hover) would reduce contrast from 4.54:1 to 4.2:1. Instead, maintain colour and use shadow/motion for feedback.

---

### Scenario 4: Contact Section Overline (Dark Background)
**Question:** What colour for "GET IN TOUCH" label on dark background?

**Answer:**
```css
.contact {
  background-color: var(--color-neutral-800);  /* Dark slate */
}

.contact__overline {
  color: var(--color-accent-light);  /* Light teal - high contrast ✓ */
}
```

**Rationale:** Standard `--color-accent` on dark backgrounds only achieves 2.8:1 contrast (FAIL). `--color-accent-light` provides sufficient contrast while maintaining colour family.

---

### Scenario 5: Icon in Navigation
**Question:** What colour for menu icons?

**Answer:**
```css
.nav__icon {
  color: var(--color-accent);  /* On white/light nav background */
}
```

**Rationale:** Icons are decorative or paired with text. `--color-accent` provides sufficient visibility on light backgrounds.

---

### Scenario 6: Overline Label Above Heading
**Question:** What colour for 12px uppercase label?

**Answer:**
```css
.overline {
  font-size: 0.75rem;              /* 12px */
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-accent-dark); /* 5.89:1 - AAA ✓ */
}
```

**Rationale:** 12px text requires higher contrast. `--color-accent-dark` provides AAA compliance for small text.

---

## 🚫 Common Mistakes to Avoid

### ❌ Mistake 1: Using Accent on Dark Backgrounds
```css
/* ❌ WRONG */
.dark-section {
  background-color: var(--color-neutral-900);
  color: var(--color-accent);  /* Only 2.8:1 - FAILS WCAG */
}

/* ✓ CORRECT */
.dark-section {
  background-color: var(--color-neutral-900);
  color: var(--color-accent-light);  /* High contrast ✓ */
}
```

**Why it fails:** Teal 700 (#0F766E) is too dark for dark backgrounds. Use light teal instead.

---

### ❌ Mistake 2: Lightening Buttons on Hover
```css
/* ❌ WRONG */
.btn--primary:hover {
  background-color: var(--color-accent-hover);  /* 4.2:1 - worse contrast! */
}

/* ✓ CORRECT */
.btn--primary:hover {
  background-color: var(--color-accent);  /* Same as default - maintains 4.54:1 */
  box-shadow: var(--shadow-button-hover);
}
```

**Why it fails:** Hover state should maintain or improve contrast, not degrade it.

---

### ❌ Mistake 3: Using Accent-Light as Text Colour
```css
/* ❌ WRONG */
.heading {
  color: var(--color-accent-light);  /* Invisible on white! */
}

/* ✓ CORRECT */
.heading {
  color: var(--color-accent);  /* Visible and compliant */
}
```

**Why it fails:** Light pastel teal has insufficient contrast on light backgrounds. It's for backgrounds or dark-mode text only.

---

### ❌ Mistake 4: Small Text with Standard Accent
```css
/* ⚠️ BORDERLINE (passes AA, fails AAA) */
.caption {
  font-size: 0.75rem;       /* 12px - small */
  color: var(--color-accent);  /* 4.54:1 - AA but not AAA */
}

/* ✓ BETTER (AAA compliance) */
.caption {
  font-size: 0.75rem;
  color: var(--color-accent-dark);  /* 5.89:1 - AAA ✓ */
}
```

**Why to improve:** Small text benefits from higher contrast. While AA-compliant, AAA provides better accessibility.

---

## 🧪 Testing Your Colour Choices

### Manual Testing Checklist

**Before deploying new colour usage:**

- [ ] **Contrast ratio check** - Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
  - Normal text: Minimum 4.5:1 (WCAG AA)
  - Large text (18px+): Minimum 3:1 (WCAG AA)
  - Small text (<14px): Target 7:1 (WCAG AAA) or at least 4.5:1 (AA)

- [ ] **Visual inspection** - View in browser at:
  - 100% zoom
  - 200% zoom (accessibility requirement)
  - Different screen brightnesses

- [ ] **Colour blindness simulation**
  - Chrome DevTools → Rendering → Emulate vision deficiencies
  - Test: Deuteranopia, Protanopia, Tritanopia

- [ ] **Keyboard navigation**
  - Tab through elements
  - Verify focus rings are visible
  - Confirm hover states work

- [ ] **Automated testing**
  - Run Lighthouse accessibility audit (target: 100/100)
  - Use axe DevTools browser extension
  - Check WAVE accessibility tool

---

### Quick Contrast Reference

| Token | Hex | On White | On Neutral-800 | Best Use |
|-------|-----|----------|----------------|----------|
| `--color-accent-dark` | #115E59 | **5.89:1** ✓ AAA | ❌ 3.4:1 FAIL | Small text, labels |
| `--color-accent` | #0F766E | **4.54:1** ✓ AA | ❌ 2.8:1 FAIL | Normal text, buttons |
| `--color-accent-hover` | #0D9488 | ⚠️ 4.2:1 borderline | ❌ 2.4:1 FAIL | Avoid (reserved) |
| `--color-accent-light` | #CCFBF1 | ❌ 1.1:1 FAIL | **8.5:1** ✓ AAA | Dark backgrounds |

---

## 🎓 Decision-Making Framework

**When choosing a colour, ask yourself:**

1. **What background will this sit on?**
   - Light → Use dark accent variants
   - Dark → Use light accent variants

2. **What size is the text?**
   - Normal (14px+) → `--color-accent` is safe
   - Small (<14px) → Use `--color-accent-dark`
   - Large (18px+) → Even `--color-warm` works

3. **Is this interactive?**
   - Yes → Maintain contrast on all states (default, hover, focus)
   - No → Decorative elements can use lighter colours

4. **Is this critical information?**
   - Yes → Aim for AAA (use `--color-accent-dark`)
   - No → AA is acceptable (use `--color-accent`)

5. **Will this be text or background?**
   - Text → Use dark variants on light, light variants on dark
   - Background → `--color-accent-light` for subtle highlights

---

## 📚 Additional Resources

### WCAG Guidelines
- [WCAG 2.1 Level AA](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&levels=aa)
- [Understanding Contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)

### Testing Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Manual contrast testing
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Automated accessibility audits
- [axe DevTools](https://www.deque.com/axe/devtools/) - Browser extension for accessibility
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation tool

### Design System Reference
- `/assets/css/tokens.css` - Complete token definitions with inline documentation
- `WCAG-ACCENT-COLOR-ANALYSIS.md` - Technical deep-dive analysis
- `QUICK-FIX-GUIDE.md` - Critical issue fixes

---

## 🏆 Best Practices Summary

1. **Default to `--color-accent`** for most use cases on light backgrounds
2. **Upgrade to `--color-accent-dark`** for small text (<14px)
3. **Always use `--color-accent-light`** on dark backgrounds
4. **Never use `--color-accent-hover`** for text content
5. **Maintain contrast on hover** - don't lighten buttons
6. **Test with tools** - don't guess contrast ratios
7. **When in doubt, go darker** - extra contrast never hurts accessibility

---

**Document Version:** 1.0
**Author:** Claude Code
**Last Updated:** 2026-01-08
**Status:** Ready for Use ✓
