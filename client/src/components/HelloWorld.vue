<template>
  <div class="hello">
    <button @click="handleClick()">登录</button>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    function handleClick() {
      console.log(api.login({name: "张三"}));
    }
    return {
      handleClick
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
