// @ts-check
import { defineConfig } from "astro/config";

// Determine which meetup to build based on environment variable
const MEETUP_ID = process.env.MEETUP_ID || "cologne-js"; // default to cologne-js

const getBase = () => {
  return `/meetup-landing-pages/${MEETUP_ID}/`;
};

// Set the site URL
const getSite = () => {
  return (
    (process.env.GITHUB_PAGES_URL ||
      "https://ambient-innovation.github.io/meetup-landing-pages/") +
    MEETUP_ID +
    "/"
  );
};

// https://astro.build/config
export default defineConfig({
  site: getSite(),
  base: getBase(),
  build: {
    format: "directory",
  },
  compressHTML: true,
  vite: {
    define: {
      "import.meta.env.MEETUP_ID": JSON.stringify(MEETUP_ID),
    },
  },
});
