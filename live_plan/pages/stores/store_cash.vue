<template>
  <view class="cash">
    <navigator
      :url="'/pages/stores/choose_account?isindex='+cash.cash_way.isindex"
      class="cash_way"
      v-if="cash.cash_way.name != null"
    >
      <view class="iconfont icon-zijinguanliICO"></view>
      <view class="way_info">
        <view class="way_name">{{cash.cash_way.name}}</view>
        <view class="way_username">
          <text>{{cash.cash_way.account}}</text>
          <text>{{cash.cash_way.username}}</text>
        </view>
      </view>
      <view class="iconfont icon-youjiantou"></view>
    </navigator>
    <navigator
      :url="'/pages/stores/choose_account?isindex='+cash.cash_way.isindex"
      class="cash_way"
      v-else
    >
      <view class="way_info">
        <view class="way_name">请选择提现账户</view>
      </view>
      <view class="iconfont icon-youjiantou"></view>
    </navigator>
    <view class="cash_title">
      <text>提现金额</text>
      <text class="color-yw">单笔2万，单日2万</text>
    </view>
    <view class="cash_money">
      ￥
      <input type="number" placeholder="不能少于1元" />
    </view>
    <view class="cash_tip">
      <text>最多可提现1000元</text>
      <text class="color-be">全部提现</text>
    </view>
    <view class="cash_title">
      <text>转出方式</text>
    </view>
    <radio-group @change="radioChange">
      <label class="radio">
        <view class="cash-roll">
          <radio value="快递到账" style="transform: scale(0.8)" checked />
          <view class="cginline">
            <view>快速到账</view>
            <view>
              手续费按
              <text class="color-yw">0.3%</text>收取
            </view>
          </view>
        </view>
      </label>
      <label class="radio">
        <view class="cash-roll">
          <radio style="transform: scale(0.8)" value="普通到账" />
          <view class="cginline">
            <view>普通到账</view>
            <view>
              预计
              <text class="color-yw">T+1天到账(免手续费,T为工作日)</text>
            </view>
          </view>
        </view>
      </label>
    </radio-group>
    <view
      class="cash_btn"
      :class="cash.cash_money != null&& cash.cash_way != null && cash.cash_roll != null? 'active_btn' : ''"
    >提现</view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      cash: {
        cash_money: null,
        cash_way: {
          name: null,
          account: null,
          username: null,
          isindex: null
        },
        cash_roll: null
      }
    }
  },
  onShow() {
    uni.$on('changeCh', res => {
      this.cash.cash_way = res.data;
      this.cash.cash_way.isindex = res.isindex;
    })
  },
  methods: {
    radioChange(e) {
      this.cash.cash_roll = e.detail.value
      console.log(this.cash)
    }
  }
}
</script>
<style lang="less" scoped>
.cash {
  margin: 0 32upx;
  .cash_way {
    display: flex;
    height: 160upx;
    align-items: center;
    .icon-zijinguanliICO {
      color: #4688fa;
      font-size: 40upx;
      margin-right: 32upx;
    }
    .way_info {
      line-height: 50upx;
      .way_name {
        font-size: 28upx;
      }
      .way_username {
        font-size: 24upx;
        color: #999999;
      }
    }
    .icon-youjiantou {
      color: #999999;
      flex: 1;
      text-align: right;
      font-size: 40upx;
    }
  }
  .cash_title {
    line-height: 100upx;
    display: flex;
    justify-content: space-between;
    & > text {
      &:nth-child(1) {
        font-size: 28upx;
      }
      &:nth-child(2) {
        font-size: 24upx;
      }
    }
  }
  .cash_money {
    display: flex;
    height: 60upx;
    font-size: 50upx;
    line-height: 40upx;
    border-bottom: 1upx solid #eeeeee;
    & > input {
      font-size: 28upx;
    }
  }
  .cash_tip {
    display: flex;
    justify-content: space-between;
    font-size: 24upx;
    line-height: 64upx;
  }
  .cash-roll {
    height: 148upx;
    border-bottom: 1upx solid #eeeeee;
    radio {
      padding-top: 20upx;
    }
    .cginline {
      display: inline-block;
      vertical-align: top;
      line-height: 20upx;
      & > view {
        font-size: 28upx;
        padding-top: 38upx;
        &:nth-child(2) {
          font-size: 24upx;
        }
      }
    }
  }
  .cash_btn {
    background-color: #96bbfa;
    color: #d4e2fa;
    text-align: center;
    line-height: 88upx;
    border-radius: 10upx;
    margin-top: 40upx;
  }
  .active_btn {
    background-color: #4688fa;
    color: #ffffff;
  }
}
</style>