<template>
  <div class="aside">
    <div class="aside_item1">
      <div class="title">LIVE AP</div>
    </div>
    <div v-for="(item, index) in asideList" :key="index">
      <div class="aside_item1">
        <div
          class="aside_title"
          @click="act_item1(index)"
          :class="index == active.one ? 'active_item1' : ''"
        >
          <div class="icon-left">
            <i class="iconfont icon-yuanquan"></i>
          </div>
          <div class="item1_title">{{ item.title }}</div>
          <div class="icon-right">
          <transition mode="out-in">    
            <i key="i1" v-if="active.isactive != index" class="iconfont icon-xiangxia"></i>
            <i key='i2' v-else class="iconfont icon-xiangshang"></i>
          </transition>  
          </div>
        </div>
        <div
          class="aside_item2"
          :class="active.isactive == index ? '' : 'item2_isnotshow'"
        >
          <div
            class="aside_title2"
            v-for="item1 in item.children"
            :key="item1.title"
            @click="act_item2(item1.title, index, item1.to)"
            :class="item1.title == active.two ? 'active_title2' : ''"
          >
            <div>{{ item1.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    role: {
      type: Array,
      default: []
    }
  },
  data() {
    return {

      active: {
        isactive: null,
        one: 0,
        two: ''
      },
      asideList: []
    }

  },
  mounted() {
    // 判断多角色开始
    if (this.role.indexOf(0) != -1) {
      this.asideList.push({
        title: '用户',
        children: [{
          title: '系统用户',
          to: '/usersInfo'
        },{
          title: '后台管理员',
          to: '/adminMana'
        },{
          title: '角色管理',
          to: '/roleMana'
        }]
      })
    }
    if (this.role.indexOf(1) != -1) {
      this.asideList.push({
        title: '更多工具',
        children: [{
          title: '即时通讯',
          to: '/msn'
        },{
          title: '工具样式',
          to: '/csss'
        }]
      })
    }
    // 判断多角色结束


    if (this.asideList[0] != undefined) {
      this.active.two = this.asideList[0].children[0].title
    }


  }
  , methods: {
    act_item1(index) {
      if (this.active.isactive == index) {
        this.active.isactive = null
      } else {
        this.active.isactive = index
      }
    },
    act_item2(title, index, to) {
      this.active.two = title;
      this.active.one = index;
 
      this.$router.push({ path: to })
    }
  }
}
</script>
<style lang='less' scoped>

.v-enter-active,.v-leave-active{
    transition: all .1s;
}

.aside {
  box-sizing: border-box;
  height: 100vh;
  width: 260px;

  //左侧菜单栏背景色
  background-color: rgb(34, 27, 46);
  overflow-y: scroll;
  cursor: pointer;
  .aside_item1 {
    .title{
   background-color: #304156;
      color: #ffffff;
      line-height: 60px;
      text-align: center;
      font-size: 24px;
    }
    .aside_title {
      //1级菜单栏背景色
      background-color: #304156;
      color: #bfcbd9;
      line-height: 70px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .icon-left {
        padding-left: 20px;
        width: 30px;
        text-align: center;
      }
      .item1_title {
        font-size: 16px;
        flex: 1;
      }
      .icon-right {
        color: #bfcbd9 !important;
        width: 50px;
        text-align: center;
      }
      &:hover {
        //1级菜单栏鼠标覆盖高亮背景色
        background-color: #263445;
      }
    }
    .active_item1 {
      //1级菜单字体高亮颜色
      color: #f4f4f5 !important;
    }
    .aside_item2 {
      // height: 0;
      max-height: 300px;
      transition: 0.5s;
      overflow: hidden;
      .aside_title2 {
        width: 100%;
        line-height: 70px;
        // 2级菜单栏背景色
        background-color: #1f2d3d;
        color: #bfcbd9;
        box-sizing: border-box;
        padding-left: 50px;
        font-size: 16px;
        &:hover {
          // 2级菜单覆盖背景色
          background-color: #001528;
        }
      }
      .active_title2 {
        //2级菜单字体高亮色
        color: #409eff;
      }
    }
    .item2_isnotshow {
      max-height: 0;
    }
  }
  // 滚动条宽度
  &::-webkit-scrollbar {
    width: 8px;
  }
  // 滚动条可移动部分样式
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(250, 247, 247, 0.2);
  }
  // 滚动条背景样式
  &::-webkit-scrollbar-track {
    background: #304156;
  }
}
</style>