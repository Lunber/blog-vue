<template>
  <div class="container">
    <div class="piece piece-1"></div>
    <div class="piece piece-2"></div>
    <div class="piece piece-3"></div>
    <div class="piece piece-4"></div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style scoped>
  .container{
    width: 2em;
    height: 2em;
    transform: rotate(45deg);
    position: absolute;
    top: calc(50% - 1em);
    left: calc(50% - 1em);
    animation: scaling 0.8s linear infinite; /* Safari and Chrome */

  }

  .piece{
    width: 1em;
    height: 1em;
    background-color: #788f6c;
    position: absolute;
  }

  .piece-1{
    left: 0;
    top: 0;
    animation: pieceRotate1 1.6s infinite; /* Safari and Chrome */
  }

  .piece-2{
    right: 0;
    top: 0;
    animation: pieceRotate2 1.6s infinite; /* Safari and Chrome */
  }

  .piece-3{
    left: 0;
    bottom: 0;
    animation: pieceRotate1 1.6s infinite; /* Safari and Chrome */
  }

  .piece-4{
    right: 0;
    bottom: 0;
    animation: pieceRotate2 1.6s infinite; /* Safari and Chrome */
  }

  @keyframes scaling
  {
    0%{
      width: 2em;
      height: 2em;
      top: calc(50% - 1em);
      left: calc(50% - 1em);
    }
    20%{
      width: 2.6em;
      height: 2.6em;
      top: calc(50% - 1.3em);
      left: calc(50% - 1.3em);
    }
    50%{
      width: 3em;
      height: 3em;
      top: calc(50% - 1.5em);
      left: calc(50% - 1.5em);
    }
    80%{
      width: 2.6em;
      height: 2.6em;
      top: calc(50% - 1.3em);
      left: calc(50% - 1.3em);
    }
    100%{
      width: 2em;
      height: 2em;
      top: calc(50% - 1em);
      left: calc(50% - 1em);
    }
  }

  @keyframes pieceRotate1
  {
    10%{
      transform: rotate(0deg);
    }

    40%{
      transform: rotate(90deg);
    }
    60%{
      transform: rotate(90deg);
    }
    90%{
      transform: rotate(0deg);
    }
  }

  @keyframes pieceRotate2
  {
    10%{
      transform: rotate(0deg);
    }
    40%{
      transform: rotate(-90deg);
    }
    60%{
      transform: rotate(-90deg);
    }
    90%{
      transform: rotate(0deg);
    }
  }
</style>
