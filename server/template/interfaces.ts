/*
 * @Description: 接口列表
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2019-11-25 10:32:46
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-25 11:32:07
 */
//定义接口

<% _.forEach(attrs, function(attr) { %>
export interface Person {
  <% _.forEach(attr, function(attrChild) { %><%- attrChild.name %>:<%- attrChild.type %>
    <% }) %>
}
<% })%>