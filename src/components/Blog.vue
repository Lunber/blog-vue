<template>
  <div>
    <a v-link="{ path:'/content'}">
      <h1>title</h1>
      <p>author</p>
      <p>date</p>
    </a>
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
