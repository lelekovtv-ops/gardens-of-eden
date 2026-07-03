# Gardens of Eden — presentation deck (agent guide)

> This file is auto-loaded by Claude Code (local, web, IDE) for anyone editing
> this repo. Two people collaborate here — **Alex** and a **partner** — both via
> Claude, against this shared GitHub repo. Follow these rules so neither of you
> breaks the live site or the other's work.

## What this is

A bilingual (RU/EN) client-facing **presentation deck** for the *Gardens of Eden
Phuket* content pitch (a video production studio, BPM Media, pitching a real
estate developer on Bang Tao). It is a slide deck: a fixed **left sidebar** (table
of contents) + a vertical stack of full-screen **slides** (`#s01`…`#s16`), with
keyboard navigation, a language switch and a currency switch.

- **Live:** https://lelekovtv-ops.github.io/gardens-of-eden/
- **Repo:** https://github.com/lelekovtv-ops/gardens-of-eden (GitHub Pages, branch `main`)
- Plain static **HTML/CSS/JS — no build step, no framework, no dependencies.**

## Files

| File | What it is |
|------|-----------|
| `index.html` | The deck markup — every slide, every text node carries a `data-i18n="key"` |
| `styles.css` | Design tokens (`:root`) + components. Palette = the film's **sage green `#5B6F5B`** + cream / brass / mango |
| `app.js` | The `I18N` dictionary (EN + RU), language + currency switch, sidebar/keyboard nav, the `[data-carousel]` pager |
| `assets/og.png` | 1200×630 link-preview image |
| `.nojekyll` | tells GitHub Pages to serve files as-is |

## Hard rules (do not break)

1. **Bilingual parity is mandatory.** Every `data-i18n` key used in `index.html`
   MUST exist in BOTH `I18N.en` and `I18N.ru` in `app.js`, with a non-empty value.
   A half-translated deck is a shippable-looking bug. **Before every commit that
   touches text, run the parity check** and fix anything it reports:

   ```bash
   node -e '
   const fs=require("fs");const src=fs.readFileSync("app.js","utf8");
   const I18N=eval("("+src.match(/var I18N = (\{[\s\S]*?\n  \});/)[1]+")");
   const en=Object.keys(I18N.en),ru=Object.keys(I18N.ru);
   const html=fs.readFileSync("index.html","utf8");
   const hk=[...new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map(x=>x[1]))];
   console.log("EN",en.length,"RU",ru.length);
   console.log("missing RU:",en.filter(k=>!(k in I18N.ru)).join(",")||"none");
   console.log("missing EN:",ru.filter(k=>!(k in I18N.en)).join(",")||"none");
   console.log("html key not in dict:",hk.filter(k=>!(k in I18N.en)).join(",")||"none");
   console.log("empty RU:",en.filter(k=>!String(I18N.ru[k]||"").trim()).join(",")||"none");
   '
   ```
   All four lists must read `none` and EN must equal RU.

2. **Static only.** No build tools, no npm packages, no frameworks. If a browser
   can't run it directly from the file, it doesn't belong here.

3. **Never hardcode colors** — use the CSS variables in `:root`. **No serif /
   italic display font** (looks generically AI). Weight contrast (300 vs 700) only.

4. **Keep the deck model.** A slide is a `<section class="slide" id="sNN">`. If you
   add a slide, also add its entry to the sidebar `#sideNav` (with its group) and
   update the total-count elements. Keyboard: **↑/↓ move between slides, ←/→ page
   the current slide's `[data-carousel]`** (concept pager), if it has one.

5. **Heavy video never goes in the repo.** Host it off-repo (Hetzner / a CDN) and
   embed with `<video src="https://…">`. Images go in `assets/`.

## Preview & deploy

```bash
# preview locally
python3 -m http.server 5173      # open http://localhost:5173

# deploy = merge/push to main; GitHub Pages rebuilds in ~1–2 min (sometimes slow).
# if it lags, force a build:
gh api -X POST repos/lelekovtv-ops/gardens-of-eden/pages/builds
```

Verify a deploy landed by curling the live URL for a marker you just added — do
not assume `git push` == live.

## Collaboration protocol (Alex ↔ partner)

You share one repo and one live site. To avoid collisions:

1. **Pull before you start:** `git fetch origin && git rebase origin/main` (or a
   plain `git pull`). Never start from a stale checkout.
2. **Work on your own branch:** name it `alex/<change>` or `<partner>/<change>`.
   Open a **Pull Request** into `main`; the other person (or you) merges it.
   `main` is what's live, so it stays clean and reviewable.
3. **Tiny coordinated edits may go straight to `main`** — but only if you pulled
   first AND the other person isn't editing the same file right now. When in
   doubt, use a branch + PR.
4. **Don't both edit `index.html` / `app.js` at the same time** without a heads-up
   — they're the two files everything touches.
5. **Run the parity check (rule 1) before every commit.** A broken commit on
   `main` deploys itself to the live site the client might be viewing.
6. Commit messages in **English**, present tense, one logical change each.

## Content still to fill (placeholders live today)

Roles + photos for Максим Капля / Александр Лелеков; concepts II & III;
package prices (`data-usd` / `data-rub`, currently `$—`); contact links
(WhatsApp / Telegram + a real email — currently `hello@example.com`); real
storyboard stills; and the 10-advantage figures should be cross-checked against
the developer's current brochure before showing a client.
