<template>
  <div class="blog">
    <a v-for="blog in blogs" v-link="{}" @click="pageRouteGo($index)" data-id="{{blog.id}}">
      <h1>{{blog.title}}</h1>
      <p>{{blog.createdDay}}</p>
      <div class="cb"></div>
    </a>
  </div>
</template>
<script>
  export default {
    data:function () {
      return{
        title:'博客',
        blogs:[]
      }
    },
    props:['msg'],
    route: {
      activate: function (transition) {
        this.$emit('title',this.title)
        var _this = this;
        console.log(this.$route.port + "/api/postList")
        this.$http.get(this.$route.port + "/api/postList").then(function (resp) {
          console.log(resp.data)
          _this.blogs = resp.data
        })
        transition.next()
      }
    },
    methods:{
      pageRouteGo:function (index) {
        console.log(index)
        var target = event.currentTarget
        var id = target.dataset.id
        console.log(id)
        this.$route.router.go({
          path:'/content',
          query:{id}
        })
      }
    }
  }
</script>
<style>
  .blog a{
    display: block;
    width: 100%;
    border-bottom: 1px solid #cccccc;
    text-decoration: none;
    color: #ffffff;
  }
  .blog h1{

  }
  .blog p{
    display: block;
    float: left;
    margin-right: 2em;
  }
</style>
