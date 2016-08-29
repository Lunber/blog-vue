<template>
  <div class="blog">
    <a v-for="blog in blogs" v-link="{ path:'/content'}" @click="pageRouteGo($index)">
      <h1>title:{{blog.title}}</h1>
      <p>date:{{blog.date}}</p>
      <div class="cb"></div>
    </a>
  </div>
</template>
<script>
  export default {
    data:function () {
      return{
        title:'博客',
        blogs:[
          {title:'test page 1',
            date:'2016-08-29',
            href:"{ path:'/content'}"
          },
          {title:'test page 2',
            date:'2016-08-29',
            href:"{ path:'/content'}"

          }
        ]
      }
    },
    props:['msg'],
    route: {
      activate: function (transition) {
        this.$emit('title',this.title)
        transition.next()
      }
    },
    methods:{
      pageRouteGo:function (index) {
        console.log(index)
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
    color: #000000;
  }
  .blog h1{

  }
  .blog p{
    display: block;
    float: left;
    margin-right: 2em;
  }
</style>
