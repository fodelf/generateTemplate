/*
 * @Description: 描述
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2019-11-18 08:40:40
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-19 22:27:21
 */
const bodyParser = require('body-parser')
const folders = require('./folders')
const fs = require('fs-extra')
const mutipart = require('connect-multiparty')
const mutipartMiddeware = mutipart()
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
    let name = file.path.split('/').pop()
    fs.readFile(file.path, function (data) {
      let outPath = folders.getCurrent().path + '/serve/template/' + name
      fs.outputFile(outPath, data, function () {
        res.json({ data: '' })
      })
    })
  })
}

function API (app) {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  getCatalogue(app)
  getList(app)
  upload(app)
}

module.exports = API
