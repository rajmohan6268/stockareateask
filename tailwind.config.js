module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        "fade-in--rbutton": {
          "0%": {
            opacity: "0",
            transform: "translateX(-10px)",
          },
          "50%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0%)",
          },
        },
        "fade-in--lbutton": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "50%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0%)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(75%)",
          },
        },
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        "fade-in-top-button": "fade-in-top 1s ease-in-out" ,
        "fade-in-left": "fade-in-left 0.5s ease-out",
        "fade-in-right": "fade-in-right 0.5s ease-out",
        "fade-in-left-button": "fade-in--lbutton 1s ease-in-out",
        "fade-in-right-button": "fade-in--rbutton 1s ease-in-out",
      },
    },
    screens: {
      xs: "340px",
      xsm: "500px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1366px",
      xxxl: "1440px",

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    // extend: {
    //   fontFamily: {
    //     Nunito: ["Nunito", "Poppins", "Arial", "sans-serif"],
    //     Poppins: ["Poppins", "Nunito", "Arial", "sans-serif"],
    //   },
    // },
    variants: {},
  },
  plugins: [],
};
