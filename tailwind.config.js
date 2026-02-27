/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // Scans ALL HTML files in root
    "./src/**/*.html",    // Scans HTML in src folder
    "./index.html"        // Your main file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
