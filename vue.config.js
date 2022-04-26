// vue.config.js
const tsImportPluginFactory = require('ts-import-plugin');
const proxy = require('./src/config/proxy.ts');
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_PUBLIC_PATH,

  chainWebpack: config => {
    // config.optimization.minimizer('terser')
    config.when(process.env.NODE_ENV === 'production', config => {
      config.optimization.minimizer('terser').tap(arg => {
        arg[0].terserOptions.compress.drop_console = true
        return arg
      })
    })
  },

  devServer: {
    port: 8100,
    proxy: proxy[process.env.VUE_APP_ENV],
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  
  parallel: false,
})
