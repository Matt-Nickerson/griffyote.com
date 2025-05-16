const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|card|dropdown|form|image|input|link|modal|navbar|select|toast|ripple|spinner|menu|divider|popover|listbox|scroll-shadow).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
}

