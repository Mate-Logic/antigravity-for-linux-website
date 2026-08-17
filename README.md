# Antigravity for Linux

Community-maintained download website for running Antigravity on Linux. The site provides portable AppImage downloads for the desktop agent and IDE, plus the official Antigravity CLI installation command.

This is an unofficial community project. Antigravity, Antigravity IDE, and related trademarks belong to Google LLC. Always review downloaded files and their checksums before running them.

## Live Website

- Website: <https://mate-logic.github.io/antigravity-for-linux-website/>
- Sitemap: <https://mate-logic.github.io/antigravity-for-linux-website/sitemap.xml>
- Robots file: <https://mate-logic.github.io/antigravity-for-linux-website/robots.txt>

## Features

- AppImage downloads for the Antigravity desktop agent and IDE.
- Latest IDE release information loaded from GitHub Releases.
- SHA-256 checksums for release verification.
- Official CLI installation command.
- Responsive dark interface with English and Spanish UI controls.
- Search engine metadata, canonical URLs, Open Graph tags, JSON-LD, sitemap, and Google Search Console verification.

## Tech Stack

- [Astro](https://astro.build/) for static site generation.
- [Tailwind CSS](https://tailwindcss.com/) through the Vite plugin.
- GitHub Pages for hosting.
- GitHub Actions for automated builds and deployment.

## Local Development

Requirements:

- Node.js 22.12.0 or newer.
- pnpm 10 or newer.

Install dependencies:

```sh
pnpm install
```

Start the development server:

```sh
pnpm dev
```

The site is available at `http://localhost:4321/`.

## Production Build

Build the static site into `dist/`:

```sh
pnpm build
```

Preview the production build locally:

```sh
pnpm preview
```

## Project Structure

```text
.
├── public/                 # Static assets, robots.txt, and sitemap.xml
├── src/
│   ├── components/         # UI components
│   ├── layouts/            # Shared document layout and SEO metadata
│   ├── pages/              # Astro routes
│   └── styles/             # Global styles
├── astro.config.mjs        # Site URL and GitHub Pages base path
└── .github/workflows/      # GitHub Pages deployment workflow
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`. The workflow also runs every 6 hours, reads the current releases directly from GitHub, builds the static site, and deploys `dist/` to GitHub Pages. If a release cannot be read or is missing its AppImage/checksum, the build fails instead of publishing stale data.

## License and Attribution

This repository contains an unofficial community website. Antigravity branding and trademarks are property of Google LLC. Refer to the original release repositories for the licensing terms of the distributed software.
