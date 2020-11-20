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
    extend: {
      transitionDuration: {
				0: '0ms',
				300: '300ms',
				500: '500ms',
				700: '700ms',
				1000: '1000ms',
				2000: '2000ms',
				3000: '3000ms',
				10000: '10000ms'
    },
    colors: {
      'accent-1': '#FAFAFA',
      'accent-2': '#EAEAEA',
      'accent-7': '#333',
      black: '#000000',
      white: '#FFFFFF',
      success: '#0070F3',
      cyan: '#79FFE1',
      blizzardBlue: '#B3DDF2',
      chicagoRed: '#FF0000',
      customGray: '#D0D0D0',
      tailwindBlue: '#2298BD',
      tailwindGreen: '#0ED7B5',
      bloodMoon: '#CC6633',
      herokuStroke: '#6762A6',
      gqlPink: '#E535AB',
      devPurple: '#3333CC',
      lighterBlack: '#323232',
      gatsbyPurple: '#663399',
      oneFiveBlack: '#151515',
      eaWhite: '#EAEAEA',
      afWhite: '#AFAFAF',
      fiveOBlack: '#505050',
      offWhite: '#F0F1F2',
      everythingIsBlue: '#007acc',
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
