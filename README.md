# Akula Law — Responsive Website Redesign

A modern, responsive, editorial-style law firm website built with **React, TypeScript, Vite, Tailwind CSS, and TanStack Router**.

The project is designed as a professional legal-services website with a strong editorial visual identity, responsive layouts, attorney/team profiles, immigration services, testimonials, articles, videos, careers, and contact pages.

## ✨ Features

* Modern editorial-style law firm design
* Fully responsive desktop, tablet, and mobile layouts
* React + TypeScript architecture
* Vite-powered development and production builds
* TanStack Router for page routing
* Tailwind CSS styling
* Reusable UI components
* Attorney and team profile pages
* Immigration service categories and detail pages
* Testimonials section
* News and blog pages
* Video archive
* Careers page
* Contact page
* About Us pages
* Community involvement page
* Local image assets
* Local attorney/team profile images
* Local Akula Law logo assets
* SEO-friendly page structure
* Production-ready Vite build
* Compatible with GitHub and Vercel deployment
* Compatible with static hosting such as Hostinger

## 🛠️ Technology Stack

| Technology      | Purpose                                 |
| --------------- | --------------------------------------- |
| React           | Frontend UI                             |
| TypeScript      | Type-safe development                   |
| Vite            | Development server and production build |
| Tailwind CSS    | Styling and responsive design           |
| TanStack Router | Application routing                     |
| Lucide React    | Icons                                   |
| Supabase        | Backend/database integration            |
| Prettier        | Code formatting                         |
| ESLint          | Code quality                            |
| Bun/npm         | Package management                      |

## 📁 Project Structure

```text
Editorial-Canvas/
│
├── AGENTS.md
├── README.md
├── bun.lock
├── bunfig.toml
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
│
├── .lovable/
│   └── project.json
│
├── public/
│   ├── abigail-obidike.png
│   ├── anita-gandavadi.png
│   ├── ashley-dennis.png
│   ├── akula-logo-dark.png
│   ├── akula-logo-dark-transparent.png
│   ├── akula-logo-light.png
│   ├── community-involvement-poster.jpg
│   ├── community-involvement.mp4
│   ├── favicon.png
│   ├── inella-coleman.png
│   ├── kavitha-akula.png
│   ├── katrina-d-moore.png
│   ├── pravalika-balaram.png
│   ├── renuka-anumandla.png
│   ├── suengjai-cegon.png
│   ├── susan-basemera.png
│   ├── tracy-bernal.png
│   └── robots.txt
│
├── src/
│   │
│   ├── assets/
│   │   ├── attorney-hero.jpg
│   │   ├── journey.jpg
│   │   └── office.jpg
│   │
│   ├── components/
│   │   ├── editorial/
│   │   │   ├── FeaturedServices.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── PageHero.tsx
│   │   │   ├── Prose.tsx
│   │   │   ├── ServiceIndex.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── SideRail.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── TeamGrid.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── VideoCard.tsx
│   │   │   └── primitives.tsx
│   │   │
│   │   └── ui/
│   │       └── ...
│   │
│   ├── data/
│   │   ├── blog.ts
│   │   ├── careers.ts
│   │   ├── content.ts
│   │   ├── reviews.ts
│   │   ├── site.ts
│   │   └── videos.ts
│   │
│   ├── hooks/
│   │   └── use-mobile.tsx
│   │
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client.ts
│   │       └── types.ts
│   │
│   ├── lib/
│   │   ├── error-capture.ts
│   │   ├── error-page.ts
│   │   ├── labels.ts
│   │   ├── lovable-error-reporting.ts
│   │   └── utils.ts
│   │
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── about-us.index.tsx
│   │   ├── about-us.why-akula.tsx
│   │   ├── about-us.community-involvement.tsx
│   │   ├── careers.tsx
│   │   ├── contact.tsx
│   │   ├── immigration-links.tsx
│   │   ├── immigration-services.index.tsx
│   │   ├── immigration-services.$category.index.tsx
│   │   ├── immigration-services.$category.$slug.tsx
│   │   ├── news-blogs.index.tsx
│   │   ├── news-blogs.$slug.tsx
│   │   ├── our-team.index.tsx
│   │   ├── our-team.full-team.tsx
│   │   ├── our-team.$slug.tsx
│   │   ├── testimonials.tsx
│   │   ├── video-archive.index.tsx
│   │   └── video-archive.firm-videos.tsx
│   │
│   ├── main.tsx
│   ├── routeTree.gen.ts
│   ├── router.tsx
│   └── styles.css
│
└── supabase/
    ├── config.toml
    └── migrations/
        └── ...
```

## 🚀 Getting Started

### Prerequisites

Install the following before starting:

* Node.js 18+
* npm
* Git
* VS Code (recommended)

You can also use Bun if preferred.

Check your Node.js installation:

```bash
node --version
```

Check npm:

```bash
npm --version
```

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/Editorial-Canvas.git
```

Enter the project directory:

```bash
cd Editorial-Canvas
```

Install dependencies:

```bash
npm install
```

## 💻 Development

Start the Vite development server:

```bash
npm run dev
```

Vite will display a local URL, normally:

```text
http://localhost:5173
```

Open that URL in your browser.

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

The generated production files will be placed in:

```text
dist/
```

The production structure will look similar to:

```text
dist/
├── assets/
├── index.html
├── favicon.png
├── akula-logo-dark.png
├── akula-logo-dark-transparent.png
├── akula-logo-light.png
└── ...
```

## 🔎 Preview the Production Build

After building:

```bash
npm run preview
```

This allows you to test the production build locally before deploying it.

# 🖼️ Local Images

The project uses local image files instead of relying on external asset URLs.

All primary public image assets are located in:

```text
public/
```

Examples:

```text
public/akula-logo-dark.png
public/akula-logo-dark-transparent.png
public/akula-logo-light.png
public/kavitha-akula.png
public/katrina-d-moore.png
public/ashley-dennis.png
public/renuka-anumandla.png
public/inella-coleman.png
public/susan-basemera.png
public/tracy-bernal.png
public/christie-sourivong.png
public/anita-gandavadi.png
public/abigail-obidike.png
public/suengjai-cegon.png
public/pravalika-balaram.png
```

Images stored in `public/` can be referenced from the site root.

Example:

```tsx
<img
  src="/akula-logo-dark-transparent.png"
  alt="Akula Law logo"
/>
```

# 🎨 Logo Configuration

The primary website header is implemented in:

```text
src/components/editorial/Header.tsx
```

The footer is implemented in:

```text
src/components/editorial/Footer.tsx
```

The project uses local logo files:

```text
public/akula-logo-dark.png
public/akula-logo-dark-transparent.png
public/akula-logo-light.png
```

This prevents the production website from depending on unavailable external asset paths.

# 👥 Attorney and Team Images

Attorney and team images are stored locally in:

```text
public/
```

The images include:

```text
kavitha-akula.png
katrina-d-moore.png
ashley-dennis.png
renuka-anumandla.png
inella-coleman.png
susan-basemera.png
tracy-bernal.png
christie-sourivong.png
anita-gandavadi.png
abigail-obidike.png
suengjai-cegon.png
pravalika-balaram.png
```

The team-related content and configuration can be found under:

```text
src/data/
```

and:

```text
src/routes/
```

# 🧭 Routing

The application uses TanStack Router.

Major route groups include:

```text
/
├── about-us/
│   ├── why-akula
│   └── community-involvement
│
├── immigration-services/
│   ├── ...
│   └── ...
│
├── our-team/
│   ├── ...
│   └── full-team
│
├── news-blogs/
│   └── ...
│
├── video-archive/
│   ├── ...
│   └── firm-videos
│
├── testimonials
├── careers
├── contact
└── immigration-links
```

The generated route tree is located at:

```text
src/routeTree.gen.ts
```

# 🧩 Reusable Components

The main reusable editorial components are located at:

```text
src/components/editorial/
```

Important components include:

| Component              | Purpose                              |
| ---------------------- | ------------------------------------ |
| `Header.tsx`           | Main website navigation and branding |
| `Footer.tsx`           | Website footer                       |
| `Hero.tsx`             | Homepage hero section                |
| `PageHero.tsx`         | Inner-page hero                      |
| `FeaturedServices.tsx` | Featured legal services              |
| `Services.tsx`         | Services sections                    |
| `ServiceIndex.tsx`     | Service navigation                   |
| `TeamGrid.tsx`         | Attorney/team grid                   |
| `Testimonials.tsx`     | Testimonials                         |
| `StatsBar.tsx`         | Firm statistics                      |
| `FinalCTA.tsx`         | Call-to-action section               |
| `VideoCard.tsx`        | Video content cards                  |
| `SideRail.tsx`         | Editorial side navigation            |
| `Prose.tsx`            | Long-form content styling            |

# 📝 Content Management

Static website content is organized under:

```text
src/data/
```

Important data files:

```text
src/data/site.ts
src/data/content.ts
src/data/blog.ts
src/data/reviews.ts
src/data/careers.ts
src/data/videos.ts
```

This separation makes it easier to update website content without modifying the overall component structure.

# 🗄️ Supabase

The project includes Supabase integration:

```text
src/integrations/supabase/
```

with:

```text
client.ts
types.ts
```

Supabase configuration and migrations are located under:

```text
supabase/
```

If the application requires Supabase functionality in production, configure the required environment variables in your deployment platform.

Never commit private API keys or secrets to GitHub.

# 🔍 Linting

Run the project's linting command if configured:

```bash
npm run lint
```

If the project does not expose a lint script, you can run ESLint directly:

```bash
npx eslint .
```

# 🐙 GitHub

Initialize Git:

```bash
git init
```

Add project files:

```bash
git add .
```

Create the first commit:

```bash
git commit -m "Initial project upload"
```

Rename the branch:

```bash
git branch -M main
```

Add your GitHub repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/Editorial-Canvas.git
```

Push the project:

```bash
git push -u origin main
```

# 🔄 Updating the GitHub Repository

After making changes:

```bash
git add .
git commit -m "Update website"
git push
```

If the repository is connected to Vercel, the new commit can automatically trigger a new deployment.

# ▲ Vercel Deployment

This project is compatible with Vercel.

## Deploy using GitHub

1. Push the project to GitHub.
2. Sign in to Vercel.
3. Select **Add New → Project**.
4. Import the GitHub repository.
5. Select the project.
6. Confirm the build settings.
7. Click **Deploy**.

Recommended settings:

```text
Framework Preset:
Vite

Build Command:
npm run build

Output Directory:
dist

Install Command:
npm install
```

Vercel automatically installs dependencies, builds the project, and publishes the generated `dist/` directory.

# 🌐 Vercel Deployment Flow

```text
VS Code
   │
   │ git add
   │ git commit
   │ git push
   ▼
GitHub
   │
   │ automatic deployment
   ▼
Vercel
   │
   ├── npm install
   ├── npm run build
   │
   ▼
dist/
   │
   ▼
Live Website
```

# 🖥️ Hostinger Deployment

The project can also be deployed to a static hosting provider such as Hostinger.

Build the project:

```bash
npm run build
```

This generates:

```text
dist/
```

Upload the **contents of `dist/`** to the appropriate public web directory on your Hostinger account.

Do not upload the entire source project when the Hostinger deployment is intended to serve the compiled static website.

# 🐛 Troubleshooting

## Images are not displaying

Check that the image exists in:

```text
public/
```

For example:

```text
public/akula-logo-dark-transparent.png
```

Then reference it as:

```tsx
<img src="/akula-logo-dark-transparent.png" />
```

Do not use obsolete external asset paths.

## Build fails

Run:

```bash
npm install
```

Then:

```bash
npm run build
```

Read the first error shown in the terminal and resolve that error before addressing later errors.

## Vercel build fails

Verify:

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

Also verify that:

```text
package.json
```

is located in the repository root.

## Blank page after deployment

Check:

1. Browser console errors
2. Vercel deployment logs
3. Route configuration
4. Asset paths
5. Environment variables
6. Production build output

Also test locally:

```bash
npm run build
npm run preview
```

# 📱 Responsive Design

The website is designed to support:

* Desktop
* Laptop
* Tablet
* Mobile phones

Responsive styling is primarily handled through Tailwind CSS and the project's reusable components.

# 🎯 Project Goals

The project focuses on creating a professional digital presence for a modern law firm while combining:

* Editorial typography
* Strong visual hierarchy
* Professional branding
* Responsive layouts
* Structured legal-service navigation
* Attorney profiles
* Content publishing
* Testimonials
* Video content
* Contact and conversion-focused sections

# 📄 License

This project is intended for the website/application represented by this repository.

Unless otherwise specified by the repository owner, the source code, branding, images, logos, photographs, written content, and other project assets should not be redistributed or reused without appropriate permission.

# 👨‍💻 Development Workflow

A typical development workflow is:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production version
npm run build

# Preview production build
npm run preview

# Check Git status
git status

# Commit changes
git add .
git commit -m "Update website"

# Push changes
git push
```

---

## ⭐ Deployment Summary

### Local Development

```text
VS Code
   ↓
npm install
   ↓
npm run dev
```

### GitHub

```text
Project Folder
   ↓
git add .
   ↓
git commit
   ↓
git push
   ↓
GitHub Repository
```

### Vercel

```text
GitHub Repository
   ↓
Vercel
   ↓
npm install
   ↓
npm run build
   ↓
dist/
   ↓
Production Website
```

### Hostinger

```text
Project Folder
   ↓
npm run build
   ↓
dist/
   ↓
Hostinger
   ↓
Production Website
```

## 🚀 Quick Start

For experienced developers, the entire setup can be reduced to:

```bash
git clone https://github.com/YOUR_USERNAME/Editorial-Canvas.git
cd Editorial-Canvas
npm install
npm run dev
```

For production:

```bash
npm run build
```

The production files will be generated in:

```text
dist/
```

**Built with React + TypeScript + Vite + Tailwind CSS.**
