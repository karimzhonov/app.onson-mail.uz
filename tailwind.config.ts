/** @type {import('tailwindcss').Config} */
import primeui from 'tailwindcss-primeui'

export default {
  content: [
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./components/**/*.vue",
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [primeui],
  corePlugins: {
    scrollBehavior: true,
  },
}