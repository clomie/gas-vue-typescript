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

    // html minify settings for GAS
    config.plugin('html').tap(args => {
      args[0].inject = false
      args[0].minify.removeAttributeQuotes = false
      args[0].minify.removeScriptTypeAttributes = false
      return args
    })
  },
  configureWebpack: {
    devtool: 'inline-source-map',
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuetify: 'Vuetify',
      'vuetify/dist/vuetify.min.css': 'undefined'
    }
  },
  css: {
    sourceMap: true
  }
}

process.env.VUE_APP_BUILD_TIMESTAMP = new Date().toISOString()

module.exports = process.env.NODE_ENV === 'production' ? productionConfig : {}
