/*
 * @Description: 描述
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2019-11-15 08:51:37
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-15 08:53:04
 */
const TokenKey = 'session-id'

export function getToken () {
  return localStorage.getItem(TokenKey)
}

export function setToken (token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken () {
  return localStorage.setItem(TokenKey, '')
}
