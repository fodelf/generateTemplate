import folders from './folders'
/**
 * @name: getCatalogue
 * @description: 获取当前目录
 * @param {type}: 默认参数
 * @return {type}: 默认类型
 */
function getCatalogue (app) {
  app.post('/api/getCatalogue', function (req, res) {
    let currget = folders.getCurrent()
    res.send(currget)
  })
}
/**
 * @name: getList
 * @description: 获取文件列表
 * @param {type}: 默认参数
 * @return {type}: 默认类型
 */
function getList (app) {
  app.post('/api/getCatalogueList', function (req, res) {
    let currget = folders.list()
    res.send(currget)
  })
}

function API (app) {
  getCatalogue(app)
  getList(app)
}

module.exports = API
