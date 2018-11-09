const productionConfig = {
  chainWebpack: config => {
    // make inline images
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => {
        delete options.limit
        return options
      })

    // make inline svgs
    const svgFileLoaderConfig = config.module
      .rule('svg')
      .use('file-loader')
      .toConfig()
    config.module.rule('svg').uses.delete('file-loader')
    config.module
      .rule('svg')
      .use('url-loader')
      .loader('url-loader')
      .options({
        fallback: svgFileLoaderConfig
      })

    // make inline medias
    config.module
      .rule('media')
      .use('url-loader')
      .tap(options => {
        delete options.limit
        return options
      })

    // make inline fonts
    config.module
      .rule('fonts')
      .use('url-loader')
      .tap(options => {
        delete options.limit
        return options
      })

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
    extract: false,
    sourceMap: true
  }
}

module.exports = process.env.NODE_ENV === 'production' ? productionConfig : {}
