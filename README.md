# GOAT ESPORTS Website

Premium futuristic esports organization website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Cinematic hero with particle effects and animated stats
- Teams, tournaments, players, leaderboards, shop, contact
- Live tournament countdown timers
- Auth UI (login, signup, forgot password)
- Admin dashboard concept
- SEO meta tags
- GitHub Pages auto-deploy workflow

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:5173**

## Build for production

```bash
npm run build
npm run preview
```

## Push to GitHub

1. Install [GitHub CLI](https://cli.github.com/) and log in:
   ```bash
   gh auth login
   ```
2. Run the push script:
   ```powershell
   .\scripts\push-github.ps1
   ```
3. In your repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**

Your site will be live at: `https://YOUR_USERNAME.github.io/goat-esports-website/`

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main website |
| `/login` | Login |
| `/signup` | Sign up |
| `/forgot-password` | Password recovery |
| `/admin` | Admin dashboard concept |

## Tech stack

- React 19 + Vite 8
- Tailwind CSS 4
- Framer Motion
- React Router

---

**GOAT ESPORTS** — Rise. Dominate. Conquer.
