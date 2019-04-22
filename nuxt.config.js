const pkg = require('./package')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css?family=Karla",
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#0F0'
  },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vuetify',
    {
      src: '~/plugins/fullpage',
      ssr: false
    },
    {
      src: '~/plugins/vue-lazyload',
      ssr: false
    },
    {
      src: '~plugins/vue-particles.js',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-babel'],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^dom-classes/]
          })
        ]
      }
    }
  }
}
