<template>
  <el-table :data="tableData" border stripe style="width: 100%">
    <el-table-column prop="user" label="用户" width="180"> </el-table-column>
    <el-table-column prop="comment" label="评论"> </el-table-column>
    <el-table-column prop="artical" label="文章"> </el-table-column>
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column label="操作">
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
</template>

<script>
export default {
    data() {
      return {
        tableData: [
          {
            user: '王小虎',
            comment: '这是评论这是评论这是评论',
            artical: '《the Great Gastby》',
            date: '2016-05-02',
          },
          {
            user: '王小虎',
            comment: '这是评论这是评论这是评论',
            artical: '《the Great Gastby》',
            date: '2016-05-04',
          },
          {
            user: '王小虎',
            comment: '这是评论这是评论这是评论',
            artical: '《the Great Gastby》',
            date: '2016-05-01',
          },
          {
            user: '王小虎',
            comment: '这是评论这是评论这是评论',
            artical: '《the Great Gastby》',
            date: '2016-05-03',
          },
        ],
      }
    },
}
</script>
<style lang="">
    
</style>