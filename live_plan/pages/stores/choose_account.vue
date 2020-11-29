<template>
  <view class="choose">
    <block v-for="(item,index) in cash_way" :key="index">
      <view class="cash_way" @tap="changeChoose(index)">
        <view class="iconfont icon-zijinguanliICO"></view>
        <view class="way_info">
          <view class="way_name">{{item.name}}</view>
          <view class="way_username">
            <text>{{item.account}}</text>
            <text>{{item.username}}</text>
          </view>
        </view>
        <view v-if="isindex == index" class="iconfont icon-V"></view>
      </view>
    </block>
  </view>
</template>
<script>
export default {
  data() {
    return {
      isindex: null,
      cash_way: [{
        name: '微信',
        account: '13415614725',
        username: '卓泽鹏'
      },
      {
        name: '工商银行',
        account: '尾号2798',
        username: '小卓'
      }]
    }
  },
  methods: {
    changeChoose(i) {
      this.isindex = i;
      let that = this;
      uni.$emit('changeCh', { data: that.cash_way[i], isindex: i })
    }
  },
  onLoad(params) {
    if (params.isindex != null) {
      this.isindex = params.isindex
    }
  },
  //点击添加按钮
  onNavigationBarButtonTap(e) {

  }
}
</script>

<style lang="less" scoped>
.choose {
  margin: 0 32upx;
  .cash_way {
    display: flex;
    height: 160upx;
    align-items: center;
    border-bottom: 1upx solid #eeeeee;
    &:last-child {
      border: none;
    }
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
        & > text {
          padding-right: 10upx;
        }
      }
    }
    .icon-V {
      color: #4688fa;
      flex: 1;
      text-align: right;
      font-size: 40upx;
    }
  }
}
</style>