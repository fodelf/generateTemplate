<!--
 * @Description: 描述
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2019-11-18 08:40:40
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-12-12 17:21:28
 -->
<template>
  <el-container class="container">
    <el-header style='display: flex;align-items: center;justify-content: center;'>
      <div>
        <span>请选择目录</span>
        <span v-for="(item, index) in list"
              :key="index"
              class="item"
              @click="queryList(index)">{{ item }}</span>
      </div>
    </el-header>
    <el-container style="height:calc(100% - 60px)">
      <el-aside width="200px">
        <div>
          <div>目录树</div>
          <!-- <el-input placeholder="输入关键字进行过滤"
                    v-model="filterText">
          </el-input> -->
          <el-tree :data="nodeData"
                   node-key="id"
                   lazy
                   @node-click='check'
                   ref="tree"
                   :load="loadNode"
                   :filter-node-method="filterNode">
            <span class="custom-tree-node"
                  slot-scope="{ node, data }"
                  node-click='check'>
              <span><i class="el-icon-folder-opened"
                   v-if="data.isDirectory"></i>
                <i v-else
                   class="el-icon-tickets"></i> {{ node.label }}</span>
            </span>
          </el-tree>
        </div>
      </el-aside>
      <el-container>
        <el-main>
          <el-row :gutter="10">
            <el-form ref="form"
                     :model="form"
                     label-width="80px">
              <el-col :span="6">
                <el-form-item label="模板选择">
                  <el-select v-model="templateValue"
                             placeholder="请选择">
                    <el-option v-for="item in templateOptions"
                               :key="item.value"
                               :label="item.label"
                               :value="item.path">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="数据来源">
                  <el-select v-model="dateValue"
                             placeholder="请选择">
                    <el-option v-for="item in dateOptions"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="接口地址">
                  <el-input v-model="url"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-row type='flex'
                        :gutter="10">
                  <el-button type="primary"
                             @click="showSwaggerList">
                    批量选择
                  </el-button>
                  <!-- <el-button type="primary"
                            @click="getSwagger"
                            v-if="dateValue != 'sw'">
                    全部生成
                  </el-button> -->
                  <el-upload style='margin-left:10px'
                             class="upload-demo"
                             action="/api/upload"
                             :show-file-list="false"
                             :on-success="handleAvatarSuccess"
                             multiple
                             :limit="3"
                             accept=".js,.ts,.java,.go,.py"
                             :file-list="fileList">
                    <el-button type="primary">上传模板</el-button>
                  </el-upload>
                  <el-button type="primary"
                             style='margin-left:10px'
                             @click="downLoadTemplate">
                    下载模板
                  </el-button>
                </el-row>
              </el-col>
            </el-form>
          </el-row>
          <el-row>
            <h5>文件将生成在{{path}}目录下</h5>
            <h5>模板预览</h5>
            <textarea v-model="templateSting"
                      style="height:500px;width:100%;background-color: #f3f3f3;font-size:12px;overflow: visible;font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size: 12px;color: #24292e; word-wrap: normal;white-space: pre;padding:20px"></textarea>
          </el-row>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
    <el-dialog title="请选择需要生成的接口"
               :visible.sync="dialogVisible"
               width="80%">
      <!-- <el-transfer v-model="transferValue"
                   :data="transferData"></el-transfer> -->
      <el-table ref="multipleTable"
                :data="transferData.filter(data => !search || data.key.toLowerCase().includes(search.toLowerCase()))"
                tooltip-effect="dark"
                style="width: 100%"
                height="450"
                @filter-change='handFilter'
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"
                         width="55">
        </el-table-column>
        <el-table-column label="地址">
          <template slot-scope="scope">{{ scope.row.key }}</template>
        </el-table-column>
        <el-table-column label="请求方式"
                         prop="type">
        </el-table-column>
        <el-table-column>
          <template slot="header">
            <el-input v-model="search"
                      size="mini"
                      placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            {{scope.row.data.summary}}
          </template>
        </el-table-column>
        <!-- <el-table-column prop="address"
                         label="地址"
                         show-overflow-tooltip> --> -->
        <!-- </el-table-column> -->
      </el-table>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="takeAction">确 定</el-button>
      </span>
    </el-dialog>
  </el-container>
  <!-- <div>
      <div>上传</div>
      <el-upload class="upload-demo"
                 action="/api/upload"
                 multiple
                 :limit="3"
                 :on-exceed="handleExceed"
                 :file-list="fileList">
        <el-button size="small"
                   type="primary">点击上传</el-button>
      </el-upload>
    </div> -->
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import {
  getCatalogue,
  getCatalogueList,
  getSwaggerAction,
  generateTs,
  getTemplate,
  downLoad
} from '../../api/api'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      fileList: [],
      selectList: [],
      dialogVisible: false,
      transferValue: [],
      transferData: [],
      filterText: '',
      catalogue: {
        path: ''
      },
      path: '',
      form: {},
      search: '',
      templateValue: '',
      dateValue: 'sw',
      templateSting: '',
      templateOptions: [],
      // templateOptions: [
      //   {
      //     value: 'ts',
      //     label: 'TypeScript'
      //   },
      //   {
      //     value: 'java',
      //     label: 'Java'
      //   },
      //   {
      //     value: 'go',
      //     label: 'Go'
      //   },
      //   {
      //     value: 'python',
      //     label: 'Python'
      //   },
      //   {
      //     value: 'self',
      //     label: '自定义模板'
      //   }
      // ],
      dateOptions: [
        {
          value: 'sw',
          label: 'Swagger'
        },
        {
          value: 'res',
          label: 'RestfulApi'
        },
        {
          value: 'Mysql',
          label: 'Mysql'
        }
      ],
      nodeData: [],
      swagger: '',
      url: '',
      flag: true
    }
  },
  // 监听属性 类似于data概念
  computed: {
    list: function () {
      // `this` 指向 vm 实例
      return this.catalogue.path.split('\\')
    }
  },
  // 监控data中的数据变化
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    },
    search () {
      this.flag = false
      // this.$refs.multipleTable.toggleRowSelection(this.selectList)
    }
  },
  // 方法集合
  methods: {
    handleAvatarSuccess () {
      this.$message({
        message: '模板上传成功',
        type: 'success'
      })
      this.getTemplateList()
      return null
    },
    handleSelectionChange (value) {
      if (this.flag) {
        this.selectList = value
      } else {
        this.flag = true
        this.selectList.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      }
    },
    handFilter (f) {
      console.log(f)
    },
    takeAction () {
      if (this.selectList.length === 0) {
        this.$message({
          message: '请选择要创建的api',
          type: 'warning'
        })
        return
      }
      var path = this.$refs.tree.getCurrentNode()
        ? this.$refs.tree.getCurrentNode().path
        : this.path
      generateTs({ swagger: this.selectList, path: path, templateUrl: this.templateValue }).then(resThen => {
        this.$message({
          message: '恭喜你，模板创建成功',
          type: 'success'
        })
        this.templateSting = resThen
        this.dialogVisible = false
      })
    },
    /**
     * @author: 吴文周
     * @name: showSwaggerList
     * @description: 显示swagger列表
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     * @example: 示例
     */
    showSwaggerList () {
      if (!this.url) {
        this.$message({
          type: 'warning',
          message: '请输入请求的url地址'
        })
        return null
      }
      this.dialogVisible = true
      this.transferData = []
      getSwaggerAction({ url: this.url }).then(res => {
        // this.transferData = res.paths
        let paths = res.paths

        for (let k in paths) {
          let child = paths[k]
          let childData = {}
          let type = ''
          if (child.hasOwnProperty('post')) {
            childData = child['post']
            type = 'POST'
          } else if (child.hasOwnProperty('get')) {
            childData = child['get']
            type = 'GET'
          }
          let item = {
            key: k,
            data: childData,
            type: type
          }
          this.transferData.push(item)
        }
      })
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    getCatalogueAction () {
      getCatalogue().then(res => {
        this.catalogue = res
        this.path = res.path
        getCatalogueList({ path: res.path }).then(back => {
          this.nodeData = back
          console.log(back)
        })
      })
    },
    /**
     * @author: 吴文周
     * @name: getTemplateList
     * @description: 获取模板列表
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     * @example: 示例
     */
    getTemplateList () {
      getTemplate().then(res => {
        this.templateOptions = res
        this.templateValue = res[0]['path']
      })
    },
    /**
     * @author: 吴文周
     * @name: downLoadTemplate
     * @description: 下载模板
     * @param {type}: 默认参数
     * @return {type}: 默认类型
     * @example: 示例
     */
    downLoadTemplate () {
      downLoad({ path: this.templateValue }).then(res => {
        let url = window.URL.createObjectURL(new Blob([res]))
        let name = this.templateValue.split('\\').pop()
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', name)
        document.body.appendChild(link)
        link.click()
      })
    },
    queryList (index) {
      let array = []
      this.list.forEach((element, i) => {
        if (i <= index) {
          array.push(element)
        }
      })
      console.log(array)
      this.path = array.join('\\')
      getCatalogueList({ path: array.join('\\') }).then(res => {
        this.nodeData = res
        console.log(res)
      })
    },
    loadNode (node, resolve) {
      if (node.level === 0) {
        resolve([])
        return
      }
      getCatalogueList({ path: node.data.path }).then(res => {
        resolve(res)
      })
    },
    check (data) {
      this.path = data.path
    },
    getSwagger () {
      var path = this.$refs.tree.getCurrentNode()
        ? this.$refs.tree.getCurrentNode().path
        : this.path
      getSwaggerAction().then(res => {
        generateTs({ swagger: res, path: path }).then(resThen => {
          this.$message({
            message: '恭喜你，模板创建成功',
            type: 'success'
          })
          this.templateSting = resThen
        })
      })
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.getCatalogueAction()
    this.getTemplateList()
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () { },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
}
.item {
  border: 1px solid green;
}
</style>
