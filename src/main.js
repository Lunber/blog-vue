import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Blog from './components/Blog.vue'
import Content from './components/Content.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter();

//路由map

router.map({
  '/home':{
    component : Home,
    title : '主页'
  },
  '/blog':{
    component : Blog,
    title : '博客'
  },
  '/contect':{
    component : Home
  },
  '/content':{
    component : Content,
    title : ''
  }
})

router.redirect({
  '*':'/home'
})


router.start(App , 'app')
