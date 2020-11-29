<template>
  <view class="orders-find">
    <view class="find-nav">
      <view @tap="navigateBack" class="iconfont icon-zuojiantou" style="font-size: 60upx;"></view>
      <view class="nav-center">
        <view class="iconfont icon-search"></view>
        <input type="text" placeholder="时间关键字查询" placeholder-class="glay" />
        <view class="iconfont icon-guanbi"></view>
      </view>
      <view class="nav-btn">搜索</view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    navigateBack() {
      uni.navigateBack()
    }
  }
}
</script>
<style lang='less' scoped>
.glay {
  color: #cccccc;
}
.orders-find {
  margin: 0 32upx;
  .find-nav {
    margin-left: -16upx;
    height: 88upx;
    display: flex;
    align-items: center;

    .nav-center {
      background-color: #f6f6f6;
      height: 64upx;
      flex: 1;
      display: flex;
      align-items: center;
      border-radius: 5px;
      & > .iconfont {
        padding: 0 16upx;
        color: #cccccc;
      }
      & > input {
        font-size: 28upx;
        flex: 1;
      }
    }
    .nav-btn {
      background-color: #5793fa;
      font-size: 28upx;
      color: #ffffff;
      line-height: 64upx;
      width: 88upx;
      text-align: center;
      border-radius: 5px;
      margin-left: 16upx;
    }
  }
}
</style>