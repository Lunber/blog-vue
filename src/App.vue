<template>
  <header>
    <h1>{{$route.title}}</h1>
  </header>
  <nav>
    <span><a v-link="{ path:'/home'}">home</a></span>
    <span><a v-link="{ path:'/blog'}">blog</a></span>
    <span><a>about</a></span>
  </nav>
  <router-view></router-view>
</template>

<script>
import Home from './components/Home.vue'

export default {
  components: {
    Home
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  width: 600px;
  margin: 2em auto;
  padding: 0 2em;
  font-size: 14px;
  font-family: "Microsoft YaHei";
}

header {
  padding: .5em 0;
  border-bottom: 1px solid #cccccc;
}


nav {
  float: left;
  font-family: "Microsoft YaHei";
  font-size: 1.1em;
  text-transform: uppercase;
  margin-left: -12em;
  width: 9em;
  text-align: right;
}

nav a {
  display: block;
  text-decoration: none;
  padding: .7em 1em;
  color: #000000;
}

nav a:hover {
  background-color: #ff0000;
  color: #f9f9f9;
  -webkit-transition: color .2s linear;
}

</style>
