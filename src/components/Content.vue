<template>
  <div>
    <p @click="showInput()">
      {{msg}}
    </p>
    <div v-html="post | marked"></div>
    <div id="editor">
      <textarea v-model="a" debounce="300"></textarea>
      <div v-html="a | marked"></div>
    </div>
    <button type="button" @click="showInput()">click</button>
  </div>
</template>
<script>
  import marked from 'marked'
  export default {
    data:function(){
      return{
        a: '# hello',
        msg:'test',
        title:'海贼王',
        post:"# hello\n在HTML中，表单又`<form>`元素来表示。`<input>`可以通过设置size来指定文本框中显示的字符数。"
      }
    },
    ready:function () {
      console.log(marked('I am using __markdown__.'));
    },
    filters: {
      marked: marked
    },
    route: {
      activate: function (transition) {
        this.$emit('title',this.title)
        transition.next()
      }
    },
    methods:{
      showInput:function () {
        console.log(this.a)
      }
    }
  }
</script>
