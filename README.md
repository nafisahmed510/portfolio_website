# nafisahmed.space

Personal site for Nafis Ahmed — CS and Risk Management student at St. John's University,
working at the seam between software engineering and data.

Live at **[nafisahmed.space](https://www.nafisahmed.space)**.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · React Router
Deployed on Netlify.

## Structure

```
src/
  components/   AnimatedSection, AvatarCave, Footer, LetterLoader,
                Monogram, Navigation, ReconciliationDiagram, SkillsGrid
  pages/        HomePage, WorkPage, AboutPage, NotFoundPage
public/         images, favicon, og-image, _redirects
```

`public/_redirects` holds the SPA rewrite (`/* /index.html 200`) so deep links
like `/work` resolve on Netlify rather than 404ing.

## Notes on a few decisions

**The loader.** A single glyph cycles through Bengali and Latin characters and
settles on the H the hero opens with, standing in exactly the position the
headline will occupy. It is timed by wall clock with a hard timeout and a skip
control, and bails out immediately when the tab is hidden or the visitor prefers
reduced motion.

**Animations never gate visibility.** Entrance animations that start at
`opacity: 0` are a trap: `animate` runs on requestAnimationFrame and
`whileInView` on IntersectionObserver, and neither is delivered to a background
tab — which is how a recruiter opens a link. The site was once entirely blank
there. `AnimatedSection` is now the only reveal mechanism and renders content
outright when the tab is hidden. Do not reintroduce per-element opacity gates.

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

Nafis Ahmed — [nafisahmed.space](https://www.nafisahmed.space) ·
[github.com/nafisahmed510](https://github.com/nafisahmed510) ·
[linkedin.com/in/nafisahmed510](https://linkedin.com/in/nafisahmed510)

## License

MIT
