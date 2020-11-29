<template>
  <div id="app">
    <Aside :role="[0, 1]"></Aside>
    <div class="right">
      <div class="position">当前位置</div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from './components/aside'

export default {
  name: 'app',
  components: {
    Aside
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
}
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
html {
  margin: 0;
  padding: 0;
  font-size: 16px;
}

.right {
  width: 100%;
  height: 100%;
  padding-left: 0;
  margin-left: 0;
}
.right .position {
  height: 80px;
  background-color: #304156;
  color: #fff;
}
.right .content {
  overflow-y: scroll;
  height: calc(100vh - 80px);
}
.fw {
  font-weight: 600;
}
</style>
