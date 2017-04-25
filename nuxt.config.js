module.exports = {
  srcDir: 'src/',
  /*
   ** Headers of the page
   */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend(config, { dev, isClient }) {
      config.resolve.alias.src = `${process.cwd()}/src`;

      if (isClient && !dev) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
    vendor: [
      'vue-class-component',
    ],
    babel: {
      presets: ['vue-app', 'stage-0', 'es2015'],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties',
      ],
    },
  },
};
