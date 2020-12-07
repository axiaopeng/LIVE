<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'app'
}
</script>

<style lang='less'>
#app {
  margin: 0;
  padding: 0;
  min-height: 100vh;

}
body {
  margin: 0;
  padding: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;

  font-size: 16px;
}
html {
  margin: 0;
  padding: 0;
  font-size: 16px;
  //防止transition动画溢出页面
  width: 100vw;
  height:100vh;
  overflow:hidden;
}

.clearfix {
  &:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
}

</style>
