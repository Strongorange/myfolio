/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typingCursor: {
          from: {
            borderRight: "2px solid white",
          },
          to: { borderRight: "2px solid black" },
        },
        fadeOnMain: {
          "0%": {
            opacity: 0,
            transform: "translateY(3rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0rem) ",
          },
        },

        bgGradient: {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
      },
      animation: {
        typingCursor: "typingCursor 0.5s ease-in-out 0ms 4",
        typingCursor2: "typingCursor 0.2s ease-in-out 1000ms 12",
        typingCursor3: "typingCursor 0.2s ease-in-out 3500ms 2",
        typingCursor4: "typingCursor 0.2s ease-in-out 4000ms 3",
        fadeOnMain: "fadeOnMain 2s ease-in-out 0ms 1",
        gradient_x: "bgGradient 3s ease infinite",
      },
    },
  },
  plugins: [],
};
