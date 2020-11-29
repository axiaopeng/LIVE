<template>
  <view class="order">
    <view class="order-nav">
      <navigator url="/pages/orders/orders-find" class="iconfont icon-search"></navigator>
    </view>
    <view class="order-title">订单</view>
    <view class="order-main">
      <view class="order-tools">
        <view class="order-tool" @click="indexStatus = 'new_order'">
          <image src="../../static/order/order.png" />
          <view class="tool-name">新订单</view>
          <view class="tool-num">{{length[0]}}</view>
        </view>
        <view class="order-tool" @click="indexStatus = 'wait_send'">
          <image src="../../static/order/send.png" />
          <view class="tool-name">待配送</view>
          <view class="tool-num">{{length[1]}}</view>
        </view>
        <view class="order-tool" @click="indexStatus = 'running'">
          <image src="../../static/order/running.png" />
          <view class="tool-name">待完成</view>
          <view class="tool-num">{{length[2]}}</view>
        </view>
        <view class="order-tool" @click="indexStatus = 'confirm'">
          <image src="../../static/order/confirm.png" />
          <view class="tool-name">已完成</view>
        </view>
        <view class="order-tool" @click="indexStatus = 'reject'">
          <image src="../../static/order/reject.png" />
          <view class="tool-name">已取消</view>
        </view>
      </view>
      <view>-</view>
      <view class="order-tip">
        <image src="../../static/order/date.png" />
        <view class="order-date">2020年5月1日</view>
        <view class="order-num">3单</view>
      </view>

      <block v-for="item in orders" :key="item.order_id">
        <navigator
          v-if="item.order_status == indexStatus"
          :url="'/pages/orders/order-detail?status='+ item.order_status"
          class="order-item"
        >
          <view class="item-info">
            <view class="info-header">
              <view class="info-phone-name">{{item.user.phone}}{{(item.user.name)}}</view>
              <view class="info-buyway">
                <block v-if="item.order_payWay == '货到付款'">货到付款</block>
                <block v-else>已付款</block>
              </view>
            </view>
            <view class="info-place">{{item.user.url}}</view>
          </view>
          <view class="item-content">
            <view v-for="good in item.goods" :key="good.good_name">
              {{good.good_name}}
              <text class="nums">x{{good.good_num}}</text>
            </view>
            <view class="content-bottom">
              <view class="content-price-num">
                ￥{{item.user.pay}}
                <text>共3件商品</text>
              </view>
              <view class="content-date">{{item.order_createTime}}</view>
            </view>
          </view>
          <view class="item-bottom">
            <view class="item-btn">联系客户</view>
            <view>
              <view class="item-btn">
                <block v-if="item.order_status == 'new_order'||item.order_status == 'wait_send'">拒单</block>
                <block v-else>订单追踪</block>
              </view>
              <view
                class="item-btn blue"
                v-if="item.order_status != 'confirm'&&item.order_status != 'reject'"
              >
                <block v-if="item.order_status == 'new_order'">接单</block>
                <block v-else-if="item.order_status == 'wait_send'">开始配送</block>
                <block v-else>完成配送</block>
              </view>
            </view>
          </view>
        </navigator>
      </block>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      indexStatus: 'new_order', //默认显示新订单
      length: [],
      //所有订单信息 
      orders: null
    }
  },
  watch: {
    orders: {
      handler(newValue, oldValue) {
        var a = 0, b = 0, c = 0;
        for (var i = 0; i < newValue.length; i++) {
          switch (newValue[i].order_status) {
            case 'new_order':
              ++a;
              break;
            case 'wait_send':
              ++b;
              break;
            case 'running':
              ++c;
              break;
            default:
              break;
          }
        }
        this.length = [a, b, c]
      },
      deep: true
    }
  },
  mounted() {
    this.orders = [
      {
        order_status: "new_order",
        order_id: 1,
        order_createTime: "2020.05.16 10:00:01",
        order_sendPrice: 5,
        order_payWay: "在线支付/支付宝",
        order_sendWay: "送货上门",
        order_count: [
          {
            type: "reduce",  //立减
            price: 2.50
          },
          {
            type: "count",  //折扣
            price: 2.00
          },
          {
            type: "full",   //满减 200-30
            full: 200,
            reduce: 30
          }
        ],
        user: {
          name: "郭李",
          img: "",
          phone: 13415614725,
          url: "广州市金沙洲横沙村",
          pay: 100
        },
        goods: [
          {
            good_name: "沐浴乳",
            good_img: "",
            good_num: 1,
            good_price: 40,
            good_type: ["玫瑰香", "500ml"]
          }, {
            good_name: "洗发液",
            good_img: "",
            good_num: 1,
            good_price: 50,
            good_type: ["飘柔", "650ml"]
          }
        ]
      }, {
        order_status: "new_order",
        order_id: 2,
        order_createTime: "2020.05.16 10:00:01",
        order_sendPrice: 5,
        order_payWay: "货到付款",
        order_sendWay: "送货上门",
        order_count: [
          {
            type: "reduce",  //立减
            price: 2.50
          },
          {
            type: "count",  //折扣
            price: 2.00
          },
          {
            type: "full",   //满减 200-30
            full: 200,
            reduce: 30
          }
        ],
        user: {
          name: "啊卓",
          img: "",
          phone: 13415614725,
          url: "广州市金沙洲横沙村卷席",
          pay: 210
        },
        goods: [
          {
            good_name: "神仙水",
            good_img: "",
            good_num: 1,
            good_price: 200,
            good_type: ["玫瑰香", "500ml"]
          }, {
            good_name: "洗发液",
            good_img: "",
            good_num: 1,
            good_price: 50,
            good_type: ["飘柔", "650ml"]
          }
        ]
      },
      {
        order_status: "wait_send",
        order_id: 3,
        order_createTime: "2020.05.16 10:00:01",
        order_sendPrice: 5,
        order_payWay: "在线支付/支付宝",
        order_sendWay: "送货上门",
        order_count: [
          {
            type: "reduce",  //立减
            price: 2.50
          },
          {
            type: "count",  //折扣
            price: 2.00
          },
          {
            type: "full",   //满减 200-30
            full: 200,
            reduce: 30
          }
        ],
        user: {
          name: "郭李",
          img: "",
          phone: 13415614725,
          url: "广州市金沙洲横沙村",
          pay: 100
        },
        goods: [
          {
            good_name: "沐浴乳",
            good_img: "",
            good_num: 1,
            good_price: 40,
            good_type: ["玫瑰香", "500ml"]
          }, {
            good_name: "洗发液",
            good_img: "",
            good_num: 1,
            good_price: 50,
            good_type: ["飘柔", "650ml"]
          }
        ]
      },
      {
        order_status: "running",
        order_id: 4,
        order_createTime: "2020.05.16 10:00:01",
        order_sendPrice: 5,
        order_payWay: "在线支付/支付宝",
        order_sendWay: "送货上门",
        order_count: [
          {
            type: "reduce",  //立减
            price: 2.50
          },
          {
            type: "count",  //折扣
            price: 2.00
          },
          {
            type: "full",   //满减 200-30
            full: 200,
            reduce: 30
          }
        ],
        user: {
          name: "郭李",
          img: "",
          phone: 13415614725,
          url: "广州市金沙洲横沙村",
          pay: 100
        },
        goods: [
          {
            good_name: "沐浴乳",
            good_img: "",
            good_num: 1,
            good_price: 40,
            good_type: ["玫瑰香", "500ml"]
          }, {
            good_name: "洗发液",
            good_img: "",
            good_num: 1,
            good_price: 50,
            good_type: ["飘柔", "650ml"]
          }
        ]
      },
      {
        order_status: "confirm",
        order_id: 5,
        order_createTime: "2020.05.16 10:00:01",
        order_sendPrice: 5,
        order_payWay: "在线支付/支付宝",
        order_sendWay: "送货上门",
        order_count: [
          {
            type: "reduce",  //立减
            price: 2.50
          },
          {
            type: "count",  //折扣
            price: 2.00
          },
          {
            type: "full",   //满减 200-30
            full: 200,
            reduce: 30
          }
        ],
        user: {
          name: "郭李",
          img: "",
          phone: 13415614725,
          url: "广州市金沙洲横沙村",
          pay: 100
        },
        goods: [
          {
            good_name: "沐浴乳",
            good_img: "",
            good_num: 1,
            good_price: 40,
            good_type: ["玫瑰香", "500ml"]
          }, {
            good_name: "洗发液",
            good_img: "",
            good_num: 1,
            good_price: 50,
            good_type: ["飘柔", "650ml"]
          }
        ]
      },
      {
        order_status: "reject",
        order_id: 6,
        order_createTime: "2020.05.16 10:00:01",
        order_sendPrice: 5,
        order_payWay: "在线支付/支付宝",
        order_sendWay: "送货上门",
        order_count: [
          {
            type: "reduce",  //立减
            price: 2.50
          },
          {
            type: "count",  //折扣
            price: 2.00
          },
          {
            type: "full",   //满减 200-30
            full: 200,
            reduce: 30
          }
        ],
        user: {
          name: "郭李",
          img: "",
          phone: 13415614725,
          url: "广州市金沙洲横沙村",
          pay: 100
        },
        goods: [
          {
            good_name: "沐浴乳",
            good_img: "",
            good_num: 1,
            good_price: 40,
            good_type: ["玫瑰香", "500ml"]
          }, {
            good_name: "洗发液",
            good_img: "",
            good_num: 1,
            good_price: 50,
            good_type: ["飘柔", "650ml"]
          }
        ]
      }
    ]
  }
}
</script>
<style lang="less" scoped>
.order {
  background-color: #5793fa;
  .order-nav {
    padding: 0 32upx;
    text-align: right;
    line-height: 88upx;
    .icon-search {
      color: #ffffff;
      font-size: 48upx;
    }
  }
  .order-title {
    padding: 0 32upx;
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
    .order-tip {
      & > image {
        width: 28upx;
        height: 28upx;
        padding-right: 10upx;
      }
      padding: 0 32upx;
      font-size: 28upx;
      color: #333333;
      margin-top: 20upx;
      display: flex;
      height: 68upx;
      align-items: center;
      border-radius: 20upx;
      box-shadow: 0 4upx 16upx 8upx #f5f5f5;
      .order-num {
        text-align: right;
        flex: 1;
      }
    }
    .order-item {
      margin-top: 10upx;
      padding: 16upx 32upx;
      border-radius: 20upx;
      box-shadow: 0 4upx 16upx 8upx #f5f5f5;
      .item-info {
        .info-header {
          display: flex;
          justify-content: space-between;
          font-size: 28upx;
          line-height: 68upx;
          .info-buyway {
            color: #ff4759;
          }
        }
        .info-place {
          font-size: 24upx;
          padding-bottom: 16upx;
        }
      }
      .item-content {
        border-top: 1upx solid #eeeeee;
        border-bottom: 1upx solid #eeeeee;
        font-size: 24upx;
        line-height: 44upx;
        padding: 10upx 0;
        .nums {
          padding-left: 10upx;
          color: #999999;
        }
        .content-bottom {
          display: flex;
          justify-content: space-between;
          .content-price-num > text {
            padding-left: 10upx;
            font-size: 20upx;
            color: #999999;
          }
        }
      }
      .item-bottom {
        display: flex;
        justify-content: space-between;
        font-size: 28upx;
        margin: 16upx 0;
        .item-btn {
          line-height: 60upx;
          background-color: #f6f6f6;
          padding: 0 32upx;
          border-radius: 5px;
        }

        & > view {
          display: flex;
          .blue {
            background-color: #4688fa;
            color: #ffffff;
            margin-left: 16upx;
          }
        }
      }
    }
  }
}
</style>