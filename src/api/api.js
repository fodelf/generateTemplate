/*
 * @Description:api汇总模板
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-06 18:05:02
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-12-12 16:45:25
 */
import request from '../utils/request'
export function getCatalogue (params) {
  return request({
    url: '/api/getCatalogue',
    method: 'POST',
    params: params
  })
}
export function getTemplate () {
  return request({
    url: '/api/getTemplate',
    method: 'POST',
    params: {}
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
    url: params.url,
    method: 'GET',
    params: {}
  })
}
export function getApi (params) {
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

export function downLoad (params) {
  return request({
    url: '/api/downLoad',
    method: 'DownLoad',
    params: params
  })
}
