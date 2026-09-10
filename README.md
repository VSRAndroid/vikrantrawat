# Vikrant Singh Rawat — Portfolio

A static portfolio site built from your resume. No build tools, no dependencies — just three files.

## Files

- `index.html` — content and structure
- `styles.css` — all styling (dark, Android-stack themed)
- `script.js` — syncs the left-hand "stack" rail highlight to scroll position

## Run it locally

Just open `index.html` in a browser, or serve it:

```bash
cd portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy for free

**GitHub Pages**
1. Create a new repo (e.g. `vikrant-portfolio`) and push these three files to it.
2. In the repo: Settings → Pages → Source → select the `main` branch, root folder.
3. Your site goes live at `https://<your-username>.github.io/vikrant-portfolio/`.

**Netlify / Vercel**
Drag the `portfolio` folder into the Netlify or Vercel dashboard — both offer instant drag-and-drop static hosting with a free URL.

## Customizing

- **Colors / fonts**: all defined as CSS variables at the top of `styles.css` under `:root`.
- **Content**: edit directly in `index.html` — experience, skills, and education are plain HTML blocks, no templating.
- **Stack layers**: each experience entry and skill block carries a `data-layer` (or `data-layers`) attribute (`application`, `framework`, `hal`, `kernel`). The rail on the left highlights the matching layer as you scroll — add or remove layers by editing these attributes and the `.stack` list in `index.html`.
- **Contact info / links**: update the `mailto:`, `tel:`, LinkedIn, GitHub, and Stack Overflow links in the rail footer and page footer.

## Notes

- Fully responsive: the left rail collapses into horizontal scrollable chips under 900px width.
- Respects `prefers-reduced-motion`.
- No external JS libraries — everything is vanilla HTML/CSS/JS.
