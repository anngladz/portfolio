/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('shattered.png')",
      },
      keyframes: {
        flash: {
          '0%, 50%': {
            opacity: '0',
          },

          '51%, 100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        flash: 'flash 1s linear infinite',
      },
    },
  },
  plugins: [],
};
