<template>
            <el-container>
              <el-aside width="220px" style="background-color: rgb(238, 241, 246)">
                  <el-menu
                  :uniqueOpened="true"
                  default-active="2"
                  class="el-menu-vertical"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                >
                <router-link to="/">
                  <el-menu-item index="1">
                      <i class="el-icon-menu"></i>
                      <template #title> 主页</template>
                  </el-menu-item>
                </router-link>
                  <el-sub-menu index="2">
                    <template #title>
                      <i class="el-icon-document"></i>       
                      <span>文章</span>
                    </template>
                    <router-link to="allArticals">
                      <el-menu-item index="2-1">所有文章</el-menu-item>
                    </router-link>
                    <router-link to="newArtical">
                      <el-menu-item index="2-2">写文章</el-menu-item>
                    </router-link>
                    <router-link to="category">
                      <el-menu-item index="2-3">分类目录</el-menu-item>
                    </router-link>
                  </el-sub-menu>
                  <router-link to="/comments">
                      <el-menu-item index="3">
                          <i class="el-icon-s-comment"></i>
                          <template #title>评论</template>
                      </el-menu-item>
                  </router-link>
                </el-menu>
              </el-aside>
            
              <el-container>
                <el-header style="background-color:#fff; border-bottom:1px solid #dcdfe6;text-align: right; font-size: 14px">
                  <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                  <span>王小虎</span>
                </el-header>
            
                <el-main>
                  <router-view></router-view>
                </el-main>
              </el-container>
            </el-container>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    text-decoration: none;
    color: #fff;
}
.el-menu-vertical {
    height: 100vh;
}
.el-header {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    line-height: 60px;
}

.el-aside {
    color: var(--el-text-color-primary);
}
</style>
