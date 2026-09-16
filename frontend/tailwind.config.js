/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#07111F', secondary: '#0D1B2A', card: '#102438' },
        ink: { primary: '#FFFFFF', secondary: '#A8B7C9' },
        accent: { blue: '#38BDF8', cyan: '#22D3EE', violet: '#818CF8' },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.25)',
        'glow-cyan': '0 0 40px rgba(34, 211, 238, 0.25)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(168,183,201,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(168,183,201,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
