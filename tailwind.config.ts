import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "contrast": "#B7410E",
        "contrast-2": "#973B27",
        "contrast-3": "#974D2D",
        "background": "#EFEFEF",
        "background-2": "#f9f9f9",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        head: ["Playfair Display", "ui-sans-serif", "system-ui"]
      }
    },
  },
  plugins: [],
} satisfies Config

