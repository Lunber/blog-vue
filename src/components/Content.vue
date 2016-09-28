<style scoped>
  .content{
    display: none;
    transition: all 0.5s;
    -ms-transition: all 0.5s;
    -moz-transition: all 0.5s; /* Firefox 4 */
    -webkit-transition: all 0.5s; /* Safari 和 Chrome */
    -o-transition: all 0.5s;
  }
  .show{
    display: block;
  }
  .loading{
    display:none;
    transition: all 0.5s;
    -ms-transition: all 0.5s;
    -moz-transition: all 0.5s; /* Firefox 4 */
    -webkit-transition: all 0.5s; /* Safari 和 Chrome */
    -o-transition: all 0.5s;
  }
</style>
<template>
  <div v-html="post | marked" class="content" :class="{'show':show}">
  </div>
  <loading :class="{'loading':loading}"></loading>
</template>
<script>
  import marked from 'marked'
  import loading from './loading.vue'
  marked.setOptions({
    highlight: function (code) {
      return require('highlight.js').highlightAuto(code).value;
    }
  });
  export default {
    data: function () {
      return {
        title: '海贼王',
        post: "#",
        show:false,
        loading:false
      }
    },
    components:{
      loading
    },
    filters: {
      marked: marked
    },
    route: {
      activate: function (transition) {
        this.show = false
        this.loading = false
        this.$emit('title', this.title)
        var data = {
          id: this.$route.query.id
        }
        var _this = this
        this.$http.post(this.$route.port + "/api/post", data).then(function (resp) {
          setTimeout(function () {
            console.log('resp:' + resp)
            console.log(resp)
            console.log(resp.data[0].content)
            _this.post = resp.data[0].content
            _this.show = true
          _this.loading = true

          } ,5000)
          })
        transition.next()
      },
      deactivate:function (transition) {
        transition.next()
      }
    }
  }
</script>
