module.exports = {
  import: true,
  future: {
    removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
  },
  purge: {
		content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}']
	},
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
			0: '0deg',
			45: '45deg',
			90: '90deg',
			125: '125deg',
			180: '180deg',
			360: '360deg',
      855: '845deg'
    },
    inset: {
			0: '0px',
			auto: 'auto',
			'1/4': '25%',
			'1/3': '33.33%',
			'1/2': '50%',
			'3/4': '75%',
			5: '5vw',
			10: '10vw',
			20: '20vw',
			30: '30vw',
			40: '40vw',
			50: '50vw',
			60: '60vw',
			70: '70vw',
			80: '80vw'
		},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
