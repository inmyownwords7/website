/** @type {import('tailwindcss').Config} */
import {createRequire} from "module";
const require = createRequire(import.meta.url);

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ctaBgDark: "#1a202c", // Dark background for CTA
        ctaTextDark: "#f7fafc", // Light text for CTA
        ctaBgLight: "#edf2f7", // Light background for CTA
        ctaTextLight: "#2d3748", // Dark text for CTA
      },
    },
  },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/container-queries'),
    ],
};
