/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				white: "#fffcf7",
				black: {
					900: '#24282a',
					800: '#5b5e5f',
					700: '#929394',
					600: '#c8c9ca',
					500: '#E9E9EA',
					400: '#f4f4f4',
				},
				primary: '#16abff',
				secondary: '#0a24ff',
				tertiary: '#051280',
			},
			fontFamily: {
				paragraph: ['Raleway', 'sans-serif'],
				heading: ['Josefin Sans']
			},
			fontSize: {
				sm: '1rem',
				md: '1.333rem',
				lg: '1.777rem',
				xl: '2.37rem',
				'2xl': '3.15rem',
				'3xl': '4.19rem',
				'4xl': '5.58rem',
				tablet: {
					sm: '0.85rem',
					md: '1.125rem',
					lg: '1.5rem',
					xl: '1.99rem',
					'2xl': '2.65rem',
					'3xl': '3.52rem',
					'4xl': '4.68rem',
				},
				mobile: {
					sm: '0.9rem',
					md: '1.125rem',
					lg: '1.4rem',
					xl: '1.76rem',
					'2xl': '2.2rem',
					'3xl': '2.75rem',
					'4xl': '3.4rem',
				}
			}
		},
  },
  plugins: [],
}
