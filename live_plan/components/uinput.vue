<template>
  <view class="uinput">
    <block v-if="type == 'one'">
      <navigator :url="url" class="uinput_cpt">
        <view>{{title}}</view>
        <slot></slot>
        <view class="iconfont icon-youjiantou"></view>
      </navigator>
    </block>
    <block v-else-if="type == 'two'">
      <view class="uinput_two">
        <view class="two_time">{{mation.time}}</view>
        <view class="two_main">
          <view class="main_first">
            <text>{{mation.title}}</text>
            <view v-show="mation.isread == 0" class="iconfont icon-dian color-be"></view>
            <text class="iconfont icon-youjiantou"></text>
          </view>
          <view class="main_second">{{mation.content}}</view>
        </view>
      </view>
    </block>
  </view>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'one'
    },
    url: {
      type: String
    },
    title: {
      type: String
    },
    mation: {
      type: Object
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.uinput_cpt {
  display: flex;
  justify-content: space-between;
  font-size: 28upx;
  line-height: 100upx;
  border-bottom: 1upx solid #eeeeee;
  .icon-youjiantou {
    color: #cccccc;
    font-size: 40upx;
  }
}
.uinput_two {
  .two_time {
    line-height: 82upx;
    font-size: 24upx;
    color: #999999;
    text-align: center;
  }
  .two_main {
    height: 166upx;
    border-radius: 10upx;
    box-shadow: 0 0 20upx -12upx #999999;
    padding: 0 32upx;
    line-height: 82upx;
    .main_first {
      font-size: 28upx;
      border-bottom: 2upx solid #eeeeee;
      display: flex;
      justify-content: space-between;
      .icon-dian {
        flex: 1;
        text-align: right;
        font-size: 50upx;
      }
    }
    .main_second {
      font-size: 24upx;
      color: #333333;
    }
  }
}
</style>