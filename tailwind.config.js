/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			screens: {
				sm: '556px',
				md: '720px',
				lg: '960px',
				xl: '1180px',
			},
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
				sm: '1vw',
				md: '1.333vw',
				lg: '1.78vw',
				xl: '2.37vw',
				'2xl': '3.15vw',
				'3xl': '4.19vw',
				'4xl': '5.58vw',
				'5xl': '7.44vw',
				'6xl': '9.92vw',
			},
			boxShadow: {
				'card-front': '-1px 12px 32px -2px rgba(10, 36, 255, 0.3)',
				'card-back': '-1px 12px 32px -2px rgba(22, 171, 255, 0.7)'
			}
		},
  },
  plugins: [],
}
