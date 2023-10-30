/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-50": "#F9F9F9",
        "neutral-100": "#F4F4F4",
        "neutral-200": "#E4E4E4",
        "neutral-300": "#D3D3D3",
        "neutral-400": "#A2A2A2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0A0A0A",
        "neutral-1000": "#000000",
        "twitter-blue-default": "#1D9BF0",
        "twitter-blue-hover": "#1871CA",
        "twitter-blue-disabled": "#1E5D87",
        "blue-wash": "rgba(117, 190, 239, 0.2)",
        "button-stroke": "#546A7A",
        "searchbar-fill": "#212327",
        "card-fill": "#16181C",
        "green-success": "#00BE74",
        "red-error": "#8B141A",
        "stroke": "rgba(29, 155, 240, 0.24)"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      padding: {
        "small-1": "8px 20px",
        "medium-1": "8px 24px",
        "large-1": "12px 24px",
        "small-2": "12px 24px",
        "medium-2": "15px 93px",
        "large-2": "20px",
        "small-3": "6px 16px",
      },
      width: {
        "button-medium": "334px",
        "button-large": "442px",
        "input-1": "426px",
        "input-2": "434px",
        "input-3": "348px",
      },
      borderRadius: {
        "button-small": "30px",
        "button-medium": "65px",
      },
      boxShadow: {
        button: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
      }
    },
  },
  plugins: [],
}