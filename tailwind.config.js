module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: [
    'components/**/*.vue',
    'content/**/*.md',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js'
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--bg)',
          text: 'var(--text)',
          accent: 'var(--accent)',
          line: 'var(--line)',
          fill: 'var(--fill)'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
