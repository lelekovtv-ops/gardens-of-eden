# Campaign proposal site

A bilingual (RU/EN), client-facing presentation site for a video advertising
campaign — a brand film, a showroom reel and 20-second ad spots. It works as
both a guided pitch (scroll it top to bottom) and a project hub (jump to any
section). Plain HTML/CSS/JS, no build step.

**Live:** https://lelekovtv-ops.github.io/gardens-of-eden/

## Information architecture

Presentation deck: fixed left sidebar (table of contents) + 15 full-screen
slides (`#s01`…`#s15`), keyboard navigation (↑ ↓ Space Home End), slide
counter and progress bar. Groups:

| Group | Slides |
|-------|--------|
| Introduction | 01 Title · 02 About us (Maxim Kaplya, Alexander Lelekov) · 03 How we see content |
| Concepts | 04 Concept I "Grand Budapest on Bang Tao" (approved) · 05 Concept II · 06 Concept III |
| Content system | 07 Content map (4 tracks) · 08 Brand film & showroom · 09 YouTube · 10 Reels · 11 VSL · 12 Sales training · 13 Sales & the site |
| Closing | 14 Packages · 15 Next step |

## Files

| File | Purpose |
|------|---------|
| `index.html` | All sections; every text node carries a `data-i18n` key |
| `styles.css` | Design tokens + components + responsive |
| `app.js` | i18n (RU/EN dictionary), currency swap, sticky nav, active-section, reveals |
| `assets/og.png` | 1200×630 link-preview image (regenerate with a real frame later) |
| `.nojekyll` | Serve files as-is on GitHub Pages |

## Bilingual (RU/EN)

Both languages live in the `I18N` dictionary in `app.js` and must stay in sync
(same key set, no empty values). The switcher persists the choice in
`localStorage` and defaults from the browser language.

## Adding content later

- **Images:** into `assets/`, referenced with `<img>`.
- **Video:** host heavy files OFF the repo (Hetzner / CDN) and embed with
  `<video src="https://…/clip.mp4" …>`. The hero, each deliverable, and the
  showreel are all wired for a `<video>` drop-in (see comments in `index.html`).
- **Real numbers / names:** update the tier prices (`data-usd` / `data-rub`),
  team names, client logos, and contact links — all placeholders today.

## Local preview

```bash
python3 -m http.server 5173   # then open http://localhost:5173
```

## Deploy

GitHub Pages from `main`. Every `git push` updates the live site within ~1 min.
