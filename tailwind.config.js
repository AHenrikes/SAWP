/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // Responsive most common screen sizes
      xsm: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xlg: '1280px',
      xxlg: '1440px'
    },
    // The project's color palette
    colors: {
      // Background colors
      mainColor: '#001120',
      mainSubColor: '#000c18',
      mainLinearStart: '#000c18',
      mainLinearEnd: '#001120',
      outputContainer: '#001323',
      outputFill: '#00182D',
      inputFill: '#001420',
      // Text colors
      textColor1: '#ffffff',
      textColor2: '#808080',
      // Border colors
      borderColor1: '#003360',
      // Border gradient colors
      borderGradientStart: '#000585',
      borderGradientEnd: '#85006F'
    },
    // Drop Shadow 
    dropShadow: {
      mainShadow: '0px 4px 4px rgba(255, 255, 255, 0.25)'
    },
    // Imported fonts
    fontFamily: {
      krona: ['"Krona One"', 'sans-serif'],
      orbitron: ['Orbitron', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
