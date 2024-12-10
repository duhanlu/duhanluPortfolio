/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',            // Your HTML file at the root
    './js/**/*.js',            // Any JavaScript files in the 'js' folder (including subfolders if any)
    './css/**/*.css', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

