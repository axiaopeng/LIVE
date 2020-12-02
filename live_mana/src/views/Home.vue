<template>
  <div class="home">
    <Aside :role="[0, 1]"></Aside>
    <div class="right">
      <div class="position">当前位置</div>
      <el-container class="content">
        <router-view></router-view>
      </el-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Aside from '../components/aside'
export default {
  name: 'Home',
  components: {
    Aside
  }
}
</script>
<style lang='less' scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
}
.right {
  width: 100%;
  height: 100%;
  padding-left: 0;
  margin-left: 0;
  overflow: hidden;
}
.right .position {
  height: 60px;
  background-color: #304156;
  color: #fff;
}
.right .content {
   overflow: hidden;
  height: calc(100vh - 60px);
}
.fw {
  font-weight: 600;
}
</style>
