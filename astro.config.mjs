// @ts-check
import { defineConfig } from 'astro/config';

// Determine which meetup to build based on environment variable
const MEETUP_ID = process.env.MEETUP_ID || 'cologne-js'; // default to cologne-js

// Set the base path for GitHub Pages deployment
const getBase = () => {
  if (process.env.GITHUB_ACTIONS) {
    return `/${process.env.GITHUB_REPOSITORY_NAME}/`;
  }
  return '/';
};

// Set the site URL
const getSite = () => {
  if (process.env.GITHUB_ACTIONS) {
    // GitHub Pages URL format: https://username.github.io/repository-name/
    return process.env.GITHUB_PAGES_URL || 'https://ambient-innovation.github.io/meetup-landing-pages/';
  }
  return 'http://localhost:4321/';
};

// https://astro.build/config
export default defineConfig({
  site: getSite(),
  base: getBase(),
  build: {
    format: 'directory' // Creates clean URLs like /django-cologne/ instead of /django-cologne.html
  },
  compressHTML: true,
  vite: {
    define: {
      'import.meta.env.MEETUP_ID': JSON.stringify(MEETUP_ID)
    }
  }
});
