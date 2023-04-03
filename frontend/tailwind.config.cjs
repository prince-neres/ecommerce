/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
			colors: {
				dark: {
					'text': '#f5f5f5',
					'bg': '#121520',
					'blue': '#385eca',
					'orange': '#FF5722'
				},
				light: {
					'text': '#2d2076',
					'bg': '#f5f5f5',
					'blue': '#2d2076',
					'orange': '#FF5722'
				}
			}
		},
		fontFamily: {
			'inter': ['Inter', 'sans-serif']
		}
  },
  plugins: [
		require('tailwind-scrollbar')({ nocompatible: true }),
		require('@tailwindcss/line-clamp')
	],
	variants: {
        scrollbar: ['rounded']
  },
}
