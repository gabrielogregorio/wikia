module.exports = {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Roboto', 'Arial', 'sans-serif'],
        cursive: ['RubikVinyl', 'sans-serif'],
        serif: ['Mukta'],
        mono: ['"Fira Code"', 'ui-monospace'],
        display: ['Oswald'],
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
      },
      backgroundImage: {
        homepage: "url('/ocean-4346633_1920.webp')",
      },
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
