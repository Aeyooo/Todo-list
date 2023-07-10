/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.vue",
    "./src/components/TodoComponent.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

