/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "primaryHover": "var(--primaryHover)",
        "primaryG": "var(--primaryG)",
        "primaryLight": "var(--primaryLight)",
        "primaryDark": "var(--primaryDark)",
        "darkBlue": "var(--darkBlue)",
        "pure": "var(--pure)",
        "light": "var(--light)",
        "dark": "var(--dark)",
        "darkLight": "var(--darkLight)",
        "yellow": "var(--yellow)"
      }
    },
  },
  plugins: [require("daisyui")],
}
