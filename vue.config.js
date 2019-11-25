/*
 * @Description: 描述
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2019-11-19 08:46:03
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-25 09:10:46
 */
const API = require('./server/api')
module.exports = {

  pages: {
    // 多页面时可以配置按需打包
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'easyGenerate',
      chunks: ['chunk-vendors', 'chunk-common', 'index', 'runtime~index']
    }
  },
  lintOnSave: false,
  devServer: {
    port: '9090',
    open: true,
    hot: true,
    inline: true,
    disableHostCheck: false,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: {
    //   // '/*': {
    //   //   target: '',
    //   //   ws: false
    //   // }
    // },
    setup (app) {
      API(app)
    }
  }
}
