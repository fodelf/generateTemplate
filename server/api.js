/*
 * @Description: 描述
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2019-11-18 08:40:40
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-25 11:40:57
 */
const bodyParser = require('body-parser')
const folders = require('./folders')
const fs = require('fs-extra')
const mutipart = require('connect-multiparty')
const mutipartMiddeware = mutipart()
const proxy = require('http-proxy-middleware')
const _ = require('lodash')
const path = require('path')
// const isPlatformWindows = process.platform.indexOf('win') === 0
/**
 * @name: getCatalogue
 * @description: 获取当前目录
 * @param {type}: 默认参数
 * @return {type}: 默认类型
 */
function getCatalogue (app) {
  app.post('/api/getCatalogue', (req, res) => {
    let currget = folders.getCurrent()
    console.log('ssss')
    console.log({ 'data': currget })
    res.json({ 'data': currget })
  })
}
/**
 * @name: getList
 * @description: 获取文件列表
 * @param {type}: 默认参数
 * @return {type}: 默认类型
 */
function getList (app) {
  app.post('/api/getCatalogueList', (req, res) => {
    let base = req.body.path
    console.log(base)
    folders.list(base).then((data) => {
      res.json({ 'data': data })
    }).catch(() => {
      res.json({ 'data': [] })
    })
  })
}

/**
 * @name: getList
 * @description: 获取文件列表
 * @param {type}: 默认参数
 * @return {type}: 默认类型
 */
function upload (app) {
  app.post('/api/upload', mutipartMiddeware, function (req, res) {
    const file = req.files.file
    console.log(file)
    fs.readFile(file.path, 'utf8', function (err, data) {
      console.log(err)
      let outPath = folders.getCurrent().path + '/server/template/' + file.originalFilename
      console.log(outPath)
      fs.outputFile(outPath, data, function () {
        res.json({ data: '' })
      })
    })
  })
}

function generateTs (app) {
  app.post('/api/generateTs', function (req, res) {
    let swagger = req.body.swagger
    let outPath = path.join(__dirname, './template/interfaces1.ts')
    // 读取模板文件，并修改内容
    let templateString = fs.readFileSync(
      path.join(__dirname, './template/interfaces.ts'),
      'utf8'
    )
    let swaggerList = []
    let pathObject = swagger.paths
    console.log(pathObject)
    for (var k in pathObject) {
      if (pathObject[k].post) {
        swaggerList.push(pathObject[k].post.parameters)
      }
    }
    console.log(swaggerList)

    var compiled = _.template(templateString)
    let content = compiled({
      attrs: swaggerList
    })
    console.log(content)
    fs.outputFile(outPath, content, function () {
      res.json({ data: 'cc' })
    })
  })
}

function API (app) {
  app.use(bodyParser.urlencoded({ extended: true }))
  // app.use(bodyParser.json())
  app.use(bodyParser.json({ 'limit': '5000000kb' }))
  getCatalogue(app)
  getList(app)
  upload(app)
  // getSwagger(app)
  generateTs(app)
  var options = {
    // pathRewrite: {'^/static' : ''},
    target: 'http://172.23.0.187:8186/' // 目标服务器 host
    // changeOrigin: true, // 默认false，是否需要改变原始主机头为目标URL
    // ws: true // 是否代理websockets
    // pathRewrite: {
    //   '^/api/old-path': '/api/new-path', // 重写请求，比如我们源访问的是api/old-path，那么请求会被解析为/api/new-path
    //   '^/api/remove/path': '/path' // 同上
    // },
    // router: {
    //   // 如果请求主机 == 'dev.localhost:3000',
    //   // 重写目标服务器 'http://www.example.org' 为 'http://localhost:8000'
    //   'dev.localhost:3000': 'http://localhost:8000'
    // }
  }

  var exampleProxy = proxy(options)
  app.use('/v2/api-docs', exampleProxy)
}

module.exports = API
