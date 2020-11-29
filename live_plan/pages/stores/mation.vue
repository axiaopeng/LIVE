<template>
  <view class="mation">
    <block v-for="item in mations" :key="item.time">
      <uinput type="two" :mation="item"></uinput>
    </block>
  </view>
</template>
<script>
import uinput from '../../components/uinput.vue'

export default {
  components: {
    uinput
  },
  data() {
    return {
      mations: [
        {
          time: '2020-05-01 14:20:09',
          title: '系统通知',
          isread: 0,
          content: '供货商由于【商品缺货】原因，取消了采购订单'
        },
        {
          time: '2020-04-01 14:20:09',
          title: '系统通知',
          isread: 0,
          content: '供货商由于【商品缺货】原因，取消了采购订单'
        },
        {
          time: '2020-03-01 14:20:09',
          title: '阿鹏通知',
          isread: 1,
          content: '供货商由于【商品缺货】原因，取消了采购订单'
        }

      ]
    }
  }
}
</script>
<style lang="less" scoped>
.mation {
  margin: 0 32upx;
}
</style>