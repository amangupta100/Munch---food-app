/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      'desktop':{'max':"2400px"},
      'laptop':{'max':'2200px'},
      'lD':{'max':'1025px'},
      'mtb': {'max': '880px'},
      'tb': {'max': '768px'},
      'lm': {'max': '426px'},
      'mdm': {'max': '375px'},
      'sm': {'max': '320px'},
    }
  },
  plugins: [],
}

