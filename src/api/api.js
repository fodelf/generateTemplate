/*
 * @Description:api汇总模板
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-06 18:05:02
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-18 08:53:05
 */
import request from '../utils/request'

export function getCatalogue (params) {
  return request({
    url: '/api/getCatalogue',
    method: 'POST',
    params: params
  })
}
