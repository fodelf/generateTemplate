/*
 * @Description:api汇总模板
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-06 18:05:02
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-26 08:41:19
 */
import request from '../utils/request'
export function getCatalogue (params) {
  return request({
    url: '/api/getCatalogue',
    method: 'POST',
    params: params
  })
}

export function getCatalogueList (params) {
  return request({
    url: '/api/getCatalogueList',
    method: 'POST',
    params: params
  })
}

export function getSwaggerAction (params) {
  return request({
    url: '/v2/api-docs',
    method: 'GET',
    params: params
  })
}
export function generateTs (params) {
  return request({
    url: '/api/generateTs',
    method: 'POST',
    params: params
  })
}
