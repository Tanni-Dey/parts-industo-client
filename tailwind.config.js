module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'Oswald'],
      'serif': ['ui-sans-serif', 'Nanum Gothic']
    },
    extend: {

      backgroundImage: {
        'svg': "url('/src/image/svg.png')",
      }

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1e3a8a",

          "secondary": "#f97316",

          "accent": "#d1d5db",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
}
