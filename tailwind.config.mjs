/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'black-russian': {
					'50': '#e4e4ff',
					'100': '#d0cfff',
					'200': '#ada8ff',
					'300': '#8174ff',
					'400': '#653eff',
					'500': '#5913ff',
					'600': '#5200ff',
					'700': '#5200ff',
					'800': '#4900e4',
					'900': '#3f00b0',
					'950': '#0a001a',
				},
				'mint-tulip': {
					'50': '#f0fdf9',
					'100': '#c6fcec',
					'200': '#97f8de',
					'300': '#5aeecb',
					'400': '#29d8b3',
					'500': '#10bc9b',
					'600': '#09987f',
					'700': '#0c7967',
					'800': '#0f6054',
					'900': '#115046',
					'950': '#03302b',
				},
			},
			keyframes: {
				pulse: {
					'0%': { 
						transform: 'scale(1)',
						boxShadow: '0 0 0 0 rgb(101 62 255 / var(--tw-bg-opacity))',
						opacity: 1
					},
					'50%': { 
						transform: 'scale(1.1)', 
						boxShadow: '0 0 15px 15px rgba(52, 152, 219, 0)',
						opacity: 1
					},
					'100%': { 
						transform: 'scale(1)', 
						boxShadow: '0 0 0 0 rgba(52, 152, 219, 0)',
						opacity: 1
					},
				},
			},
			animation: {
				pulse: 'pulse 2s infinite',
			},
		},
	},
	plugins: [],
}
