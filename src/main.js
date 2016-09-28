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
const port = "http://localhost:8888"

//路由map

router.map({
  '/home':{
    component : Home,
    title : '主页',
    port : port
  },
  '/blog':{
    component : Blog,
    title : '博客',
    port : port
  },
  '/contect':{
    component : Home
  },
  '/content':{
    component : Content,
    title : '',
    port : port
  }
})

router.redirect({
  '*':'/home'
})


router.start(App , 'app')
