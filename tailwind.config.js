import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: { 
			fontFamily: {
				sofia: ['"Sofia Sans Extra Condensed"', 'sans-serif'],
			},
		}
	},

	plugins: [typography, forms]
};
