/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'openSans': ['Open Sans', 'sans-serif']
      },
      colors:{
        'heading': '#11175D',
        'primary': '#5F35F5'
      }
    },
  },
  plugins: [],
}

