/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "darkBlue": "var(--darkBlue)",
        "yellow": "var(--yellow)",
        "primaryLight": "var(--primaryLight)",
        "primaryDark": "var(--primaryDark)",
        "pure": "var(--pure)",
        "light": "var(--light)",
        "dark": "var(--dark)",
        "darkLight": "var(--darkLight)",
        "primaryHover": "var(--primaryHover)"
      }
    },
  },
  plugins: [require("daisyui")],
}
