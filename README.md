# Blessed Boutique — Elegant, Trendy & Affordable Women's Fashion

A luxury e-commerce storefront for **Blessed Boutique** (Islampur, Dhaka), offering premium readymade salwar kameez, 3-piece sets, festive designer collections, complete order tracking, cart checkout, and an interactive admin portal.

---

## 🚀 Publishing to GitHub Pages

This repository is pre-configured and 100% ready for GitHub Pages publication with all assets and product photos.

### Automatic GitHub Actions Deployment (Recommended)

1. Push your repository to GitHub (`main` or `master` branch).
2. Go to your repository on GitHub:
   - Click **Settings** → **Pages** (under "Code and automation").
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. That's it! The workflow at `.github/workflows/deploy.yml` will automatically build and publish your storefront at:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

### Features Configured for GitHub Pages:
- **Relative Path Resolution**: `base: './'` in `vite.config.ts` guarantees that assets, stylesheets, scripts, and product photos resolve properly under any GitHub repository subpath or custom domain.
- **`.nojekyll` Support**: Prevents GitHub Pages from running Jekyll, ensuring all static assets and subfolders load cleanly.
- **SPA Fallback Routing**: `404.html` fallback ensures smooth page reloads without 404 errors.
- **Image Fallback Engine**: `getImageUrl()` and `handleImageError()` handle relative base prefixes and fallbacks seamlessly for all 78+ product images and branding vectors.
- **Production Build Script**: `npm run build:pages` builds the client bundle and copies `index.html` to `404.html`.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Build specifically for GitHub Pages
npm run build:pages
```

---

## 🛍️ Brand Details
- **Brand**: Blessed Boutique
- **Location**: Islampur, Dhaka, Bangladesh
- **Hotline**: 01333-100412
- **Tagline**: Elegant • Trendy • Affordable
