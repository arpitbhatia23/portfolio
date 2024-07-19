export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {cursive:['Great Vibes']
      },
      keyframes: {
        neon: {
          '0%, 100%': { boxShadow: '0 0 10px #ff00ff, inset 0 0 15px #ff00ff' },
          '25%': { boxShadow: '0 0 10px #00ffff, inset 0 0 15px #00ffff' },
          '50%': { boxShadow: '0 0 10px #00ff00, inset 0 0 15px #00ff00' },
          '75%': { boxShadow: '0 0 10px #ffff00, inset 0 0 15px #ffff00' },
        },
        move: {
          '0%, 100%': { borderColor: '#ff00ff' },
          '25%': { borderColor: '#00ffff' },
          '50%': { borderColor: '#00ff00' },
          '75%': { borderColor: '#ffff00' },
        },
      },
      animation: {
        neon: 'neon 1s linear infinite',
        move: 'move 1s linear infinite',
      },
    
    },
    
      
    },
  
  plugins: [],
}

