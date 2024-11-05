const { defineConfig } = require('@vue/cli-service')
const path = require('path')
// import path from "path"


module.exports = defineConfig({
  chainWebpack: config => {
    config.resolve.alias
      .set('~', path.resolve(__dirname, 'src'))
  },
  
  transpileDependencies: true,
  lintOnSave:false,
})
