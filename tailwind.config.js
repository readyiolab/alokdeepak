/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': 'var(--primary-50)',
  				'100': 'var(--primary-100)',
  				'200': 'var(--primary-200)',
  				'300': 'var(--primary-300)',
  				'400': 'var(--primary-400)',
  				'500': 'var(--primary-500)',
  				'600': 'var(--primary-600)',
  				'700': 'var(--primary-700)',
  				'800': 'var(--primary-800)',
  				'900': 'var(--primary-900)',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': 'var(--secondary-50)',
  				'100': 'var(--secondary-100)',
  				'200': 'var(--secondary-200)',
  				'300': 'var(--secondary-300)',
  				'400': 'var(--secondary-400)',
  				'500': 'var(--secondary-500)',
  				'600': 'var(--secondary-600)',
  				'700': 'var(--secondary-700)',
  				'800': 'var(--secondary-800)',
  				'900': 'var(--secondary-900)',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				'50': 'var(--accent-50)',
  				'100': 'var(--accent-100)',
  				'200': 'var(--accent-200)',
  				'300': 'var(--accent-300)',
  				'400': 'var(--accent-400)',
  				'500': 'var(--accent-500)',
  				'600': 'var(--accent-600)',
  				'700': 'var(--accent-700)',
  				'800': 'var(--accent-800)',
  				'900': 'var(--accent-900)',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			neutral: {
  				'50': 'var(--neutral-50)',
  				'100': 'var(--neutral-100)',
  				'200': 'var(--neutral-200)',
  				'300': 'var(--neutral-300)',
  				'400': 'var(--neutral-400)',
  				'500': 'var(--neutral-500)',
  				'600': 'var(--neutral-600)',
  				'700': 'var(--neutral-700)',
  				'800': 'var(--neutral-800)',
  				'900': 'var(--neutral-900)'
  			},
  			success: 'var(--success)',
  			warning: 'var(--warning)',
  			error: 'var(--error)',
  			text: {
  				primary: 'var(--text-primary)',
  				secondary: 'var(--text-secondary)',
  				tertiary: 'var(--text-tertiary)'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Open Sans',
  				'system-ui',
  				'sans-serif'
  			],
  			heading: [
  				'Poppins',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		boxShadow: {
  			soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  			medium: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  		},
  		spacing: {
  			'72': '18rem',
  			'84': '21rem',
  			'96': '24rem'
  		},
  		zIndex: {
  			'60': '60',
  			'70': '70',
  			'-10': '-10'
  		},
  		transitionDuration: {
  			'400': '400ms'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [animate],
};