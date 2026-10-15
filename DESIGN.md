# CyberShield AI — UI/UX Design System Specification 🛡️

> **Theme**: Clinical White Base · Regal Maroon Accents · Obsidian Black Typography  
> **Target Audience**: Cybersecurity teams, moderators, educators, and end users seeking automated toxicity protection.  
> **Design Philosophy**: High-trust, clinical defense interface combining the clarity of pure white surfaces, the authority of deep maroon accents, and high-legibility obsidian typography.

---

## 1. Brand Identity & Design Principles

| Principle | Description |
| :--- | :--- |
| **Trust & Authority** | A clean white background inspires transparency, while deep maroon evokes protection, precision, and security alertness. |
| **Zero Clutter** | Generous white space (margins, padding) keeps attention focused on text analysis and actionable security verdicts. |
| **High Contrast & Accessibility** | All text satisfies WCAG AAA / AA contrast ratios against pure white and off-white cards. |
| **Crisp Micro-Interactions** | Tactile card elevations, maroon focus rings, smooth gradient fills, and subtle badge highlights. |

---

## 2. Color Palette & Design Tokens

### 2.1 Core Palette

```
White (Background)        Maroon (Brand & Accent)        Obsidian (Text & Contrast)
#FFFFFF / #F9F9FB        #800020 / #9B1135             #0B0B0C / #27272A
┌──────────────────────┐ ┌──────────────────────┐      ┌──────────────────────┐
│                      │ │                      │      │                      │
│   Clinical Canvas    │ │  Security Accent     │      │  High-Impact Copy    │
│                      │ │                      │      │                      │
└──────────────────────┘ └──────────────────────┘      └──────────────────────┘
```

### 2.2 Color Tokens & Functional Roles

| Token Name | Hex Value | RGB / HSL | Usage Role | Contrast Ratio vs #FFF |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-main` | `#FFFFFF` | `rgb(255, 255, 255)` | Main page canvas background | 1.0 : 1 |
| `--bg-surface` | `#F8F9FA` | `rgb(248, 249, 250)` | Secondary background & hero wrapper | 1.05 : 1 |
| `--bg-card` | `#FFFFFF` | `rgb(255, 255, 255)` | Component cards, panels, modals | 1.0 : 1 |
| `--maroon-primary` | `#800020` | `hsl(345, 100%, 25%)` | Primary brand accent, main buttons, gauges | **9.39 : 1 (AAA)** |
| `--maroon-deep` | `#580015` | `hsl(346, 100%, 17%)` | Hover states, active buttons, headings | **13.5 : 1 (AAA)** |
| `--maroon-vibrant` | `#9B1135` | `hsl(344, 80%, 34%)` | Gradients, primary highlights, alerts | **6.67 : 1 (AAA)** |
| `--maroon-tint` | `#FDF2F4` | `rgb(253, 242, 244)` | Light background for tags, pills, alerts | 1.08 : 1 |
| `--maroon-border` | `rgba(128, 0, 32, 0.15)` | — | Borders for maroon cards and inputs | — |
| `--text-black` | `#0B0B0C` | `rgb(11, 11, 12)` | Main headings (H1, H2, H3), brand title | **19.8 : 1 (AAA)** |
| `--text-body` | `#27272A` | `rgb(39, 39, 42)` | Body copy, table cells, form labels | **13.8 : 1 (AAA)** |
| `--text-muted` | `#64748B` | `rgb(100, 116, 139)` | Subtitles, timestamps, placeholders | **4.63 : 1 (AA)** |
| `--border-subtle` | `#E2E8F0` | `rgb(226, 232, 240)` | Card borders, table dividers, input borders | — |
| `--border-focus` | `#800020` | `rgb(128, 0, 32)` | Input active focus ring | — |

### 2.3 Status & Severity Palette

| Severity | Color | Hex Code | Background Tint | Meaning |
| :--- | :--- | :--- | :--- | :--- |
| **Safe / Clean** | Emerald | `#059669` | `#ECFDF5` | No toxicity detected, friendly tone |
| **Low Risk** | Teal/Navy | `#0284C7` | `#F0F9FF` | Minor slang or borderline emphasis |
| **Medium Risk** | Amber | `#D97706` | `#FFFBEB` | Harsh language, disrespectful tone |
| **High Severity** | Maroon / Red | `#800020` | `#FDF2F4` | Severe bullying, threats, abusive content |

---

## 3. Typography Hierarchy

### 3.1 Font Families
- **Display / Headings**: `'Sora'`, -apple-system, sans-serif *(Geometric, modern, authoritative)*
- **Body & Controls**: `'Inter'`, -apple-system, sans-serif *(High legibility at any DPI)*
- **Metrics & Code**: `'JetBrains Mono'`, monospace *(Numeric scores, percentages, tokens)*

### 3.2 Type Scale

| Element | Font Family | Size | Weight | Line Height | Color |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `Sora` | `2.75rem` (44px) | 800 (ExtraBold) | 1.15 | `#0B0B0C` + Maroon Gradient |
| **Section H2** | `Sora` | `1.85rem` (30px) | 700 (Bold) | 1.25 | `#0B0B0C` |
| **Card Title H3** | `Sora` | `1.25rem` (20px) | 600 (SemiBold) | 1.35 | `#0B0B0C` |
| **Body Large** | `Inter` | `1.125rem` (18px) | 400 (Regular) | 1.6 | `#27272A` |
| **Body Regular** | `Inter` | `0.95rem` (15px) | 400 / 500 | 1.5 | `#27272A` |
| **Caption / Meta** | `Inter` | `0.85rem` (13.6px) | 500 (Medium) | 1.4 | `#64748B` |
| **KPI Metric** | `Sora` | `2.25rem` (36px) | 700 (Bold) | 1.0 | `#800020` |

---

## 4. Surfaces, Elevation & Shadows

Clean white layouts rely on refined shadows and crisp borders rather than dark backgrounds to establish hierarchy:

```css
/* Surface Elevation Tokens */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 16px -2px rgba(128, 0, 32, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04);
--shadow-lg: 0 12px 32px -4px rgba(128, 0, 32, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03);
--shadow-focus: 0 0 0 3px rgba(128, 0, 32, 0.18);
```

- **Cards**: Pure white background (`#FFFFFF`), `1px solid #E2E8F0`, rounded corners (`16px`), `--shadow-md`.
- **Card Hover**: Translates `-3px` upward with `--shadow-lg` and border highlighting `rgba(128, 0, 32, 0.3)`.

---

## 5. Component Specifications

### 5.1 Navigation Bar
- **Background**: Translucent frosted white (`rgba(255, 255, 255, 0.92)` with `backdrop-filter: blur(12px)`).
- **Border**: Bottom border `1px solid #E2E8F0`.
- **Brand Logo**: Shield emoji 🛡️ + `CyberShield` in Obsidian (`#0B0B0C`) with `AI` highlighted in vibrant Maroon (`#800020`).
- **Links**: Obsidian text with subtle maroon underline hover transition.
- **Active Tab**: Bold text with solid maroon pill indicator or underbar.

### 5.2 Hero Section
- **Pill Badge**: Maroon tint background (`#FDF2F4`), maroon text (`#800020`), border `1px solid rgba(128, 0, 32, 0.2)`.
- **Headline**: "Stop Cyberbullying Before It Spreads" with gradient text transitioning from `#0B0B0C` (Black) to `#800020` (Deep Maroon).
- **Subtitle**: Neutral slate (`#64748B`) with max-width for effortless reading.

### 5.3 Buttons & Actions
- **Primary Button**:
  - Background: Gradient `linear-gradient(135deg, #800020 0%, #9B1135 100%)`.
  - Color: `#FFFFFF` (White text).
  - Shadow: `0 6px 20px rgba(128, 0, 32, 0.28)`.
  - Hover: `linear-gradient(135deg, #580015 0%, #800020 100%)`, translateY(-2px).
- **Secondary / Ghost Button**:
  - Background: `#FFFFFF`.
  - Border: `1.5px solid #E2E8F0`.
  - Color: `#0B0B0C`.
  - Hover: Border color `#800020`, color `#800020`, background `#FDF2F4`.

### 5.4 Textarea & Input Controls
- **Background**: `#FFFFFF`.
- **Border**: `1.5px solid #E2E8F0`.
- **Corner Radius**: `12px`.
- **Focus State**: Border `#800020`, outer glow `0 0 0 3px rgba(128, 0, 32, 0.15)`.
- **Quick Sample Chips**: Soft white surface with `#E2E8F0` border; hover fills with `#FDF2F4` and maroon text.

### 5.5 Results & Threat Gauge
- **Circular Gauge**:
  - Center: White circle displaying the toxicity percentage in bold `Sora` font.
  - Ring Track: Soft light gray (`#F1F5F9`).
  - Active Ring: Dynamic gradient transitioning to Maroon (`#800020`) for high severity.
- **Severity Badges**:
  - High: Deep Maroon text on `#FDF2F4` background with `1px solid rgba(128, 0, 32, 0.3)`.
  - Low/None: Emerald text on `#ECFDF5`.
- **Highlighted Trigger Words (`<mark>`)**:
  - Background: `rgba(128, 0, 32, 0.12)`.
  - Text Color: `#800020`.
  - Border Bottom: `2px solid #800020`.
  - Font Weight: `600`.

### 5.6 Safer Alternative Card
- **Background**: Soft clean tint `#F8FAFC` or delicate emerald/maroon tint.
- **Border**: Left accent border `4px solid #059669` (Safe rewrite) or `#800020`.
- **Icon**: ✨ in gold or maroon.
- **Copy Button**: Quick one-click copy with feedback state.

### 5.7 Analytics & Charts (Dashboard)
- **KPI Cards**: White surface, top accent bar in Maroon (`#800020`), bold black counters.
- **Chart.js Colors**:
  - Line 1 (Total Scanned): Obsidian Black (`#18181B`) with soft gray fill.
  - Line 2 (Harmful): Primary Maroon (`#800020`) with light maroon fill gradient.
  - Doughnut Categories: Maroon (`#800020`), Dark Crimson (`#9B1135`), Charcoal (`#27272A`), Amber (`#D97706`), Emerald (`#059669`).

---

## 6. Complete CSS Implementation Template

This CSS snippet can be applied directly to `static/css/style.css` to activate the White + Maroon + Black theme:

```css
/* ==========================================================================
   CyberShield AI — White, Maroon & Obsidian Design Theme
   ========================================================================== */

:root {
  /* Color Tokens */
  --bg-main: #FFFFFF;
  --bg-surface: #F8F9FA;
  --bg-card: #FFFFFF;
  
  --maroon: #800020;
  --maroon-dark: #580015;
  --maroon-light: #9B1135;
  --maroon-tint: #FDF2F4;
  --maroon-border: rgba(128, 0, 32, 0.2);

  --text-main: #0B0B0C;
  --text-body: #27272A;
  --text-muted: #64748B;
  
  --border: #E2E8F0;
  --border-focus: #800020;
  
  --ok: #059669;
  --ok-bg: #ECFDF5;
  --warn: #D97706;
  --warn-bg: #FFFBEB;
  --bad: #800020;
  --bad-bg: #FDF2F4;

  /* Elevation Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-card: 0 4px 18px -2px rgba(128, 0, 32, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04);
  --shadow-hover: 0 10px 28px -4px rgba(128, 0, 32, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.04);
}

/* Base Styles */
* { box-sizing: border-box; margin: 0; }
body {
  font-family: 'Inter', -apple-system, sans-serif;
  background: var(--bg-main);
  color: var(--text-body);
  min-height: 100vh;
  overflow-x: hidden;
}

h1, h2, h3 {
  font-family: 'Sora', sans-serif;
  color: var(--text-main);
}

/* Ambient Subtle Lighting */
.glow {
  position: fixed;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.12;
  z-index: -1;
}
.g1 { background: var(--maroon); top: -180px; left: -100px; }
.g2 { background: var(--maroon-light); bottom: -180px; right: -100px; }

/* Navigation */
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 6%;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}
.brand {
  color: var(--text-main);
  text-decoration: none;
  font-family: 'Sora', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
}
.brand b { color: var(--maroon); }
.links a {
  color: var(--text-muted);
  text-decoration: none;
  margin: 0 16px;
  font-weight: 500;
  transition: color 0.2s;
}
.links a:hover, .links a.active {
  color: var(--maroon);
  font-weight: 600;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 80px 5% 50px;
  max-width: 880px;
  margin: auto;
}
.pill {
  display: inline-block;
  padding: 6px 16px;
  border: 1px solid var(--maroon-border);
  border-radius: 99px;
  color: var(--maroon);
  font-size: 0.85rem;
  font-weight: 600;
  background: var(--maroon-tint);
}
.hero h1 {
  font-size: clamp(2.3rem, 5.5vw, 3.8rem);
  line-height: 1.15;
  margin: 20px 0;
  letter-spacing: -0.02em;
}
.grad {
  background: linear-gradient(135deg, var(--text-main) 30%, var(--maroon) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.sub {
  color: var(--text-muted);
  font-size: 1.125rem;
  max-width: 620px;
  margin: auto;
  line-height: 1.6;
}

/* Buttons */
.btn {
  padding: 12px 26px;
  border-radius: 12px;
  border: 1.5px solid var(--border);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  color: var(--text-main);
  background: #FFFFFF;
}
.btn.primary {
  background: linear-gradient(135deg, var(--maroon) 0%, var(--maroon-light) 100%);
  border: none;
  color: #FFFFFF;
  box-shadow: 0 6px 22px rgba(128, 0, 32, 0.28);
}
.btn.primary:hover {
  background: linear-gradient(135deg, var(--maroon-dark) 0%, var(--maroon) 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 26px rgba(128, 0, 32, 0.35);
}
.btn.ghost:hover {
  border-color: var(--maroon);
  color: var(--maroon);
  background: var(--maroon-tint);
  transform: translateY(-2px);
}

/* Cards & Layout */
.section { padding: 40px 6%; max-width: 1140px; margin: auto; }
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 26px;
  box-shadow: var(--shadow-card);
  margin-bottom: 20px;
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}
.card:hover {
  border-color: rgba(128, 0, 32, 0.2);
  box-shadow: var(--shadow-hover);
}

/* Form Controls */
textarea {
  width: 100%;
  min-height: 140px;
  background: #FFFFFF;
  border: 1.5px solid var(--border);
  border-radius: 14px;
  padding: 16px;
  color: var(--text-main);
  font: inherit;
  resize: vertical;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
textarea:focus {
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(128, 0, 32, 0.15);
}

/* Threat Highlights & Rewrites */
mark {
  background: rgba(128, 0, 32, 0.12);
  color: var(--maroon);
  padding: 2px 7px;
  border-radius: 6px;
  font-weight: 600;
  border-bottom: 2px solid var(--maroon);
}
.safe-card {
  border-left: 5px solid var(--ok);
  background: #FAFCF9;
}
```

---

## 7. Responsive Breakpoints

| Breakpoint | Target Screen | Adjustments |
| :--- | :--- | :--- |
| **Mobile (`< 640px`)** | Smart Phones | Single-column grids (`grid2`, `grid3`, `grid4`), compact nav links, 18px padding. |
| **Tablet (`640px - 1024px`)** | iPads, Tablets | 2-column analyzer grid, stacked trend and category charts. |
| **Desktop (`> 1024px`)** | Laptops, Monitors | Full multi-column dashboard, side-by-side gauge and scores, maximum 1140px containment. |

---

## 8. Summary Checklist for Frontend Implementation

- [x] Primary canvas set to crisp `#FFFFFF` and `#F8F9FA`.
- [x] Primary brand accent configured to deep royal Maroon (`#800020` & `#9B1135`).
- [x] Typography anchored by Obsidian Black (`#0B0B0C` headings, `#27272A` body).
- [x] All interactive buttons styled with maroon gradients, subtle shadows, and crisp hover elevations.
- [x] All cards styled with clean `#FFFFFF` surface, `#E2E8F0` border, and soft maroon shadow.
- [x] Harmful trigger words highlighted with soft maroon tint and underline.
- [x] Analytics KPIs accented with maroon counters and obsidian sub-labels.
