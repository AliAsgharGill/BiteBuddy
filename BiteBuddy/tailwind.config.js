import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          100: "#fbfbfb",
          200: "#fafafa",
          300: "#03081f",
          400: "rgba(0, 0, 0, 0.4)",
          500: "rgba(0, 0, 0, 0.1)",
          600: "rgba(0, 0, 0, 0.8)",
          700: "rgba(0, 0, 0, 0.2)",
          800: "rgba(255, 255, 255, 0.1)",
          900: "rgba(0, 0, 0, 0.6)",
        },
        black: "#000",
        darkorange: "#fc8a06",
        chocolate: "#c95700",
        gainsboro: {
          100: "#e6e6e6",
          200: "#d9d9d9",
          300: "rgba(217, 217, 217, 0.3)",
          400: "rgba(217, 217, 217, 0.6)",
        },
        darkslategray: "#363b52",
        whitesmoke: {
          100: "#f8f8f8",
          200: "#f5f5f5",
        },
        seagreen: "#028643",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "101xl": "120px",
        "263xl-5": "282.5px",
        "12xs": "1px",
      },
    },
    fontSize: {
      mini: "15px",
      lg: "18px",
      smi: "13px",
      lgi: "19px",
      "5xl": "24px",
      "45xl": "64px",
      base: "16px",
      "13xl": "32px",
      "7xl": "26px",
      "25xl": "44px",
      "16xl": "35px",
      "35xl": "54px",
      "24xl": "43px",
      "49xl": "68px",
      "22xl": "41px",
      xs: "12px",
      sm: "14px",
      "6xl": "25px",
      inherit: "inherit",
    },
    screens: {
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
});
