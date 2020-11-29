<template>
  <view class="goods">
    <view class="goods-nav">
      <text class="iconfont icon-search"></text>
      <text @tap="isadd = !isadd">+</text>
      <view class="add" :class="isadd?'': 'show'" @tap="isadd = !isadd">
        <view class="sanjiao" @tap.stop></view>
        <view class="add-good" @tap.stop>
          <view>
            <text class="iconfont icon-saoma"></text>扫码添加
          </view>
          <navigator url="/pages/goods/add">
            <text class="iconfont icon-tianjia"></text>添加商品
          </navigator>
        </view>
      </view>
    </view>
    <view class="goods-title">全部商品</view>
    <view class="goods-tools">
      <view @tap="index = 0;indexStatus = 'melling'" :class="index == 0?'active':''">
        在售
        <text>(3件)</text>
      </view>
      <view @tap="index = 1;indexStatus = 'wait_mell'" :class="index == 1?'active':''">
        待售
        <text>(3件)</text>
      </view>
      <view @tap="index = 2;indexStatus = 'discount'" :class="index == 2?'active':''">
        下架
        <text>(3件)</text>
      </view>
    </view>
    <view class="goods-tools-bottom">
      <view class="jindu" :class="'ml'+index"></view>
    </view>

    <block v-for="(item,i) in goods" :key="item.id">
      <view @tap="isshow = i" class="good" v-if="item.status == indexStatus">
        <image src="../../static/order/send.png" />
        <view class="good-main">
          <view class="good-name">
            <text>八月十五中秋月饼</text>
            <text class="iconfont icon-ellipsis2"></text>
          </view>
          <view class="good-count">
            <view class="reduce">立减</view>
            <view class="count">折扣</view>
          </view>
          <view class="good-bottom">
            <view class="good-price">￥20.00</view>
            <view class="good-type">特产美味</view>
          </view>
        </view>
        <view class="good-handle" @tap.stop="isshow = null" v-show="isshow == i">
          <view class="good-edit" @tap.stop>编辑</view>
          <view @tap.stop>下架</view>
          <view @tap.stop="remove">删除</view>
        </view>
      </view>
    </block>
  </view>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      indexStatus: 'melling',
      isshow: null,
      isadd: false,
      goods: [
        {
          id: 100,
          status: "melling"
        },
        {
          id: 101,
          status: "melling"
        },
        {
          id: 102,
          status: "wait_mell"
        },
        {
          id: 103,
          status: "discount"
        },
        {
          id: 104,
          status: "wait_mell"
        },
        {
          id: 105,
          status: "melling"
        }
      ]
    }
  },
  methods: {
    remove(id) {
      uni.showModal({
        title: '是否确认删除该商品?',

        success: res => {
          if (res.confirm) {
            console.log('删除该项')
          }
          this.isshow = null
        }

      })
    }
  }
}
</script>
<style lang="less" scoped>
.ml0 {
  margin-left: 0;
}
.ml1 {
  margin-left: 33.33%;
}
.ml2 {
  margin-left: 66.66%;
}
.show {
  display: none;
}
.goods {
  margin: 0 32upx;
  .goods-nav {
    text-align: right;
    line-height: 88upx;
    font-size: 60upx;
    position: relative;
    & > .iconfont {
      font-size: 48upx;
      margin-right: 36upx;
    }
    .add {
      position: absolute;
      top: 0;
      left: -32upx;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 100;
      .sanjiao {
        position: absolute;
        top: 80upx;
        right: 46upx;
        border-style: solid;
        border-color: transparent transparent #ffffff transparent;
        border-width: 0 8upx 8upx 8upx;
      }
      .add-good {
        position: absolute;
        right: 16upx;
        top: 88upx;
        background-color: #ffffff;
        height: 138upx;
        font-size: 28upx;
        padding: 0 32upx;
        line-height: 69upx;
        border-radius: 5px;
        & > view {
          border-bottom: 1upx solid #cccccc;
          & > text {
            padding-right: 8upx;
            font-size: 26upx;
          }
        }
      }
    }
  }
  .goods-title {
    line-height: 72upx;
    font-size: 48upx;
    margin-bottom: 40upx;
  }
  .goods-tools {
    display: flex;
    height: 80upx;
    line-height: 80upx;
    .active {
      color: #4688fa;
    }
    & > view {
      flex: 1;
      & > text {
        font-size: 24upx;
      }
    }
  }
  .goods-tools-bottom {
    background-color: #eeeeee;
    height: 4upx;
    .jindu {
      transition: 0.5s;
      width: 72upx;
      height: 100%;
      background-color: #5793fa;
    }
  }
  .good {
    position: relative;
    display: flex;
    padding: 30upx 0;
    border-bottom: 2upx solid #eeeeee;
    & > image {
      width: 144upx;
      height: 144upx;
      margin-right: 16upx;
    }
    .good-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      .good-name {
        display: flex;
        justify-content: space-between;
        font-size: 28upx;
        color: #4688fa;
      }
      .good-count {
        flex: 1;
        display: flex;
        color: #ffffff;
        font-size: 20upx;
        .reduce {
          height: 32upx;
          border-radius: 5px;
          padding: 0 8upx;
          margin: 8upx 8upx 8upx 0;
          background-color: #ff4759;
        }
        .count {
          height: 32upx;
          border-radius: 5px;
          padding: 0 8upx;
          margin: 8upx 0;
          background-color: #5793fa;
        }
      }
      .good-bottom {
        font-size: 28upx;
        display: flex;
        justify-content: space-between;
        .good-type {
          font-size: 24upx;
          color: #999999;
        }
      }
    }
    .good-handle {
      position: absolute;
      top: 0;
      left: -32upx;
      width: 100vw;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32upx;
      & > view {
        width: 112upx;
        height: 112upx;
        background-color: #ffffff;
        line-height: 112upx;
        text-align: center;
        border-radius: 50%;
        margin: 0 24upx;
      }
      .good-edit {
        background-color: #4688fa;
        color: #ffffff;
      }
    }
  }
}
</style>