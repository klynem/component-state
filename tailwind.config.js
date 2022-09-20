/** @type {import('tailwindcss').Config} */
module.exports = {
	/**
	 * Hack: The glob was causing an issue so I had to explicitly specify the relative paths.
	 */
	content: [
		"./src/*.jsx",
		"./src/*.js",
		"./src/screens/*.jsx",
		"./src/components/*.jsx",
	],
	theme: {
		extend: {
			colors: {
				background: "#EEEEEE",
			},
		},
	},
	plugins: [],
};
