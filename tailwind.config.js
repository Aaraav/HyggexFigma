/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        customBlue: '#0a3282',
        next:'#696671',
        next2:'#109AFF',
        next3:'#06286E ',
        next4:' #164EC0'
      },
      
      spacing: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '100':'36%',
        '712':'712px',
        'max':'36%',
        'full':'10%'

        
        // Add more pixel values as needed
      },
    },
  },
  plugins: [],
}

