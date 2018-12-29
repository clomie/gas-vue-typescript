const productionConfig = {
  chainWebpack: config => {
    // make inline images
    config.module
      .rule('images')
      .use('url-loader')
      .options({})

    // make inline media
    config.module
      .rule('media')
      .use('url-loader')
      .options({})

    // make inline fonts
    config.module
      .rule('fonts')
      .use('url-loader')
      .options({})

    // make inline svg
    config.module
      .rule('svg')
      .uses.delete('file-loader')
      .end()
      .use('url-loader')
      .loader('url-loader')
      .options({})

    // disable prefetch and preload
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')

    // Get npm modules from CDN
    config.plugin('webpack-cdn').use(require('webpack-cdn-plugin'), [
      {
        modules: [
          {
            name: 'vue',
            var: 'Vue',
            path: 'dist/vue.runtime.min.js'
          },
          {
            name: 'vue-router',
            var: 'VueRouter',
            path: 'dist/vue-router.min.js'
          },
          {
            name: 'vuetify',
            var: 'Vuetify',
            path: 'dist/vuetify.min.js',
            style: 'dist/vuetify.min.css'
          }
        ]
      }
    ])

    // Make js and css inline into index.html
    config
      .plugin('html-inline-source')
      .use(require('html-webpack-inline-source-plugin'))

    // html minify settings for GAS
    config.plugin('html').tap(args => {
      args[0].inlineSource = '(/css/.+\\.css|/js/.+\\.js)'
      args[0].minify.removeAttributeQuotes = false
      args[0].minify.removeScriptTypeAttributes = false
      return args
    })
  },
  configureWebpack: {
    devtool: 'inline-source-map',
    externals: {
      'vuetify/dist/vuetify.min.css': 'undefined'
    }
  },
  css: {
    sourceMap: true
  }
}

process.env.VUE_APP_BUILD_TIMESTAMP = new Date().toISOString()

module.exports = process.env.NODE_ENV === 'production' ? productionConfig : {}
