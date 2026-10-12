import React from 'react';

/**
 * Fallback luxury image from uploaded assets
 */
export const FALLBACK_IMAGE_PATH = 'assets/products/0028.jpeg';

// Graceful SVG placeholder matching Janata Bostraloy branding
export const SVG_PLACEHOLDER =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect width="600" height="800" fill="%23800F1F"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="28" fill="%23FFFFFF" font-weight="700">জনতা বস্ত্রালয়</text><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%23FDE047" font-weight="600" letter-spacing="2">JANATA BOSTRALOY</text><text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="13" fill="%23FFFFFF" opacity="0.8">Pubail Bazar, Gazipur • 01714 480 948</text></svg>';

/**
 * Computes the base URL for static assets.
 * Works seamlessly across:
 * - GitHub Pages subpath repository (e.g. https://<user>.github.io/<repo>/)
 * - GitHub Pages custom domain / root (e.g. https://<user>.github.io/)
 * - Local Dev Server (Vite + Express)
 * - Cloud Run container preview
 */
export function getBasePrefix(): string {
  // 1. If Vite injected an absolute BASE_URL at build time, prioritize it
  const viteBase = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL;
  if (viteBase && viteBase !== './' && viteBase !== '.') {
    return viteBase.endsWith('/') ? viteBase : `${viteBase}/`;
  }

  // 2. In browser runtime, determine directory path from window.location
  if (typeof window !== 'undefined' && window.location) {
    const pathname = window.location.pathname || '';
    if (!pathname || pathname === '/' || pathname === '') {
      return './';
    }

    // If pathname ends with .html or similar filename, take the directory part
    if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
      const dir = pathname.substring(0, pathname.lastIndexOf('/') + 1);
      return dir || './';
    }

    // Return directory path with guaranteed trailing slash
    return pathname.endsWith('/') ? pathname : `${pathname}/`;
  }

  return './';
}

/**
 * Resolves any image URL appropriately across all deployment environments.
 */
export function getImageUrl(path?: string | null): string {
  if (!path || typeof path !== 'string') {
    return `${getBasePrefix()}${FALLBACK_IMAGE_PATH}`;
  }

  const trimmed = path.trim();
  if (
    trimmed.startsWith('http://') ||
    trimmed.startsWith('https://') ||
    trimmed.startsWith('data:') ||
    trimmed.startsWith('blob:')
  ) {
    return trimmed;
  }

  // Heal any legacy references to old removed folders
  let normalized = trimmed;
  if (
    normalized.includes('/Products/Roheenaz') ||
    normalized.includes('/Products/Morja') ||
    normalized.includes('PRODUCTS/1ST1') ||
    normalized.includes('blessed-')
  ) {
    if (normalized.includes('logo')) {
      return `${getBasePrefix()}assets/janata-logo.svg`;
    }
    if (normalized.includes('banner')) {
      return `${getBasePrefix()}assets/janata-banner.svg`;
    }
    normalized = FALLBACK_IMAGE_PATH;
  }

  const cleanPath = normalized.replace(/^\/+/, '');
  const prefix = getBasePrefix();
  return `${prefix}${cleanPath}`;
}

export const FALLBACK_IMAGE = getImageUrl(FALLBACK_IMAGE_PATH);

/**
 * Multi-tier error handler to prevent broken image icons in UI:
 * 1. Try alternative relative/absolute path
 * 2. Try verified fallback image
 * 3. Gracefully render SVG branding placeholder
 */
export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallback: string = FALLBACK_IMAGE_PATH
) {
  const target = e.currentTarget;
  const retryStep = parseInt(target.dataset.retryStep || '0', 10);

  if (retryStep === 0) {
    target.dataset.retryStep = '1';
    const currentSrc = target.getAttribute('src') || '';
    if (currentSrc.startsWith('/')) {
      target.src = '.' + currentSrc;
    } else if (currentSrc.startsWith('./')) {
      target.src = currentSrc.replace(/^\.\//, '/');
    } else {
      target.src = `./${currentSrc.replace(/^\/+/, '')}`;
    }
  } else if (retryStep === 1) {
    target.dataset.retryStep = '2';
    target.src = getImageUrl(fallback);
  } else if (retryStep === 2) {
    target.dataset.retryStep = '3';
    target.src = SVG_PLACEHOLDER;
  }
}
