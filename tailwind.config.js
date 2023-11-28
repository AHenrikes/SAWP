/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // Responsive most common screen sizes
      'mobile': '0px',
      'tablet': '1024',
      'desktop': '1440px'
    },
    // The project's color palette
    colors: {
      // Background colors
      'mainColor': '#001120',
      'mainSubColor': '#000c18',
      'mainLinearStart': '#000c18',
      'mainLinearEnd': '#001120',
      // Text colors
      'textColor1': '#ffffff',
      'textColor2': '#808080',
      // Border colors
      'borderColor1': '#003360',
      // Border gradient colors
      'borderGradientStart': '#000585',
      'borderGradientEnd': '#85006F'
    },
    extend: {},
  },
  plugins: [],
}
