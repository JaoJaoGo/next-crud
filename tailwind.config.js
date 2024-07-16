/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    {
      pattern: /bg-(blue|green|gray)-(500|700)/,
      pattern: /from-(blue|green|gray)-(500|700)/,
      pattern: /to-(blue|green|gray)-(500|700)/,
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

