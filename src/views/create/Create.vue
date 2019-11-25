<!--
 * @Description: 描述
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2019-11-18 08:40:40
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-25 19:48:05
 -->
<!--  -->
<template>
  <div class="">
    <div>请选择目录{{ catalogue.path }}</div>
    <div>
      <span v-for="(item, index) in list"
            :key="index"
            class="item"
            @click="queryList(index)">{{ item }}</span>
    </div>
    <div>
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
    </div>
    <div>
      <h5>获取swagger列表</h5>
      <el-input v-model="url"></el-input>
      <el-button type="primary"
                 @click="getSwagger">
        点击获取
      </el-button>
      <div>{{swagger}}</div>
    </div>

    <div>
      <div>目录树</div>
      <el-tree :data="nodeData"
               node-key="id"
               lazy
               ref='tree'
               :load="loadNode"
               :filter-node-method="filterNode">
        <span class="custom-tree-node"
              slot-scope="{ node,data}">
          <span><i class="el-icon-folder-opened"
               v-if="data.isDirectory"></i>
            <i v-else
               class="el-icon-tickets"></i> {{ node.label }}</span>
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { getCatalogue, getCatalogueList, getSwaggerAction, generateTs } from '../../api/api'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      catalogue: {
        path: ''
      },
      nodeData: [],
      swagger: '',
      url: ''
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
  watch: {},
  // 方法集合
  methods: {
    getCatalogueAction () {
      getCatalogue().then(res => {
        this.catalogue = res
        getCatalogueList({ path: res.path }).then(back => {
          this.nodeData = back
          console.log(back)
        })
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
      getCatalogueList({ path: array.join('\\') }).then(res => {
        this.nodeData = res
        console.log(res)
      })
    },
    loadNode (node, resolve) {
      // var path = node.data.path.split.split('\\')
      // path = path.join('\\')
      if (node.level === 0) {
        resolve([])
        return
      }
      getCatalogueList({ path: node.data.path }).then(res => {
        resolve(res)
      })
    },
    filterNode (value, data) {
      return !data.hidden
    },
    getSwagger () {
      var path = this.$refs.tree.getCurrentNode() ? this.$refs.tree.getCurrentNode().path : ''
      if (!path) {
        this.$message({
          message: '请选择创建的目录',
          type: 'warning'
        })
        return
      }
      // var specUrl = 'http://petstore.swagger.io/v2/swagger.json' // data urls are OK too 'data:application/json;base64,abc...'
      // var specUrl = 'http://172.23.0.187:8186/v2/api-docs'
      getSwaggerAction().then((res) => {
        var path = this.$refs.tree.getCurrentNode() ? this.$refs.tree.getCurrentNode().path : ''
        generateTs({ swagger: res, path: path }).then((res1) => {
          this.$message({
            message: '恭喜你，模板创建成功',
            type: 'success'
          })
        })
      })
      // SwaggerClient.http.withCredentials = false // this activates CORS, if necessary

      // var swaggerClient = new SwaggerClient(specUrl)
      //   .then(function (swaggerClient) {
      //     return swaggerClient.apis.pet.addPet({ id: 1, name: 'bobby' }) // chaining promises
      //   }, function (reason) {
      //     console.error('failed to load the spec' + reason)
      //   })
      //   .then(function (addPetResult) {
      //     console.log(addPetResult.obj)
      //     // you may return more promises, if necessary
      //   }, function (reason) {
      //     console.error('failed on API call ' + reason)
      //   })
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.getCatalogueAction()
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
.item {
  border: 1px solid green;
}
</style>
