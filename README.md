# Gardens of Eden — presentation site

A clean, static presentation site for showing the project to a client online.
Plain HTML/CSS/JS — no build step.

**Live:** https://lelekovtv-ops.github.io/gardens-of-eden/

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Page markup — cover + 5 sections (Concept, Story, Storyboard, Film, Contact) |
| `styles.css` | Design system (tokens) + components + responsive |
| `app.js` | Sticky nav, active-section highlight, mobile menu, scroll reveals |
| `assets/` | Images / posters (videos live off-repo — see below) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Adding content later

- **Images:** drop into `assets/`, reference with `<img src="assets/frame-01.jpg">`.
- **Video:** keep heavy files OFF the repo. Host them on the Hetzner server (or a
  CDN) and embed with `<video src="https://…/clip.mp4" controls poster="assets/poster.jpg">`.
  This keeps the repo light and the site fast.

## Local preview

Any static server works, e.g.:

```bash
python3 -m http.server 5173
# then open http://localhost:5173
```

## Deploy

Hosted on **GitHub Pages** from the `main` branch. Every `git push` updates the
live site within ~1 minute.
