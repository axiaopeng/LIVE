<template>
  <view class="store">
    <view class="store-nav">
      <navigator url="/pages/stores/mation" class="iconfont icon-ringlingsheng"></navigator>
      <navigator url="/pages/stores/manage" class="iconfont icon-guanli"></navigator>
    </view>
    <view class="store-header">
      <view>
        <view class="store-title">社区人企业购直营店</view>
        <view class="store-info">
          <text>直营</text>店铺账号:13415614725
        </view>
      </view>
      <view>
        <text class="iconfont icon-yiliaohangyedeICON-"></text>
      </view>
    </view>
    <view class="store-item">
      <view class="item-title">账户</view>
      <view class="items">
        <navigator url="/pages/stores/store_account" class="item">
          <view class="iconfont icon-zhangdan"></view>
          <view>账户流水</view>
        </navigator>
        <navigator url="/pages/stores/store_manage" class="item">
          <view class="iconfont icon-shuaqiaqiapianyinhangqia"></view>
          <view>资金管理</view>
        </navigator>
        <navigator url="/pages/stores/store_cash_account" class="item">
          <view class="iconfont icon-shenfenzheng"></view>
          <view>提现账号</view>
        </navigator>
      </view>
    </view>
    <view class="store-item">
      <view class="item-title">店铺</view>
      <view class="items">
		  <navigator url="/pages/stores/liveregi" class="item">
			  <view class="iconfont icon-02"></view>
			  <view>我要直播</view>
		  </navigator>
        <navigator class="item">
          <view class="iconfont icon-guanli"></view>
          <view>店铺设置</view>
        </navigator>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods:{
 
  },
  onLoad(){
	console.log(getApp().globalData.userInfo)
  }
}
</script>
<style lang="less" scoped>
.store {
  margin: 0 32upx;
  .store-nav {
    text-align: right;
    line-height: 88upx;
    & > navigator {
      display: inline;
      padding-left: 32upx;
      font-size: 46upx;
    }
  }
  .store-header {
    height: 184upx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > view {
      .store-title {
        font-size: 52upx;
      }
      .store-info {
        font-size: 24upx;
        & > text {
          line-height: 60upx;
          background-color: #5793fa;
          color: #ffffff;
          padding: 0 16upx;
          border-radius: 50upx;
          margin-right: 16upx;
        }
      }
      & > text {
        font-size: 130upx;
      }
    }
  }
  .store-item {
    padding: 48upx 0;
    border-top: 1upx solid #eeeeee;
    .item-title {
      font-size: 36upx;
      padding-bottom: 36upx;
    }
    .items {
      display: flex;
      .item {
        height: 92upx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-size: 24upx;
        margin-right: 64upx;
        color: #333333;
        .iconfont {
          font-size: 48upx;
        }
      }
    }
  }
}
</style>