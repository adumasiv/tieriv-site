# TierIV Website

Production-ready React + TypeScript + Vite starter for the TierIV AV consulting website.

## Stack

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- GitHub Pages via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages deployment

1. Push this folder to a GitHub repo.
2. In GitHub, go to **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Commit the workflow in `.github/workflows/deploy.yml`.
5. Add your custom domain in GitHub Pages settings: `tieriv.tech`.
6. Keep the `public/CNAME` file in the repo.
7. Add DNS records with your domain registrar.

## DNS setup for GitHub Pages

For the apex domain `tieriv.tech`, point A records to GitHub Pages IPs:

- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

For `www`, add a CNAME pointing to:

- `<your-github-username>.github.io`

## Contact form

GitHub Pages is static hosting, so the form needs a form backend. Common options:

- Formspree
- Basin
- Getform
- Cloudflare Pages Functions or another serverless endpoint

## Next improvements

- Replace placeholder case studies with real projects
- Add actual brand logo and project photography
- Add SEO tags per page
- Add analytics
- Connect contact form backend
