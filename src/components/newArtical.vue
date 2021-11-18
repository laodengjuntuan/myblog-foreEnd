<template>
  <el-row>
    <el-col :span="24"><p class="title">写文章</p></el-col>
  </el-row>
  <el-row>
    <el-form ref="form" :model="form" style="width: 100%">
      <el-row :gutter="20" style="min-width: 600px">
      <el-col :span="16">
          <el-input placeholder="文章标题" v-model="form.title" style="margin-bottom: 20px"></el-input>
          <v-md-editor v-model="form.content" height="400px"></v-md-editor>
      </el-col>
      <el-col :span="8">
          <el-row>
            <el-select v-model="form.category" placeholder="所属分类" >
              <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              >
              </el-option>
            </el-select>
          </el-row>
          <el-row>
              <el-button type="primary" class="mt-20" @click="onSubmit">提交</el-button>
          </el-row>
      </el-col>
      </el-row>
    </el-form>
  </el-row>
</template>

<script>
import axios from 'axios'
import { ElMessage } from 'element-plus'

export default {
    name: 'app',
    data() {
      return {
        options: [],
        value: '',
        form: {
          title: '',
          content: '',
          category: ''
        }
      }
    },
    methods: {
      onSubmit() {
        axios.post('/background/article', {
          title: this.form.title,
          content: this.form.content,
          category: this.form.category
        })
        .then(function(response) {
          ElMessage({
            showClose: true,
            message: '提交成功！',
            type: 'success',
          })
        })
        .catch(function(error) {
          ElMessage({
            showClose: true,
            message: '提交失败' + error,
            type: 'error',
          })
        })
      }
    },
    mounted() {
      axios.get('/background/article')
      .then ((res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.options.push({
            label: res.data[i].name,
            value: res.data[i].name
          })
        }
      })
    },
};
</script>
<style lang="css">
/* 由于我这里的样式未用scope，它里面的样式会影响到别的组件 */
.title {
    text-align: left;
    font-size: 24px;
}
.mt-20 {
    margin-top: 20px;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>