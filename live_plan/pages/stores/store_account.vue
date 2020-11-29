<template>
  <view class="account">
    <view class="item">
      <view class="item-date">2020/05/01</view>
      <view class="item-detail">
        <view class="detail">
          <view>
            <view class="detail-title">采购订单结算营收</view>
            <view class="detail-money">+10.00</view>
          </view>
          <view>
            <view class="detail-time">18:20:01</view>
            <view class="detail-remain">余额: 20.00</view>
          </view>
        </view>
        <view class="detail">
          <view>
            <view class="detail-title">提现</view>
            <view class="detail-money">-10.00</view>
          </view>
          <view>
            <view class="detail-time">18:20:01</view>
            <view class="detail-remain">余额: 10.00</view>
          </view>
        </view>
      </view>
    </view>
    <view class="item">
      <view class="item-date">2020/05/03</view>
      <view class="item-detail">
        <view class="detail">
          <view>
            <view class="detail-title">采购订单结算营收</view>
            <view class="detail-money">+10.00</view>
          </view>
          <view>
            <view class="detail-time">18:20:01</view>
            <view class="detail-remain">余额: 20.00</view>
          </view>
        </view>
        <view class="detail">
          <view>
            <view class="detail-title">提现</view>
            <view class="detail-money">-10.00</view>
          </view>
          <view>
            <view class="detail-time">18:20:01</view>
            <view class="detail-remain">余额: 10.00</view>
          </view>
        </view>
      </view>
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
.account {
  margin: 0 32upx;
  .item {
    .item-date {
      width: 100vw;
      margin-left: -32upx;
      padding-left: 32upx;
      line-height: 68upx;
      background-color: #fafafa;
      font-size: 28upx;
    }
    .item-detail {
      .detail {
        height: 134upx;
        border-bottom: 1upx solid #eeeeee;

        & > view {
          display: flex;
          justify-content: space-between;
          &:nth-child(1) {
            font-size: 28upx;
            line-height: 72upx;
            padding-top: 10upx;
          }
          &:nth-child(2) {
            font-size: 24upx;
            color: #999999;
          }
        }
      }
    }
  }
}
</style>