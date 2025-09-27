import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  // Evita que Tailwind purgue utilidades usadas dentro del <svg>
  safelist: [
    'fill-blue-100',
    'fill-blue-900',
    'fill-white',
    'fill-slate-300',
    'fill-slate-600',
    'fill-slate-900',
    'stroke-slate-300',
    'text-base',
    'text-sm',
    'text-[14px]',
    'text-[12px]',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'font-bold',
    'font-extrabold'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f7ff',
          100: '#e3efff',
          200: '#c1dbff',
          300: '#9ec6ff',
          400: '#5a9eff',
          500: '#2f7fff', // primary
          600: '#1c65e0',
          700: '#174fb3',
          800: '#153f8f',
          900: '#122f6b'
        }
      }
    }
  },
  plugins: []
} satisfies Config
