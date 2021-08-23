module.exports = {
  // purge: {
  //   content: [
  //     "./src/**/*.js",
  //     "./src/**/*.jsx",
  //     "./src/**/*.ts",
  //     "./src/**/*.tsx",
  //     "./src/**/*.php",
  //   ],
  //   options: {
  //     whitelistPatterns: [/text.*$/],
  //   },
  // },
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
    },
    fontFamily: {
      gilroy: ["Gilroy", "Helvetica", "Arial", "sans-serif"],
      hind: ["Hind", "Helvetica", "Arial", "sans-serif"],
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    lineHeight: {
      sm: 0.9,
      none: 1,
      tight: 1.1,
      snug: 1.2,
      wider: 1.4,
      xl: 2,
    },
    letterSpacing: {
      normal: 0,
      tight: "0.032em",
    },
    spacing: {
      0: "0",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "32px",
      7: "40px",
      8: "64px",
      9: "80px",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "2.25rem",
      "5xl": "2.5rem",
      "6xl": "3rem",
      "7xl": "3.5rem",
      "8xl": "4rem",
      "9xl": "5rem",
      "10xl": "6.25rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1240px",
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: {
        50: "#f4f4f4",
        100: "#e9e9e9",
        200: "#c9c9c9",
        300: "#a8a8a8",
        400: "#666666",
        DEFAULT: "#252525",
        600: "#212121",
        700: "#1c1c1c",
        800: "#161616",
        900: "#121212",
      },
      red: "#E2190C",
      purple: "#C9CEFF",
      green: "#00FFC2",
      gray: "#B3B3B3",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "2rem",
        md: "3rem",
      },
    },
  },
  variants: {
    margin: ["last", "responsive"],
  },
  zIndex: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    60: 60,
    70: 70,
    80: 80,
    90: 90,
    100: 100,
    auto: "auto",
  },
  options: { important: true },
  plugins: [require("tailwindcss-hyphens")],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
