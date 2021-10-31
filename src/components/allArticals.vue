<template>
  <el-table :data="tableData" stripe border style="width: 100%">
    <el-table-column prop="title" label="标题" width="240"> </el-table-column>
    <el-table-column prop="category" label="分类" width="180"> </el-table-column>
    <el-table-column prop="time" label="时间"> </el-table-column>
    <el-table-column prop="options" label="操作" width="180">
       <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index,scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'
export default {
    data() {
      return {
        tableData: [],
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        this.tableData.splice(index, 1)
        axios.delete('/background/articleList', {
            params: {
              del: row.id
            }
        }).then(res => {
          console.log(res);
        }).catch(function (err) {
          console.log(err);
        })
      },
    },
    mounted() {
      axios.get('/background/articleList', {
        params: {
          len: 10
        }
      }).then((res) => {
        this.tableData = res.data;
      }).catch(function (err) {
        console.log(err);
      })
    },
}
</script>

<style lang="">
    
</style>