# Deploy to GitHub Pages

This guide covers deploying your VitePress site to GitHub Pages using GitHub Actions.

## Prerequisites

- A GitHub repository with your VitePress site
- Push access to the repository

## Setup

### 1. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment", set **Source** to **GitHub Actions**

### 2. Add the Workflow

Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy VitePress to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 10

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Install dependencies
        run: pnpm install

      - name: Build with VitePress
        run: pnpm docs:build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 3. Configure Base Path (if needed)

If your repository name is not `<username>.github.io`, update `.vitepress/config.ts`:

```ts
export default defineConfig({
  base: '/<repository-name>/',
  // ... other config
})
```

## Deployment

Push to the `main` branch to trigger a deployment. You can also manually trigger it from the **Actions** tab.

Your site will be available at:
- `https://<username>.github.io/<repository-name>/`
- Or `https://<username>.github.io/` for user/org sites
