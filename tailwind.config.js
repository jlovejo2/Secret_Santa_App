module.exports = {
  import: true,
  future: {
    removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
  }
  purge: {
		content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}']
	},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
