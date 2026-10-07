# Fermor homepage

A homepage for Fermor, a personal finance app that helps people track spending, plan their growth and set goals.
Built with Next.js (App Router) and plain CSS. No UI or animation libraries.

**Live site:** _add your Vercel link here_

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. To check the production build, run `npm run build && npm start`.

## Deploy

Push the repo to GitHub, import it on Vercel and deploy. No environment variables are needed.

## Structure

```
app/            layout (fonts, metadata), page, global CSS
components/     one component per section: Navbar, Hero, WhatWeDo, Forecast,
                Investments, Cta, News, Faq, Footer, plus a shared Slider
public/images/  product screens used in the page
```

## Decisions

_Rewrite these in your own words before you submit. These are starting points._

- **Page order.** The hero says what Fermor is, "What we do" shows the three core jobs (track, plan, set goals), forecasting and investments show where it leads, then a call to action, news and FAQ.
- **Colour.** Navy about 60%, white about 30%, gray about 10%, with one soft blue accent for charts and highlights.
- **Type.** Sora for headings, Inter for body text, both loaded with `next/font`.
- **Plain CSS.** One stylesheet with CSS variables for colour. The layout uses grid and flexbox with a mobile breakpoint.
- **No libraries for interaction.** The sliders, news scroller and FAQ accordion use React state. Nav links use CSS smooth scrolling with `scroll-padding-top` so the sticky header doesn't cover section titles.
- **Accessibility.** Buttons have labels, the accordion uses `aria-expanded`, focus is visible, and motion is reduced when the user asks for it.
- **Responsive.** Two-column layouts stack on small screens, and the nav links collapse to the logo and Sign in button.

## Known gaps

- Copy, figures and news items are placeholders.
- There is no mobile menu yet, so on small screens the section links are hidden.
