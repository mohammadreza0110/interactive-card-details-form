/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1440px",
        },
      },
      colors: {
        primary: {
          active:
            "bg-gradient-to-r from-[hsl(249, 99%, 64%)] to-[hsl(278, 94%, 30%)]",
          error: "hsl(0, 100%, 66%)",
          background: "#f2f2f2",
        },

        neutral: {
          White: "hsl(0, 0%, 100%)",
          LightGrayishViolet: "hsl(229, 6%, 66%)",
          DarkGrayishViolet: "hsl(279, 6%, 55%)",
          VeryDarkViolet: "hsl(278, 68%, 11%)",
        },

        textColor: "#4D4F62",
      },

      fontSize: {
        base: "18px",
      },

      fontFamily: {
        body: ['"Space Grotesk"', "Georgia"],
      },
    },
  },
  plugins: [],
};
