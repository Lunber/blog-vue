<template>
  <div id="container">
    <header>
      <div></div>
    </header>
    <div class="personal-div" :class="{'scroll-nav':scrollTop}">
      <img src="assets/IMG_2214.jpg" class="profile-img" :class="{'scroll-nav-img':scrollTop}">
      <p class="name-p">Lunber</p>
      <nav>
        <span>
          <a v-link="{ path:'/home'}">home</a>
        </span>
        <span>
          <a v-link="{ path:'/blog'}">blog</a>
        </span>
        <span>
          <a>about</a>
        </span>
      </nav>
      <inscss></inscss>
    </div>
    <div class="router-content-div">
      <router-view style="padding-top: 2em" msg="props test" v-on:title="titleMsg" class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  font-family: "微软雅黑";
  background-color: #788f6c;
}

body {
  height: 100%;
}

.cb {
  clear: both;
}

#container{
  height: 100%;
}

header {
  width: 100%;
  height: 5vh;
  /*background: url("assets/headerbg.jpg") no-repeat;*/
  background-size: cover;
  transition: all 0.5s;
  -ms-transition: all 0.5s;
  -moz-transition: all 0.5s;
  /* Firefox 4 */
  -webkit-transition: all 0.5s;
  /* Safari 和 Chrome */
  -o-transition: all 0.5s;
}

header div {
  position: relative;
  width: 100%;
  height: 5vh;
  top: 25vh;
  background: linear-gradient(top, rgba(0, 139, 139, 0), rgba(0, 139, 139, 1));
  background: -ms-linear-gradient(top, rgba(0, 139, 139, 0), rgba(0, 139, 139, 1));
  background: -webkit-linear-gradient(top, rgba(0, 139, 139, 0), rgba(0, 139, 139, 1));
  background: -o-linear-gradient(top, rgba(0, 139, 139, 0), rgba(0, 139, 139, 1));
  background: -moz-linear-gradient(top, rgba(0, 139, 139, 0), rgba(0, 139, 139, 1));
}

.personal-div {
  position: fixed;
  left: 5vw;
  width: 10vw;
  text-align: center;
  top: 7vh;
  transition: all 0.5s;
  -ms-transition: all 0.5s;
  -moz-transition: all 0.5s;
  /* Firefox 4 */
  -webkit-transition: all 0.5s;
  /* Safari 和 Chrome */
  -o-transition: all 0.5s;
}

.profile-img {
  width: 10vw;
  height: 10vw;
  border-radius: 10vw;
  transition: all 0.5s;
  -ms-transition: all 0.5s;
  -moz-transition: all 0.5s;
  /* Firefox 4 */
  -webkit-transition: all 0.5s;
  /* Safari 和 Chrome */
  -o-transition: all 0.5s;
}

.name-p {
  margin: 0.5em 0;
  color: white;
  font-size: 2em;
}

nav span {
  display: block;
  height: 2em;
  text-align: left;
  padding-bottom: 0.5em;
}

nav a {
  text-decoration: none;
  height: 2em;
  line-height: 2em;
  width: 100%;
  display: block;
  color: white;
  transition: all 0.3s;
  -ms-transition: all 0.3s;
  -moz-transition: all 0.3s;
  /* Firefox 4 */
  -webkit-transition: all 0.3s;
  /* Safari 和 Chrome */
  -o-transition: all 0.3s;
}

nav a:hover {
  background-color: #ffffff;
  color: #008B8B;
}

.scroll-header {
  height: 5vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
}

.scroll-nav-img {
  width: 7vw;
  height: 7vw;
}

.scroll-nav {
  top: 7vh;
}

.router-content-div {
  position: relative;
  left: 20vw;
  width: 75vw;
  min-height: calc(70vh - 20px);
  background: rgba(255, 255, 255, 0.7);
  padding: 0 2em;
  border: 10px solid rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
  margin-bottom: 5vh;
  min-height: calc(100% - 10vh);
}

.view {
  transition: all .5s ease;
}

.test-enter,
.test-leave {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

[v-cloak] {
  display: none;
}


/* 设置滚动条的样式 */

 ::-webkit-scrollbar {
  width: 5px;
}


/* 滚动槽 */

 ::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}


/* 滚动条滑块 */

 ::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(65, 65, 65, 0.9);
}

 ::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 0, 0, 0.4);
}
</style>
<script>
import inscss from 'components/insCSS.vue'

export default {
  data: function () {
    return {
      title: '',
      scrollTop: false
    }
  },
  components: {
    inscss
  },
  ready: function () {
    window.addEventListener('scroll', this.handleScroll);
    console.log(1)
  },
  methods: {
    titleMsg: function (msg) {
      this.title = msg
    },
    handleScroll: function () {
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      t > 80 ? this.scrollTop = true : this.scrollTop = false;
    }
  }
}
</script>
