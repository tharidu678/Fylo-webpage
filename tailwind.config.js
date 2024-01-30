/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },

    extend: {
      colors: {
        "main-bg-blue": "hsl(218, 28%, 13%)",
        "footer-blue": "hsl(216, 53%, 9%)",
        "testi-blue": "hsl(219, 30%, 18%)",
        "intro-email-blue": "hsl(217, 28%, 15%)",
        "inside-cyan": "hsl(176, 68%, 64%)",
        "error-red": "hsl(0, 100%, 63%)",
        "button-blue": "hsl(198, 60%, 50%)",
      },
    },
  },
  plugins: [],
};
