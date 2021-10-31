<template>
    <el-row>
        <p class="title">文章分类</p>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="8">
            <el-row>
                <el-input v-model="newCategory" placeholder="分类名称"></el-input>
            </el-row>
            <el-row>
                <el-button type="primary" class="mt-20" @click="addNewCategory">添加</el-button>
            </el-row>
        </el-col>
        <el-col :span="16">
             <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="name" label="名称"> </el-table-column>
                <el-table-column prop="operation" label="操作" width="180">
                    <template #default="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button
                        >
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            newCategory: '',
            tableData: []
        }
    },
    methods: {
      addNewCategory() {
          this.tableData.push({name: this.newCategory})
          axios.post("/background/category", {
              name: this.newCategory
          }).then(function(res) {
              console.log(res);
          }).catch(function (err) {
              console.log(err);
          })
      },
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        this.tableData.splice(index, 1)
        axios.delete('/background/category', {
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
      axios.get('/background/category', {
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
<style lang="css">
  .el-col {
    border-radius: 4px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>