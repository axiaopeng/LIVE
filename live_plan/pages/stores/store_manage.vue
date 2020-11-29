<template>
  <view class="manage">
    <view class="manage_card">
      <view class="card_title">当前余额(元)</view>
      <view class="card_money">10000.00</view>
      <view class="card_bottom">
        <view>
          <view>累计结算金额</view>
          <view>20000.00</view>
        </view>
        <view>
          <view>累计发放佣金</view>
          <view>100.00</view>
        </view>
      </view>
    </view>
    <navigator url="/pages/stores/store_cash" class="manage_item">
      <view>提现</view>
      <view class="iconfont icon-youjiantou"></view>
    </navigator>
    <navigator url="/pages/stores/store_cash_record" class="manage_item">
      <view>提现记录</view>
      <view class="iconfont icon-youjiantou"></view>
    </navigator>
    <view class="manage_item">
      <view>提现密码</view>
      <view class="iconfont icon-youjiantou"></view>
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
.manage {
  margin: 0 32upx;
  .manage_card {
    margin: 32upx 0;
    height: 356upx;
    background: url("../../static/store/card.jpg");
    border-radius: 20upx;
    text-align: center;
    color: #ffffff;
    .card_title {
      padding-top: 32upx;
      line-height: 64upx;
      font-size: 24upx;
      opacity: 0.8;
    }
    .card_money {
      font-size: 64upx;
      padding-bottom: 40upx;
    }
    .card_bottom {
      display: flex;
      font-size: 26upx;
      justify-content: space-around;
      line-height: 52upx;
      opacity: 0.9;
    }
  }
  .manage_item {
    display: flex;
    justify-content: space-between;
    font-size: 32upx;
    line-height: 104upx;
    color: #333333;
    border-bottom: 1upx solid #eeeeee;
    .iconfont {
      color: #cccccc;
    }
  }
}
</style>