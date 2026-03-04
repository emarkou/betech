# BETECH Μ.Ι.Κ.Ε.

Static single-page company profile for BETECH (Μονοπρόσωπη Ιδιωτική Κεφαλαιουχική Εταιρεία).

## Stack

- **HTML + CSS** — no build step, no frameworks.
- **Netlify** — push to deploy; `netlify.toml` publishes the repo root with a no-op build.

## Local preview

Open `index.html` in a browser, or run a simple static server:

```bash
npx serve .
# or: python3 -m http.server 8000
```

## Files

- `index.html` — main company page
- `404.html` — not-found page (Netlify serves this automatically)
- `styles.css` — layout and design
- `netlify.toml` — Netlify config (publish current directory)

## Deploy

Push to your connected Netlify site; the static files are deployed as-is.
