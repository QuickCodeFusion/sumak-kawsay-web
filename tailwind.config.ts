/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: {
          DEFAULT: 'hsl(var(--border))',
          secondary: 'hsl(var(--border-secondary))'
        },
        shadow: 'hsl(var(--shadow))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        'background-color': 'hsl(var(--background-color))',
        background: 'hsl(var(--background)) ',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsla(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        egg: {
          50: '#fff8ed',
          100: '#fff3dd',
          200: '#feddaa',
          300: '#fdc474',
          400: '#fba03c',
          500: '#f98416',
          600: '#ea690c',
          700: '#c24f0c',
          800: '#9a3e12',
          900: '#7c3512',
          950: '#431907'
        },
        'vivid-violet': {
          50: '#fbf6fd',
          100: '#f4edfa',
          200: '#ead9f5',
          300: '#dbbbec',
          400: '#c692e0',
          500: '#ac67ce',
          600: '#9048b1',
          700: '#813d9c',
          800: '#643078',
          900: '#552c63',
          950: '#34133f'
        },
        'azure-radiance': {
          50: '#f0f8fe',
          100: '#dceffd',
          200: '#c2e3fb',
          300: '#97d3f9',
          400: '#66baf4',
          500: '#439cee',
          600: '#3584e4',
          700: '#256ad0',
          800: '#2455a9',
          900: '#224a86',
          950: '#192e52'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
