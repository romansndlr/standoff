module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      keyframes: {
        'scale-down': {
          '0%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'scale-down': 'scale-down 300ms ease-out running',
      }
    },
  },
  plugins: [],
}
