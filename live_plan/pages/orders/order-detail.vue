<template>
  <view class="order-detail">
    <view class="status">{{status}}</view>
    <view class="userinfo">
      <view class="userinfo-title">客户信息</view>
      <view class="user-main">
        <image src="../../static/order/send.png" />
        <view class="user-contact">
          <view>所说</view>
          <view>13415614725</view>
        </view>
        <view class="user-phone">电话</view>
      </view>
      <view class="user-url">广州市</view>
    </view>

    <view class="goods-info">
      <view class="goods-title">商品信息</view>
      <view class="good">
        <image src="../../static/order/send.png" />
        <view class="good-main">
          <view class="good-others">
            <view class="good-name">沐浴露</view>
            <view class="good-num">x1</view>
            <view class="good-price">￥25</view>
          </view>
          <view class="good-type">125ml</view>
          <view class="good-count">
            <text class="reduce">立减2.50元</text>
            <text class="count">折扣2.50元</text>
          </view>
        </view>
      </view>
      <view class="goods-other">
        <view>共2件商品</view>
        <view>￥50</view>
      </view>
      <view class="goods-other">
        <view>配送费</view>
        <view>￥5</view>
      </view>
      <view class="goods-other">
        <view>立减</view>
        <view class="delete">-￥2.5</view>
      </view>
      <view class="goods-other">
        <view>优惠卷</view>
        <view class="delete">-￥2.5</view>
      </view>
      <view class="goods-other">
        <view>折扣</view>
        <view class="delete">-￥2.5</view>
      </view>
      <view class="goods-other">
        <view>佣金</view>
        <view class="delete">-￥1</view>
      </view>
      <view class="goods-other goods-allPrice">
        <view>合计</view>
        <view>￥46.5</view>
      </view>
    </view>

    <view class="order-info">
      <view class="order-title">订单信息</view>
      <view class="order-other">
        订单编号:
        <text>11</text>
      </view>
      <view class="order-other">
        下单时间:
        <text>时间</text>
      </view>
      <view class="order-other">
        支付方式:
        <text>货到付款</text>
      </view>
      <view class="order-other">
        配送方式:
        <text>送货上门</text>
      </view>
      <view class="order-other">
        客户备注:
        <text>无</text>
      </view>
    </view>
    <view class="order-btns">
      <view class="order-btn reject-btn">拒单</view>
      <view class="order-btn">接单</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      status: ''
    }
  },
  onLoad(options) {
    // this.status = options.status
    switch (options.status) {
      case "new_order":
        this.status = "暂未接单"
        break;
      case "wait_send":
        this.status = "等待配送"
        break;
      case "running":
        this.status = "正在配送"
        break;
      case "confirm":
        this.status = "完成配送"
        break;
      case "reject":
        this.status = "已取消订单"
        break;
    }

  },
  watch: {

  }
}
</script>
<style lang='less' scoped>
.order-detail {
  margin: 0 32upx;
  .status {
    line-height: 72upx;
    font-size: 48upx;
    margin-bottom: 26upx;
  }
  .userinfo {
    .userinfo-title {
      line-height: 108upx;
      font-size: 36upx;
    }
    .user-main {
      display: flex;
      & > image {
        width: 88upx;
        height: 88upx;
        border-radius: 50%;
        background-color: #ccc;
        margin-right: 16upx;
      }
      .user-contact {
        flex: 1;
        color: #333333;
        font-size: 28upx;
        // line-height: 44upx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .user-phone {
        width: 80upx;
        text-align: right;
      }
    }
    .user-url {
      font-size: 28upx;
      line-height: 72upx;
    }
  }

  .goods-info {
    .goods-title {
      line-height: 108upx;
      font-size: 36upx;
    }
    .good {
      display: flex;
      padding-bottom: 30upx;
      border-bottom: 1upx solid #eeeeee;
      & > image {
        width: 112upx;
        height: 112upx;
        margin-right: 16upx;
      }
      .good-main {
        flex: 1;
        .good-others {
          display: flex;
          justify-content: space-between;
          font-size: 24upx;
          color: #333333;
          .good-name {
            flex: 1;
          }
          .good-num {
            padding-right: 40upx;
          }
          .good-price {
            font-size: 28upx;
            color: black;
          }
        }
        .good-type {
          line-height: 56upx;
          font-size: 20upx;
          color: #999999;
        }
        .good-count {
          font-size: 20upx;
          color: #ffffff;
          line-height: 32upx;
          & > text {
            padding: 4upx 16upx;
            margin-right: 8upx;
            border-radius: 5px;
          }
          .reduce {
            background-color: #ff4759;
          }
          .count {
            background-color: #4688fa;
          }
        }
      }
    }
    .goods-other {
      line-height: 68upx;
      font-size: 28upx;
      display: flex;
      justify-content: space-between;
      &:nth-child(3) {
        padding-top: 16upx;
      }
      .delete {
        color: #ff4759;
      }
    }
    .goods-allPrice {
      line-height: 96upx;
      border-top: 2upx solid #eeeeee;
      border-bottom: 2upx solid #eeeeee;
    }
  }

  .order-info {
    .order-title {
      padding-top: 38upx;
      line-height: 92upx;
      font-size: 36upx;
    }
    .order-other {
      font-size: 28upx;
      color: #999999;
      & > text {
        padding-left: 16upx;
        color: black;
        line-height: 52upx;
      }
    }
  }
  .order-btns {
    margin: 40upx 0 30upx;
    display: flex;
    line-height: 88upx;
    .order-btn {
      flex: 1;
      text-align: center;
      background-color: #4688fa;
      font-size: 36upx;
      color: #ffffff;
      border-radius: 5px;
    }
    .reject-btn {
      margin-right: 34upx;
      background-color: #e1eafa;
      color: #5793fa;
    }
  }
}
</style>