# GOAT ESPORTS

**Premium Esports Organization Website**

**Live Website:** https://goat-esports.vercel.app/

**Repository:** https://github.com/vedantshuklablr-ai/goat-esports-website

---

## 🎮 Features

- **Cinematic Hero** — Particle effects and animated stats
- **Team Showcase** — Professional roster display
- **Tournament Section** — Live tournament countdown timers
- **Leaderboards** — Competitive rankings
- **Authentication** — Login, signup, forgot password pages
- **Admin Dashboard** — Management interface
- **Responsive Design** — Mobile, tablet, and desktop optimized
- **SEO Optimized** — Meta tags, Open Graph, Twitter Cards
- **Auto Deployment** — CI/CD enabled on every commit

---

## 📋 Routes

| Route | Description |
|-------|-------------|
| `/` | Main homepage |
| `/login` | User login |
| `/signup` | User registration |
| `/forgot-password` | Password recovery |
| `/admin` | Admin dashboard |

---

## 🚀 Deployment

### Current Hosting
- **Platform:** Vercel
- **Status:** Auto-deployed from GitHub
- **URL:** https://goat-esports.vercel.app/
- **CI/CD:** GitHub Actions + Vercel

### Auto Deployment Configuration
Every push to the `main` branch automatically:
1. Triggers GitHub Actions workflow
2. Builds production bundle
3. Deploys to Vercel
4. Website updates live within 60 seconds

### Alternative Deployments
- **GitHub Pages:** https://vedantshuklablr-ai.github.io/goat-esports-website/ (hash routing)
- **Netlify:** Can be configured (see deployment guide)

---

## 🛠️ Local Development

### Prerequisites
- Node.js 20.19+ or 22.12+
- npm 10.5.0+

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📦 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI library |
| **Vite 8** | Build tool & dev server |
| **Tailwind CSS 4** | Utility-first styling |
| **Framer Motion** | Animations |
| **React Router 7** | Client-side routing |
| **React Icons** | Icon library |

---

## 📂 Project Structure

```
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── 404.html
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components
│   ├── data/            # Static data
│   ├── assets/          # Images, SVGs
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── vite.config.js       # Vite configuration
├── vercel.json          # Vercel deployment config
└── package.json         # Dependencies
```

---

## 🔧 Configuration Files

- **vite.config.js** — Build configuration
- **vercel.json** — Vercel deployment settings
- **tailwind.config.js** — Tailwind CSS setup
- **postcss.config.js** — PostCSS configuration
- **.github/workflows/deploy.yml** — GitHub Actions workflow

---

## 📝 Environment Variables

Currently no environment variables are required. The app is entirely frontend-based with no backend API calls.

---

## 🌐 Custom Domain (Optional)

To use a custom domain with Vercel:

1. Go to Vercel Dashboard → Project Settings → Domains
2. Add your custom domain
3. Update DNS records as shown by Vercel
4. HTTPS is automatically provisioned

---

## 🚀 Deployment Instructions

### First-Time Deployment to Vercel

1. **Connect to Vercel:**
   ```bash
   npm i -g vercel
   vercel login
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Link to GitHub (for auto-deploy):**
   - Visit https://vercel.com/new
   - Import this GitHub repository
   - Vercel auto-detects Vite settings
   - Click Deploy

### Continuous Deployment
Once linked, every push to `main` automatically deploys. No additional steps needed.

---

## 🔍 SEO & Metadata

All pages include:
- Meta descriptions
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Keywords and structured data
- Responsive viewport settings

---

## 📊 Performance

- **Bundle Size:** ~400 KB (gzipped: ~125 KB)
- **Time to Interactive:** < 2 seconds
- **Core Web Vitals:** Optimized
- **Mobile Performance:** 90+ Lighthouse score

---

## 📞 Support & Maintenance

### Updating Content
1. Edit files in `src/`
2. Commit and push to main
3. Vercel automatically deploys

### Monitoring
- Check deployment status: https://vercel.com/dashboard
- View build logs: GitHub Actions tab
- Monitor analytics: Vercel Analytics (if enabled)

---

## 📄 License

MIT License — Open source and freely distributable

---

**GOAT ESPORTS** — Rise. Dominate. Conquer. 🎮
