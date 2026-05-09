# Parth Joshi — Web Resume

A production-grade personal web resume built as a Single Page Application (SPA). Designed to express the work expereince details in a webpage mode with a polished UI, smooth animations, and comprehensive professional content.

---

## Live Demo

> Deployed via GitHub Pages — `npm run deploy` publishes the `/dist` build to the `gh-pages` branch.

Link: https://parthjoshi-2024.github.io/web-resume-parth-joshi/

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3.4 |
| Icons | react-icons (Feather set — `Fi` prefix) |
| CSS Processing | PostCSS + Autoprefixer |
| Deployment | GitHub Pages via `gh-pages` |

---

## Features

- **Scroll Progress Bar** — thin cyan indicator at the top of the viewport
- **Scroll Reveal Animations** — fade + slide + blur via `IntersectionObserver`
- **Hero CountUp Stats** — animated number counters triggered on scroll into view
- **Active Nav Tracking** — highlights the correct nav link as you scroll through sections
- **Back to Top Button** — appears after scrolling 400px, smooth-scrolls to top
- **Responsive** — fully optimised for mobile, tablet, and desktop
- **Downloadable Resume** — direct PDF download from the navbar and hero CTA
- **Keyboard Accessible** — semantic HTML, proper ARIA labels

---

## Project Structure

```
WebResume/
├── public/
│   └── Parth_Joshi_Resume_May_2026.pdf     # Downloadable resume PDF
├── src/
│   ├── App.tsx                              # All data, hooks, components, and JSX
│   ├── index.css                            # Global styles + keyframe animations
│   └── main.tsx                             # React entry point
├── index.html                               # HTML shell, meta tags, anti-FOUC script
├── tailwind.config.ts                       # Tailwind config (dark mode, custom colours)
├── postcss.config.js                        # PostCSS config
├── tsconfig.json                            # TypeScript config
├── vite.config.ts                           # Vite config
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
git clone https://github.com/ParthJoshi-2024/web-resume.git
cd WebResume
npm install
```

### Development

```bash
npm run dev
```

Opens the dev server at `http://localhost:5173` with Hot Module Replacement.

### Production Build

```bash
npm run build
```

Runs TypeScript type-check (`tsc`) then bundles with Vite. Output goes to `/dist`.

### Preview Production Build Locally

```bash
npm run preview
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

Builds the project and publishes `/dist` to the `gh-pages` branch via the `gh-pages` package.

---

## Page Sections

| Section | Description |
|---|---|
| **Hero** | Name, role pills, summary, animated stats, CTA buttons, contact card |
| **Experience** | Timeline with role, company, overview, and achievement bullets |
| **Projects** | Personal projects (QueryAI, Pharmacy E-Commerce) + 3 GT enterprise projects |
| **Technical Skills** | Row-based layout across 7 categories including AI Engineering, Frontend, Backend, DevOps |
| **Key Achievements** | 8 metric-driven achievement cards |
| **Certifications** | 2-column grid of 10 certifications |
| **Education** | Compact horizontal card with degree, institution, and GPA |
| **Contact** | Availability statement + contact details + social links |

---

## Customisation

All content is defined as plain TypeScript constants at the top of `src/App.tsx`. No config files, no CMS — just edit the data directly.

| To change | Edit in `App.tsx` |
|---|---|
| Personal info | `profile` object |
| Nav links | `navLinks` array |
| Hero stats | `heroStats` array |
| Skills | `skills` array |
| Work experience | `experience` array |
| Personal projects | `aiProject`, `pharmacyProject` objects |
| Enterprise projects | `workProjects` array |
| Achievements | `achievements` array |
| Certifications | `certifications` array |
| Education | `education` object |
| Resume PDF path | `resumeUrl` constant |

To change the colour palette, edit `tailwind.config.ts` → `theme.extend.colors`.

---

## Architecture Notes

- **Single-file design** — all components, hooks, and data live in `src/App.tsx` for simplicity and interview readiness
- **No Redux, no router** — plain React state (`useState`, `useEffect`) is sufficient for a single-page resume
- **Animation layers** — hero entrance (CSS keyframes), scroll reveals (`IntersectionObserver`), skill rows (CSS keyframes with staggered delay), CountUp (`requestAnimationFrame`)
- **Light mode** — clean light theme using Tailwind CSS utility classes throughout

---

## Dependencies

### Runtime
```
react                 ^18.2.0
react-dom             ^18.2.0
react-icons           ^4.11.0
```

### Dev
```
@vitejs/plugin-react  ^4.3.1
autoprefixer          ^10.4.19
gh-pages              ^5.0.0
postcss               ^8.4.43
tailwindcss           ^3.4.5
typescript            ^5.6.2
vite                  ^5.4.1
```

---

## License

This project is personal and not licensed for redistribution. All content (text, projects, achievements) belongs to Parth Joshi.

---

*Built with React + TypeScript + Vite + Tailwind CSS*
