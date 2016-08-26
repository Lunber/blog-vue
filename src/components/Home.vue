<template>
  <div>

  </div>
</template>
<script>
  export default {
    route: {
      activate: function (transition) {
        console.log('hook-example activated!')
        transition.next()
      },
      deactivate: function (transition) {
        console.log('hook-example deactivated!')
        transition.next()
      }
    }
  }
</script>
