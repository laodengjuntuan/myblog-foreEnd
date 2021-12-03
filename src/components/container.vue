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
                  <el-menu-item index="1" class="flexbox">
                    <el-icon :size="20" class="mr5"><coffee-cup /></el-icon>
                      <template #title> 主页</template>
                  </el-menu-item>
                </router-link>
                  <el-sub-menu index="2">
                    <template #title>
                      <el-icon :size="20" class="mr5"><document /></el-icon>      
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
                      <el-menu-item index="3" class="flexbox">
                          <el-icon :size="20" class="mr5"><chat-line-square /></el-icon>
                          <template #title>评论</template>
                      </el-menu-item>
                  </router-link>
                  <a href="/">
                    <el-menu-item index="4" class="flexbox">
                            <el-icon :size="20" class="mr5"><home-filled /></el-icon>
                            <template #title>返回前台</template>
                    </el-menu-item>
                  </a>
                </el-menu>
              </el-aside>
            
              <el-container>
                <el-header style="background-color:#fff; border-bottom:1px solid #dcdfe6;text-align: right; font-size: 14px">
                  <el-dropdown v-if="username">
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item @click="logout">退出</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                  <span>
                    <a v-if="username" class="user">{{ username }}</a>
                    <a v-else class="user">未登录</a>  
                  </span>
                </el-header>
            
                <el-main>
                  <router-view></router-view>
                </el-main>
              </el-container>
            </el-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: ''
    }
  },
  methods: {
    logout() {
      axios.get('/background/logout').then((res) => {
        this.username = ''
      })
    }
  },
  beforeMount() {
    axios.get('/background/user').then((res) => {
      this.username = res.data
    })
  },
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
.mr5 {
  margin-right: 5px;
}
.flexbox {
  display: flex;
  align-items: baseline;
}
.user {
  color: #000;
}
</style>
