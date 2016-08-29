<template>
  <div>
    <p>
      {{msg}}
    </p>
  </div>
</template>
<script>
  export default {
    data:function(){
      return{
        msg:'test',
        title:'海贼王'
      }
    },
    ready:function () {
    },
    route: {
      activate: function (transition) {
        this.$emit('title',this.title)
        transition.next()
      }
    }
  }
</script>
