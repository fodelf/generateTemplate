/*
 * @Description:打包优化配置信息
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-04 17:39:53
 * @LastEditors: 吴文周
<<<<<<< HEAD
 * @LastEditTime: 2019-11-15 09:36:20
=======
 * @LastEditTime: 2019-11-17 12:13:02
>>>>>>> 322686ea65c769446f6771b5acea66322b202a37
 */
import API from './sever/api'
const webpack = require('webpack')
const path = require('path')
const merge = require('deepmerge')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const HappyPack = require('happypack')
const os = require('os')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const happyThreadPool = HappyPack.ThreadPool({
  size: os.cpus().length
})
const ispro = process.env.NODE_ENV !== 'development'
// gizp 压缩资源配置类型
const GzipExtensions = ['js', 'css', 'png', 'jpg']

function resolve (dir) {
  return path.join(__dirname, dir)
}
// 共用插件
const plugins = [
  // dll插件加入
  new webpack.DllReferencePlugin({
    context: process.cwd(),
    manifest: require('./public/vendor/vendor-manifest.json')
  }),
  new AddAssetHtmlPlugin({
    // dll文件位置
    filepath: path.resolve(__dirname, './public/vendor/*.js'),
    // dll 引用路径
    publicPath: './vendor',
    // dll最终输出的目录
    outputPath: './vendor'
  }),
  // 多核配置
  new HappyPack({
    id: 'happy-babel-js',
    loaders: ['babel-loader?cacheDirectory=true'],
    threadPool: happyThreadPool
  })
]
module.exports = {
  // pages: {
  //   // 多页面时可以配置按需打包
  //   index: {
  //     // page 的入口
  //     entry: 'src/pages/main.js',
  //     // 模板来源
  //     template: 'src/pages/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'index.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: '山东退伍军人',
  //     chunks: ['chunk-vendors', 'chunk-common', 'index', 'runtime~index']
  //   }
  // },
  publicPath: ispro ? '' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: '9090',
    open: true,
    hot: false,
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
  },
  css: {
<<<<<<< HEAD
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "@/assets/css/compute.scss";`
      },
      stylus: {
        import: ['~@/style/imports']
      }
    }
=======
    // loaderOptions: {
    // 给 sass-loader 传递选项
    // sass: {
    //   // @/ 是 src/ 的别名
    //   // 所以这里假设你有 `src/variables.scss` 这个文件
    //   data: `@import "@/assets/css/compute.scss";`
    // }
    // }
>>>>>>> 322686ea65c769446f6771b5acea66322b202a37
  },
  configureWebpack: config => {
    // gizp打包资源可以设置为可配置
    let pluginsArry = ispro
      ? plugins.concat([
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + GzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        }),
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log'] // 移除console
            }
          },
          sourceMap: false,
          parallel: true
        })
      ])
      : plugins
    return {
      plugins: pluginsArry
    }
  },
  chainWebpack (config) {
    config.module.rule('stylus').oneOf('vue').use('postcss-loader')
      .tap(options =>
        merge(options, {
          config: {
            path: path.resolve(__dirname, '.postcssrc')
          }
        })
      )
    // 添加别名
    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
    // 可以配置优化引用优化路径暂
    // 多核打包配置
    config.module.rule('js').use.loader = 'happypack/loader?id=happy-babel-js'
    // 图片打包配置
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true,
        disable: true
      })
      .end()

    config.when(ispro, config => {
      config.plugins.delete('prefetch-index')
      // 移除 preload 插件
      config.plugins.delete('preload-index')
      // 插入dell资源
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      // 资源分离与抽取规则
      config.optimization.splitChunks({
        // 默认值是30kb
        minSize: 30000,
        // 被多少模块共享
        minChunks: 1,
        // 所有异步请求不得超过5个
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        cacheGroups: {
          default: false,
          vendors: false,
          chunk: {
            test: resolve('src'),
            chunks: 'all',
            enforce: false,
            priority: 10,
            name: 'chunk-vendors',
            reuseExistingChunk: true
          },
          common: {
            chunks: 'all',
            minChunks: 2,
            name: 'chunk-common',
            enforce: false,
            priority: 5
          }
          // runtime: {
          //   name: 'runtime~index',
          //   reuseExistingChunk: true,
          //   enforce: true,
          //   priority: 5
          // }
        }
      })
      // 默认配置多页面模式保证可扩展性
      config.optimization.runtimeChunk('multiple')
    })
  }
}
