# Undekoti Rowan Ronald - AI Engineer Portfolio

A dark, glassmorphic, animated portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Statically exported so it can be hosted for free on **GitHub Pages**.

---

## 1. What's inside

```
portfolio/
├── .github/workflows/deploy.yml   # Auto-builds & deploys to GitHub Pages on every push
├── public/
│   ├── resume/Undekoti_Rowan_Ronald.pdf   # Powers the "Download Resume" button
│   ├── favicon.svg
│   └── og-image.svg                # Social share preview image
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Shared chrome: nav, footer, background, SEO metadata
│   │   ├── page.tsx                # Home (hero, counters, featured work)
│   │   ├── about/page.tsx
│   │   ├── skills/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── research/page.tsx
│   │   ├── experience/page.tsx
│   │   ├── certifications/page.tsx
│   │   ├── github/page.tsx         # Live GitHub stats + repos via api.github.com
│   │   ├── blog/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── sitemap.ts               # Generates /sitemap.xml at build time
│   │   └── robots.ts                # Generates /robots.txt at build time
│   ├── components/                 # Nav, Footer, ParticleBackground, Loader, etc.
│   └── lib/data.ts                 # ALL your resume content lives here
├── next.config.mjs                 # Configured for static export (`output: 'export'`)
├── tailwind.config.ts
└── package.json
```

Every page's copy (experience, projects, skills, publications, certifications) comes from **`src/lib/data.ts`** - edit that one file to update content across the whole site.

---

## 2. Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
cd portfolio
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

To produce the static site (same output GitHub Pages will serve):

```bash
npm run build
```

This creates an `out/` folder with plain HTML/CSS/JS - that's what gets deployed.

---

## 3. Personalize before publishing

- **Resume file**: replace `public/resume/Undekoti_Rowan_Ronald.pdf` with your latest PDF (keep the same filename, or update `resumeFile` in `src/lib/data.ts`).
- **Certifications**: `src/lib/data.ts` → `certifications` array currently has placeholder entries - swap in your real certificate names, issuers, and links.
- **Contact form**: it's wired to [Formspree](https://formspree.io) (free tier) since GitHub Pages can't run a backend. In `src/app/contact/ContactForm.tsx`, replace `YOUR_FORM_ID` with the ID from your free Formspree form. Until then, people can still reach you via the email/LinkedIn/GitHub cards above the form.
- **GitHub username**: if you ever rename your GitHub account, update `USERNAME` in `src/app/github/page.tsx` and the `github` field in `src/lib/data.ts`.
- **Site URL**: `siteUrl` is set in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` to `https://undekoti-rowan-ronald.github.io`. Update this if you deploy under a different URL (see hosting note below).

---

## 4. Host it for free on GitHub Pages - step by step

### Step 1 - Create the repository
1. Go to [github.com/new](https://github.com/new).
2. Name it exactly **`Undekoti-Rowan-Ronald.github.io`** (your GitHub username + `.github.io`). This gives you the cleanest possible URL: `https://undekoti-rowan-ronald.github.io`.
   - If you'd rather use a different repo name (e.g. `portfolio`), that's fine too - see the "project site" note at the end.
3. Leave it empty (no README/.gitignore) and click **Create repository**.

### Step 2 - Push this project to GitHub
From inside the `portfolio` folder on your computer:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Undekoti-Rowan-Ronald/Undekoti-Rowan-Ronald.github.io.git
git push -u origin main
```

### Step 3 - Turn on GitHub Pages with GitHub Actions
1. On GitHub, open your repo → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. That's it - no need to pick a workflow template. The workflow file already included at `.github/workflows/deploy.yml` will run automatically.

### Step 4 - Watch it deploy
1. Go to the **Actions** tab of your repo.
2. You'll see a run called **"Deploy to GitHub Pages"** start automatically (triggered by your push in Step 2).
3. Wait for both jobs (**build** and **deploy**) to turn green - usually 1–2 minutes.
4. Go back to **Settings → Pages** - you'll see "Your site is live at `https://undekoti-rowan-ronald.github.io`". Click it!

From now on, **every time you push to `main`, the site rebuilds and redeploys automatically** - no manual steps needed.

### If you named your repo something other than `username.github.io`
GitHub Pages will serve it at `https://username.github.io/repo-name/` instead. In that case:
1. The included workflow already passes the correct sub-path into the build automatically (via `NEXT_PUBLIC_BASE_PATH`), so links and assets will still work.
2. Just update `siteUrl` in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` to `https://username.github.io/repo-name` so SEO tags and the sitemap point to the right address, then commit and push again.

---

## 5. Updating the site later

Just edit files (most often `src/lib/data.ts` for content) and:

```bash
git add .
git commit -m "Update resume details"
git push
```

GitHub Actions rebuilds and republishes automatically within a minute or two.

---

## 6. Notes on the build

- **Static export**: `next.config.mjs` sets `output: 'export'`, so there's no Node.js server needed at runtime - GitHub Pages just serves static files, which is why hosting is free and simple.
- **GitHub stats/contribution graph** on the `/github` page load live from the public GitHub API and free badge services (`github-readme-stats`, `ghchart.rshah.org`) at runtime in the visitor's browser - no server or API key needed.
- **Lighthouse/performance**: images are SVG/inline where possible, fonts are loaded via `<link>` (not blocking the build), and Framer Motion animations respect `prefers-reduced-motion`.
- If you later want a real backend (e.g. a working contact form without Formspree, or a real CMS-backed blog), you'd swap `output: 'export'` for a hosting provider that runs Node (e.g. Vercel), since GitHub Pages only serves static files.
