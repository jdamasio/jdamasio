import path from 'path'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'

require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  htmlAttrs: {
    lang: 'pt-BR'
  },
  head: {
    title: 'CasaViva - Incorporadora e Construtora',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A conquista da casa nova começa por aqui'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500;600;700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#cf0025' },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/scss/styleguide.scss',
    '@/assets/scss/fonts.scss',
    '@/assets/scss/cv-icons-font.scss'
  ],
  styleResources: {
    scss: ['@/assets/scss/*.scss']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/element-ui'
    },
    {
      src: '@/plugins/lightbox',
      ssr: false
    },
    {
      src: '@/plugins/bus'
    },
    {
      src: '@/plugins/vClickOutside',
      ssr: false
    },
    {
      src: '@/plugins/utils',
      ssr: false
    },
    {
      src: '@/plugins/filters'
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-compress'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  router: {
    mode: 'history'
  },
  'nuxt-compress': {
    gzip: {
      cache: true
    }
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    publicPath: 'https://casaviva-prod.s3.amazonaws.com/public/current-build',
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      if (!isDev && isClient) {
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            whitelist: ['html', 'body']
          })
        )
      }
    }
  }
}
