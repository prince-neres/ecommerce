/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				dark: {
					'text': '#f5f5f5',
					'bg': '#121520',
					'theme': '#385eca'
				},
				light: {
					'text': '#2d2076',
					'bg': '#f5f5f5',
					'theme': '#2d2076'
				}
			}
		},
		fontFamily: {
			'inter': ['Inter', 'sans-serif']
		}
  },
  plugins: [
		require('tailwind-scrollbar')({ nocompatible: true }),
	],
	variants: {
        scrollbar: ['rounded']
  },
}
