/*
 * @Description: 描述
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2019-11-18 08:40:40
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-26 16:29:20
 */
const bodyParser = require('body-parser')
const folders = require('./folders')
const fs = require('fs-extra')
const mutipart = require('connect-multiparty')
const mutipartMiddeware = mutipart()
const proxy = require('http-proxy-middleware')
const _ = require('lodash')
const path = require('path')
const prettierTslint = require('prettier-tslint')
const isPlatformWindows = process.platform.indexOf('win') === 0
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
        try {
          prettierTslint.fix(outPath)
        } catch (error) {
          console.log(error)
        }
        res.json({ data: '' })
      })
    })
  })
}

function generateTs (app) {
  app.post('/api/generateTs', function (req, res) {
    let swagger = req.body.swagger
    // let outPath = path.join(__dirname, './template/interfaces1.ts')
    let outPath = isPlatformWindows ? (req.body.path + '\\interfaces.ts') : (req.body.path + '/interfaces.ts')
    // 读取模板文件，并修改内容
    let templateString = fs.readFileSync(
      path.join(__dirname, './template/interfaces.ts'),
      'utf8'
    )
    let swaggerList = []
    let includesAny = ['file']
    for (let k of swagger) {
      let arry = k.data.parameters
      if (Array.isArray(arry)) {
        let child = {}
        arry.map(item => {
          if (item.type === 'integer') {
            item.type = 'number'
          } else if (item.type === 'array') {
            // item.type = 'Array&lt;any&gt;'
            item.type = 'any'
          } else if (includesAny.includes(item.type) || !item.type) {
            item.type = 'any'
          }
          return item
        })
        child['parameters'] = arry
        child['ClassName'] = k.data.operationId.replace(k.data.operationId[0], k.data.operationId[0].toUpperCase())
        child['desc'] = k.data.summary
        swaggerList.push(child)
      }
    }
    // let pathObject = swagger.paths
    // let includesAny = ['file']
    // for (var k in pathObject) {
    //   if (pathObject[k].post) {
    //     let post = pathObject[k].post
    //     let arry = post.parameters
    //     if (Array.isArray(arry)) {
    //       let child = {}
    //       arry.map(item => {
    //         if (item.type === 'integer') {
    //           item.type = 'number'
    //         } else if (item.type === 'array') {
    //           // item.type = 'Array&lt;any&gt;'
    //           item.type = 'any'
    //         } else if (includesAny.includes(item.type) || !item.type) {
    //           item.type = 'any'
    //         }
    //         return item
    //       })
    //       child['parameters'] = arry
    //       child['ClassName'] = post.operationId.replace(post.operationId[0], post.operationId[0].toUpperCase())
    //       child['desc'] = post.summary
    //       swaggerList.push(child)
    //     }
    //   }
    // }
    var compiled = _.template(templateString)
    let content = compiled({
      attrs: swaggerList
    })
    console.log(outPath)
    fs.outputFile(outPath, content, function () {
      prettierTslint.fix(outPath)
      let templateString1 = fs.readFileSync(outPath, 'utf8')
      res.json({ data: templateString1 })
    })
  })
}

function API (app) {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json({ 'limit': '5000000kb' }))
  getCatalogue(app)
  getList(app)
  upload(app)
  generateTs(app)
  var options = {
    target: 'http://172.23.0.187:8186/'
  }
  var exampleProxy = proxy(options)
  app.use('/v2/api-docs', exampleProxy)
}

module.exports = API
