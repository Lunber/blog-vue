<template>
  <header>
    <h1>{{title}}</h1>
  </header>
  <nav>
    <span><a v-link="{ path:'/home'}">home</a></span>
    <span><a v-link="{ path:'/blog'}">blog</a></span>
    <span><a>about</a></span>
  </nav>
  <router-view msg="props test" v-on:title="titleMsg" class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
</template>
<style>
  .view {
    transition: all .5s ease;
  }
  .test-enter, .test-leave {
    opacity: 0;
    transform: translate3d(20px, 0, 0);
  }
  [v-cloak] {
    display: none;
  }
</style>
<script>
export default {
  data:function () {
    return{
      title:''
    }
  },
  methods:{
    titleMsg:function (msg) {
      this.title = msg
    }
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

  .cb{
    clear: both;
  }
</style>
