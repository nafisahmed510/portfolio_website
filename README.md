# nofishy.space

Personal site for Nafis Ahmed — CS and Risk Management student at St. John's University,
working at the seam between software engineering and data.

Live at **[nofishy.space](https://www.nofishy.space)**.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · React Router
Deployed on Netlify.

## Structure

```
src/
  components/   AnimatedSection, BengaliMatrixLoader, Footer,
                Navigation, ReconciliationDiagram, SkillsGrid, TypewriterText
  pages/        HomePage, WorkPage, AboutPage, NotFoundPage
public/         images, favicon, og-image, _redirects
```

`public/_redirects` holds the SPA rewrite (`/* /index.html 200`) so deep links
like `/work` resolve on Netlify rather than 404ing.

## Notes on a few decisions

**The loader.** The Bengali Matrix intro is timed by wall clock, not frame count,
and has a hard timeout plus a skip control. Browsers throttle
`requestAnimationFrame` in background tabs, and a frame-counted animation there
never finishes — which left the whole site on a black screen for anyone who
opened it in a background tab. It also bails out immediately when the tab is
hidden or the visitor prefers reduced motion.

**Fonts.** Noto Sans Bengali is loaded once via `<link>` in `index.html`. It must
not also be declared in `@font-face` with a `src` pointing at a Google Fonts
stylesheet URL — that URL returns CSS, not a font binary, and the browser fails
to decode it on every page load.

**Skill tooltips.** Rendered only while active. Kept mounted at `opacity: 0` they
still occupied layout and pushed the page wider than the viewport on mobile.

## Development

```bash
npm install
npm run dev      # dev server
npm run build    # production build to dist/
npm run preview  # serve the built output
npm run lint
```

## Author

Nafis Ahmed — [nofishy.space](https://www.nofishy.space) ·
[github.com/nafisahmed510](https://github.com/nafisahmed510) ·
[linkedin.com/in/nafisahmed510](https://linkedin.com/in/nafisahmed510)

## License

MIT
