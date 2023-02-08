/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'shadow-desktop' : "url('../images/bg-pattern-desktop.svg')",
        'img-desktop' : "url('../images/illustration-woman-online-desktop.svg')",
        'chevron-down' : "url('../images/icon-arrow-down.svg')",
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}