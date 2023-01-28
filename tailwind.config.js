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
		},
  },
  plugins: [],
}
