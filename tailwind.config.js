/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: '#3498db', // Sky Blue
        secondary: '#2ecc71', // Mint Green
        background: '#ecf0f1', // Light Gray
        text: '#2c3e50', // Dark Gray
        containerBg: '#ffffff', // White for section backgrounds
        containerBorder: '#bdc3c7', // Gray for borders
        accent: '#f1c40f', // Golden Yellow
        success: '#27ae60', // Emerald
        danger: '#e74c3c', // Red
        darkMode: {
          primary: '#2980b9', // Blue
          secondary: '#27ae60', // Green
          background: '#2c3e50', // Dark Gray
          text: '#ecf0f1', // Light Gray
          containerBg: '#34495e', // Dark Gray for section backgrounds
          containerBorder: '#2c3e50', // Darker Gray for borders
          accent: '#f39c12', // Orange
          success: '#2ecc71', // Mint Green
          danger: '#c0392b', // Dark Red
        },
      },
    },
  },
  plugins: [],
}