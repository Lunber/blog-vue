<template>
  <div>
    <h2>Lunber</h2>
    <p>{{msg}}</p>
  </div>
</template>
<script>
  export default {
    data:function () {
      return{
        title:'主页'
      }
    },
    props:['msg'],
    route: {

      activate: function (transition) {
        this.$emit('title',this.title)
        console.log('Home activated!')
        transition.next()
      }
    }
  }
</script>
