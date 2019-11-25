/*
 * @Description: 描述
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2019-11-12 09:11:40
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-25 23:15:56
 * @鸣谢 https://www.cnblogs.com/xiaohaifengke/p/7693185.html
 */
const prettiertslint = require('prettier-tslint')
const fs = require('fs')
const path = require('path')
const fss = require('fs-extra')
const _ = require('lodash')
const componentName = 'java'
const clean = require('./clean')
const prettier = require('prettier')
// let root = './'

// // 读取模板文件，并修改内容
let templateString = fs.readFileSync(
  path.join(__dirname, './interfaces.ts'),
  'utf8'
)
// let content = prettier.format(templateString, { 'printWidth': 100, // 每行到多少长度开始折行
//   'tabWidth': 2,
//   'singleQuote': true, // 单引号
//   'trailingComma': 'none', // 数组、对象最后一个元素的尾逗号
//   'bracketSpacing': true, // 花括号前后空格
//   'jsxBracketSameLine': true, // 使多行JSX元素最后一行末尾的 > 单独一行
//   'parser': 'babel', // 指定使用哪一种解析器
//   'semi': true, // 是否在行尾加分号
//   'useTabs': true, // 使用tab（制表符）缩进而非空格
//   'arrowParens': 'avoid', // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid不带）
//   'jsxSingleQuote': true, // 在JSX中使用单引号
//   'htmlWhitespaceSensitivity': 'ignore', // 为 HTML 文件定义全局空格敏感度
//   'quoteProps': 'as-needed'
// })
let outPath = path.join(__dirname, './interfaces2.ts')
fss.outputFile(outPath, templateString, function () {
  console.log('chenggl')
  prettiertslint.fix(outPath)
})
// // 读取js模板
// // let templateString = fs.readFileSync(
// //   path.join(__dirname, './module.js'),
// //   'utf8'
// // )
// var compiled = _.template(templateString)
// let content = compiled({
//   tests: [
//     { name: 'fred', type: 'String' },
//     { name: 'sss', type: 'String' }
//   ]
// })
// // let content = template.replace(/componentName/g, componentName) // target file content

// // 目标文件夹和目标文件的路径
// let targetDirPath = path.join(__dirname, root, componentName)
// let targetFilePath = path.join(
//   __dirname,
//   root,
//   componentName,
//   componentName + '.java'
// )

// // mkdirSync
// if (!fs.existsSync(targetDirPath)) {
//   fs.mkdirSync(targetDirPath)
//   console.log('The ' + targetDirPath + ' folder has been created!')
// } else {
//   clean(targetDirPath)
// }

// // writeFile async
// if (!fs.existsSync(targetFilePath)) {
//   fs.writeFile(targetFilePath, content, err => {
//     if (err) throw err
//     console.log('The ' + targetFilePath + ' has been created!')
//   })
// } else {
//   console.error('error!\n' + targetFilePath + ' has already been existed!')
// }
