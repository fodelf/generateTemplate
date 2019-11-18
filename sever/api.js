const folders = require('./folders')
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
    let currget = folders.list()
    res.json({ 'data': currget })
  })
}

function API (app) {
  // 解决跨域
  app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
  })
  getCatalogue(app)
  getList(app)
}

module.exports = API
