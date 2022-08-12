module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        degods: ['degods'],
        belygod: ['belygod'],
        justBreathe: ['justbreathe']
      },
      colors:{
        // Background Colors
        light: '#FFEFEB',
        dark: '#0F0F0F',
        container: '#242424',
        // Text Colors
        primary: '#FFFFFF',
        secondary: '#909090',
        alt: 'linear-gradient(98.83deg, #FF7C01 7.13%, #FF5301 48.99%, #A819EB 84.14%)',
        // General DeGod Colors
        degodWhite: '#FFEFEB',
        degodOffWhite: '#7772',
        degodBlack: '#0F0F0F',
        degodOrange: '#FF8A00',
        degodYellow: '#FFF200',
        degodBlue: '#A1B5FF',
        degodPurple: '#6100FF',
        degodGreen: "#37B043",
        degodRed: "#FF3D00",
      },
    },
  },
  plugins: [],
}
