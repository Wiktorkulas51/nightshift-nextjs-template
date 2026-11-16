# Nightshift, Free Next.js Template

Risograph-poster landing for an AI engineer that works the night shift.

![Nightshift landing page preview](docs/preview.png)

**[Live demo](https://nightshift-nextjs-template.vercel.app)**

**[See it on onepaste, with the AI prompt that built it](https://onepaste.dev/templates/nightshift/?utm_source=github&utm_medium=readme&utm_campaign=nextjs-template-nightshift)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Wiktorkulas51/nightshift-nextjs-template)

Also available as an [Astro template](https://github.com/Wiktorkulas51/nightshift-astro-template).

More screens: [docs/screens/01.png](docs/screens/01.png), [docs/screens/02.png](docs/screens/02.png), [docs/screens/03.png](docs/screens/03.png)

## Features

- Riso-print colour palette with multiply-blended inks, paper grain and a halftone accent
- Hero with a live shift countdown, a misregistered logo mark and a moon that shifts with the pointer
- Scroll-driven "One night" timeline from 22:00 to 07:00, with the city lights coming on near the end
- Interactive shift report (receipt) that updates the detail panel on hover, focus or click
- House rules section and a pricing table with a monthly / yearly switch and animated price changes
- Quote block, final call to action with an email form, and a footer
- Animated navigation with a hover indicator
- Sliding "plate" buttons that move on hover and press
- Respects `prefers-reduced-motion` (animations and smooth scrolling are turned off)
- Static export: plain HTML, CSS and one client bundle, no backend, no API, no environment variables

## Stack

- [Next.js 16](https://nextjs.org) with the App Router (static export)
- [React 19](https://react.dev) for the interactive sections
- [Tailwind CSS 4](https://tailwindcss.com) through `@tailwindcss/postcss`
- [Motion](https://motion.dev) for animations
- TypeScript

The template uses no images. The city skyline, stars, moon and logo are drawn with SVG and CSS.

## Getting started

Requires Node.js 20.9.0 or newer (Next.js 16 requirement).

```bash
npm install
npm run dev
npm run build
```

- `npm run dev` starts the dev server at http://localhost:3000
- `npm run build` writes the static site to `out/`
- To preview the built site, serve the `out/` folder with any static file server (`next start` does not work with `output: "export"`)

## Project structure

```text
.
├── app/
│   ├── globals.css            Tailwind import and base cursor rules
│   ├── layout.tsx             HTML head, title, meta description, favicon
│   └── page.tsx               The landing page (renders Nightshift)
├── components/
│   ├── Nightshift.tsx         Page wrapper, colour tokens and all custom CSS
│   ├── Hero.tsx               Navigation, hero, countdown
│   ├── Night.tsx              Scroll-driven 22:00 to 07:00 timeline
│   ├── Receipt.tsx            Shift report
│   ├── Closing.tsx            House rules, pricing, quote, final CTA, footer
│   └── primitives.tsx         Shared pieces: logo mark, buttons, skyline, stars
├── docs/                      Screenshots used in this README
├── public/
│   └── favicon.svg            Favicon (replace with your own mark)
├── next.config.ts
└── package.json
```

## Where to edit

- **Page title and description:** `app/layout.tsx`
- **Colours and custom effects (ink, paper, hover shadows, grain):** the `CSS` string in `components/Nightshift.tsx`
- **Navigation links:** `LINKS` in `components/Hero.tsx`
- **Headline:** `HEADLINE` in `components/Hero.tsx`
- **Hero copy and buttons:** the JSX in `components/Hero.tsx`
- **Timeline steps and hour labels:** `STEPS` and `HOURS` in `components/Night.tsx`
- **Shift report lines:** `LINES` in `components/Receipt.tsx`
- **House rules:** `RULES` in `components/Closing.tsx`
- **Pricing plans and prices:** `PLANS` in `components/Closing.tsx`
- **Footer columns:** `FOOTER_LINKS` in `components/Closing.tsx`
- **Logo mark:** `Mark` in `components/primitives.tsx`, and `public/favicon.svg`

The email form in the final call to action only validates the address and shows a confirmation message. It does not send anything. Connect it to your own backend or form service before you use it in production.

## Deploy

The site is a static export, so it runs on any static host. To deploy on Vercel, import the repository in the Vercel dashboard (the Next.js preset is detected automatically) or use the button at the top of this README.

## Get the AI prompt behind this template

This template was built from a single copy-paste AI prompt on onepaste. More animated landing pages with prompts are on [onepaste.dev](https://onepaste.dev/?utm_source=github&utm_medium=readme&utm_campaign=nextjs-template-nightshift).

## Need a custom website?

WebScale builds custom websites and landing pages: [webscale.pl](https://webscale.pl/en/?utm_source=github&utm_medium=readme&utm_campaign=nextjs-template-nightshift).

## License

MIT, see [LICENSE](LICENSE).
