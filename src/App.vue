<!--
 * @Description: 描述
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2019-11-15 08:37:45
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-26 11:01:36
 -->
<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- <div></div> -->
    <!-- </div> -->
    <router-view />
  </div>
</template>
<style rel="stylesheet/css" lang="css">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
.router-link-exact-active {
  color: #42b983;
}

/*****************************重置样式*******************************/
* {
  box-sizing: content-box;
}

html,
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
span,
a,
em,
dl,
dt,
dd,
ul,
ol,
li,
pre,
fieldset,
lengend,
button,
input,
textarea,
form,
table,
tbody,
tfoot,
tr,
th,
td,
img,
strong,
area,
del,
select {
  margin: 0;
  padding: 0;
}

body,
html {
  height: 100%;
}

body,
button,
input,
select,
textarea {
  font-family: "微软雅黑", Arial, Verdana, "microsoft yahei";
  *line-height: 1.5;
  -ms-overflow-style: scrollbar;
}

h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
address,
caption,
cite,
em,
strong {
  font-size: 1em;
  font-style: normal;
  font-weight: normal;
}

article,
aside,
dialog,
footer,
header,
section,
nav,
figure,
menu {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}

address,
cite,
dfn,
em,
var {
  font-style: normal;
}

small {
  font-size: 12px;
}

/*重置列表元素*/
table {
  border-collapse: collapse;
  border-spacing: 0;
}

caption,
th,
td {
  text-align: left;
  font-weight: normal;
}

ul,
ol {
  list-style: none outside none;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  outline: medium none;
}

a:active {
  text-decoration: none;
  list-style: none;
}

sup {
  vertical-align: text-top;
}

sub {
  vertical-align: text-bottom;
}

button,
input,
select,
textarea {
  font-size: 100%;
}

fieldset,
img {
  border: medium none;
}

input,
select,
button {
  vertical-align: middle;
  border: none;
}

img {
  border: 0;
  display: block;
}

em,
address,
i,
cite {
  font-style: normal;
}

.clearfix:after {
  content: "";
  display: block;
  clear: both;
}

.full {
  width: 100%;
  height: 100%;
}

*::-webkit-scrollbar {
  display: none;
}

.fz16 {
  font-size: 16px;
}

.flex-row,
.flex-row-between,
.flex-row-warp {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
