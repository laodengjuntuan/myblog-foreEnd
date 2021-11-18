import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createRouter, createWebHashHistory } from 'vue-router'

// markdown编辑器
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';


// 导入组件
import App from './App.vue'
import Home from './components/home.vue'
import comments from './components/comments.vue'
import allArticals from './components/allArticals.vue'
import newArtical from './components/newArtical.vue'
import category from './components/category'
import { CoffeeCup, Document, ChatLineSquare, HomeFilled } from '@element-plus/icons' 

VueMarkdownEditor.use(vuepressTheme, {
    Prism,
});
  
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/comments',
        component: comments
    },
    {
        path: '/allArticals',
        component: allArticals
    },
    {
        path: '/newArtical',
        component: newArtical
    },
    {
        path: '/category',
        component: category
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(VueMarkdownEditor)
app.component('coffeeCup', CoffeeCup)
app.component('document', Document)
app.component('chatLineSquare', ChatLineSquare)
app.component('homeFilled', HomeFilled)
app.mount('#app')
