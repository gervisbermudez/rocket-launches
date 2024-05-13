/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
		colors: {
			white: "rgb(224 224 224)",
			black: "rgba(18, 18, 18, 1)",
			surface: {
				100: "rgb(44 44 46)",
			},
			gray: {
				100: "rgb(200, 200, 200)",
				200: "rgb(153, 153, 153)",
				300: "rgb(130, 130, 130)",
				400: "rgb(105, 105, 105)",
				500: "rgb(82, 82, 82)",
			},
			DP: {
				100: "rgb(30, 30, 30)",
				200: "rgb(35 35 35)",
				300: "rgb(63 63 63)",
				400: "rgb(70 70 70)",
				500: "rgb(75 75 75)",
			},
		},
	},
	plugins: [],
};
