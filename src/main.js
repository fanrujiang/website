import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './styles/main.css'

// 获取基础路径
const base = import.meta.env.BASE_URL

// 路由配置
const router = createRouter({
  history: createWebHistory(base), // 使用 base 作为基础路径
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue')
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('./views/Services.vue')
    },
    {
      path: '/cases',
      name: 'Cases',
      component: () => import('./views/Cases.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app') 
