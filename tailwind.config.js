module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#00B7C1",
          600: "#1B8AB9",
        },
        purple: {
          400: "#7f329b",
          500: "#D01FC9",
          600: "#7f329b",
        },
        pink: "#ff49db",
        orange: "#ff7849",
        green: {
          400: "#81C954",
          500: "#72C53F",
          600: "#67b239",
        },
        yellow: "#ffc82c",
        "gray-dark": "#222328",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        white: "#ffffff",
        black: "#000000",
        beige: "#FCEFDC",
        graphite: "#222328",
        "graphite-light": "#2D2D35",
      },
      lineHeight: {
        min: "0.1",
      },
      backgroundImage: {
        "ptn-dark": "url('/ptn-dark.svg')",
        "ptn-light": "url('/ptn.svg')",
      },
      backgroundSize: {
        15: "15%",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
