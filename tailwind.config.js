/** Tailwind config — mirrors the previous Play-CDN inline config exactly.
 *  Used to precompile a static stylesheet so the browser no longer loads the
 *  ~124 KiB render-blocking Tailwind CDN runtime. Build: npm run build:css */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        ink: '#0A0A0A',
        charcoal: '#1C1C1C',
        slate: '#3A3A3A',
        stone: '#6B6B6B',
        silver: '#ABABAB',
        linen: '#F7F5F2',
        'warm-white': '#FAFAF8',
      },
    },
  },
  plugins: [],
};
