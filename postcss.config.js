module.exports = {
  plugins: {
    // Automatically add vendor prefixes to CSS rules
    'autoprefixer': {
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'not dead',
      ],
    },

    // Minify CSS for production
    'cssnano': process.env.NODE_ENV === 'production' ? {} : false,

    // Enable CSS nesting (future CSS feature)
    'postcss-nesting': {},

    // Enable custom properties (CSS variables) polyfill
    'postcss-custom-properties': {},

    // Enable modern CSS features like `:focus-visible`
    'postcss-preset-env': {
      stage: 3, // Enable stable features
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'focus-visible-pseudo-class': true,
      },
    },

    // Enable importing CSS files
    'postcss-import': {},

    // Enable advanced media queries
    'postcss-media-minmax': {},

    // Enable custom selectors
    'postcss-custom-selectors': {},
  },
};
