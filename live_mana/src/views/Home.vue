<template>
  <div class="home">
    <Aside :role="[0, 1]"></Aside>
    <div class="right">
        
        <el-breadcrumb class="position" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      <el-container class="content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
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
.right .el-breadcrumb  {
  height: 60px;
  line-height: 60px;
  background-color: #304156;
  padding-left: 20px;
 /deep/ .el-breadcrumb__inner{
     color: #eee;
     &:hover{
       color: #eee;
     }
  }
  /deep/ .el-breadcrumb__inner.is-link{
    color:#fff;
    &:hover{
      color: rgb(128, 149, 255);
    }
  }
}
.right .content {
   overflow: hidden;
  height: calc(100vh - 60px);
}

</style>
