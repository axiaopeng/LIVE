<template>
  <div class="home">
    <Aside :role="[0, 1]"></Aside>
    <div class="right">  
      <el-header class="position">
        <el-breadcrumb  separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>路径待修改</el-breadcrumb-item>
          <el-breadcrumb-item>路径待修改</el-breadcrumb-item> 
        </el-breadcrumb>
        <div class="userInfo">
          <div class="user_img">
            <img src="@/assets/cat.jpg" alt="">
          </div>
          <div class="user_name">
            <el-tooltip placement="bottom-end" effect="light" >
               <div slot="content">
                 <div class="box">
                   <div @click="routerTo('/editUserInfo')" class="box_item">基本资料</div>
                   <div @click="routerTo('/editPwd')" class="box_item">修改密码</div>
                   <div @click="routerTo('/editUserInfo')" class="box_item">退出</div>
                 </div>
               </div>
               <div>请修改昵称</div>
            </el-tooltip>    
          </div>
          <el-tooltip :content="isBig?'点击退出全屏':'点击全屏'" class="editWinSize">
            <i @click='winBig(1)' v-if="isBig" class="iconfont icon-small-screen2"></i>
            <i @click='winBig(0)' v-else class="iconfont icon-quanping"></i>    
          </el-tooltip>
        </div>
      </el-header>  
      <el-container class="content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-container>
    </div>
  </div>
</template>

<script>

import Aside from '../components/aside'
export default {
  name: 'Home',
  components: {
    Aside
  },
  data(){
    return{
      isBig: false
    }
  },
  created() {
    window.addEventListener('fullscreenchange',this.quit) 
  },
  beforeDestory(){
    window.removeEventListener('fullscreenchange',this.quit)
  },
  methods:{
    /**
   * 是否全屏并按键ESC键的方法
   */
    quit(e) {
      if(document.fullscreenElement){
        
      }else{
        this.isBig =false
      }
    },
    // 修改全屏按钮
    winBig(index){   
     let element = document.documentElement;
     if (index ===1) {
      this.isBig = false
      if (document.exitFullscreen) {
       document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) {
       document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
       document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
       document.msExitFullscreen();
      }
      
     } else {
       this.isBig = true
      if (element.requestFullscreen) {
       element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
       element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
       element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
       // IE11
       element.msRequestFullscreen();
      }    
     } 
    },
    routerTo(url){
      this.$router.push({
        path: url
      })
    }
    
  }
}
</script>
<style lang='less' scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
}
.box{
  width: 100px;
  cursor: pointer;
  .box_item{
    text-align: center;
    font-size: 16px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    &:hover{
      background-color: #eee;
    }
    &:active{
       background-color: rgb(200, 199, 199);
    }
  }
}
.right {
  width: 100%;
  height: 100%;
  padding-left: 0;
  margin-left: 0;
  overflow: hidden;
  .position{
     height: 60px;
  line-height: 60px;
    display: flex;
    align-items: center;
      background-color: #304156;
     .el-breadcrumb  {
          flex:1;      
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
     .userInfo{
       height:60px;
       color: #fff;
       display: flex;

       .user_img{
         height: 100%;
         img{
           height:50px;
           width:50px ;
           border-radius: 50px;
          vertical-align: middle;
         }
        
       }
       .user_name{
         color:#fff;
         cursor: pointer;
         padding: 0 30px 0 10px;
       }
       .editWinSize{
         cursor: pointer;
       }
     }
  }
 .box {
           cursor: pointer!important;
         }
.content {
   overflow: hidden;
  height: calc(100vh - 60px);
}
}



</style>
