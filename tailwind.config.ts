import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			small: '320px',
			medium: '768px',
			large: '1440px'
		},
		extend: {
			fontFamily: {
				arboria: 'var(--font-arboria)'
			},
			colors: {
				dark: '#273340',
				gray: '#EFEFEF',
				'light-gray': '#F8F8F8',
				'orange-primary': '#FC9F00',
				darkslategray: '#27334026',
				tomato: '#EE4C4C'
			}
		}
	},
	plugins: []
};
export default config;
