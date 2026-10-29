# meow-portfolio

Ave Goutham the sad soul

# Pixel Goutham | Personal Portfolio & Developer OS (`pixelgoutham.tech`)

An editorial, Swiss-brutalist personal brand portfolio and developer workspace built from scratch for **Terra Week 1** (Hack Club). Designed with high-contrast typography, exposed hairline grids, and a production-grade component architecture.

---

## Tech Stack

* **Framework:** React 19 with Vite & TypeScript
* **Styling:** Tailwind CSS (v4) with custom Swiss grid utilities
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Deployment:** Vercel

---

## Features & Architecture

* **Editorial Hero Section (`Hero.tsx`):** Features a massive background watermark, custom cutout portrait layer (`potrait.png`), interactive live preview card for **PixelFocus**, and a dark-styled `Let's Talk` action card framed within a Swiss crosshair grid.
* **Impact Bento Grid (`ImpactBento.tsx`):** Asymmetric metrics block highlighting v2.2 MS Store release, 94% board exam score, teaching track, and an interactive builder philosophy inspector.
* **Shipped Projects Showcase (`ProjectShowcase.tsx`):** Deep-dive portfolio grid featuring live category filtering (`DESKTOP`, `AI & IPC`, `SYSTEMS & WEB`) and a 3-mode inspector (`01 Why I Built It`, `02 Architecture`, `03 Reality Check`) for projects like *PixelFocus*, *Pixel Flow*, *PixelVision*, and *scrcpy*.
* **The Builder Logs (`DevlogReader.tsx`):** A split-pane storytelling reader containing 6 unfiltered field notes and architectural post-mortems (Microsoft Store launch lessons, Hacktoberfest Bengaluru finals, Electron IPC, and JEE bandwidth management).
* **Swiss Brutalist Contact Section (`ContactSection.tsx`):** Minimalist layout paired with a 2x2 metadata grid (Mysuru location, active schedule), a live ticking IST clock, an interactive inquiry form, and a massive brand wordmark footer.
* **Interactive CLI Terminal Drawer (`CommandDrawer.tsx`):** Accessible via the top navigation or a global `Ctrl + K` shortcut, featuring directory navigation and a fully interactive terminal prompt supporting commands (`whoami`, `specs`, `projects`, `jee`, `contact`, `clear`).

---

## Project Structure

```text
pixelgoutham-web/
├── public/
│   ├── potrait.png
│   └── meow.png
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── SwissGridOverlay.tsx
│   │   ├── ImpactBento.tsx
│   │   ├── ProjectShowcase.tsx
│   │   ├── DevLogReader.tsx
│   │   ├── ContactSection.tsx
│   │   └── CommandDrawer.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.ts
