/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        chart: {
          '1': 'var(--chart-1)',
          '2': 'var(--chart-2)',
          '3': 'var(--chart-3)',
          '4': 'var(--chart-4)',
          '5': 'var(--chart-5)',
        },
        pixel: {
          cyan: '#00fff7',
          magenta: '#ff00ff',
          lime: '#39ff14',
          yellow: '#ffff00',
          orange: '#ff6600',
          red: '#ff0040',
          blue: '#0066ff',
          purple: '#9d00ff',
          gold: '#ffd700',
          dark: '#0a0a0f',
          darker: '#050508',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        'pixel-body': ['VT323', 'monospace'],
        retro: ['Silkscreen', 'cursive'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'neon-flicker': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor',
          },
          '20%, 24%, 55%': {
            textShadow: 'none',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-neon': {
          '0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 5px currentColor)' },
          '50%': { filter: 'brightness(1.5) drop-shadow(0 0 15px currentColor)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'pixel-shake': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-2px, 2px)' },
          '50%': { transform: 'translate(2px, -2px)' },
          '75%': { transform: 'translate(-2px, -2px)' },
        },
        'coin-spin': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        'border-dance': {
          '0%': { borderColor: '#00fff7' },
          '33%': { borderColor: '#ff00ff' },
          '66%': { borderColor: '#39ff14' },
          '100%': { borderColor: '#00fff7' },
        },
      },
      animation: {
        'neon-flicker': 'neon-flicker 3s infinite alternate',
        float: 'float 3s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        'pixel-shake': 'pixel-shake 0.15s infinite',
        'coin-spin': 'coin-spin 1s linear infinite',
        'border-dance': 'border-dance 1s linear infinite',
      },
    },
  },
  plugins: [],
}
