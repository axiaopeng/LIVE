<template>
  <view class="order">
    <view class="order-title">统计</view>
    <view class="order-main">
      <view class="order-tools">
        <view class="order-tool" @click="indexStatus = 'new_order'">
          <image src="../../static/order/order.png" />
          <view class="tool-name">新订单</view>
        </view>
        <view class="order-tool" @click="indexStatus = 'wait_send'">
          <image src="../../static/order/send.png" />
          <view class="tool-name">待配送</view>
        </view>
        <view class="order-tool" @click="indexStatus = 'running'">
          <image src="../../static/order/running.png" />
          <view class="tool-name">待完成</view>
        </view>
      </view>
      <!-- <view>-</view>
      <view class="statistics-title">数据走势</view>
      <view class="statistics-tend">
        <view class="tend-nav">
          <view>订单统计</view>
          <view>》</view>
        </view>
      <view class="statistics-main"></view>-->
      <!-- </view> -->
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.order {
  background-color: #5793fa;
  min-height: 100vh;
  .order-title {
    padding: 88upx 32upx 0;
    color: #fff;
    font-size: 48upx;
    margin-bottom: 140upx !important;
  }
  .order-main {
    padding: 0 32upx;
    background-color: #ffffff;
    border-radius: 30px 30px 0 0;
    position: relative;
    .order-tools {
      background-color: #ffffff;
      margin: 0 32upx;
      position: absolute;
      left: 0;
      top: -100upx;
      display: flex;
      justify-content: space-around;
      height: 160upx;
      width: 686upx;
      border-radius: 20upx;
      box-shadow: 0 20upx 10upx -6upx #f9f9f9;
      .order-tool {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        & > image {
          padding: 15upx 0;
          width: 40upx;
          height: 40upx;
        }
        .tool-name {
          font-size: 28upx;
          line-height: 40upx;
        }
        .tool-num {
          background-color: tomato;
          position: absolute;
          right: -8upx;
          top: 20upx;
          font-size: 24upx;
          padding: 0 8upx;
          color: #ffffff;
          border-radius: 50px;
        }
      }
    }
  }
}
</style>