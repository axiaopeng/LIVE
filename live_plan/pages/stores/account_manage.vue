<template>
  <view class="manage">
    <uinput title="店铺logo">
      <template>
        <view class="slot">23.39MB</view>
      </template>
    </uinput>
    <uinput title="修改密码">
      <template>
        <view class="slot">用于密码登录</view>
      </template>
    </uinput>
    <uinput title="绑定账号">
      <template>
        <view class="slot">13415614725</view>
      </template>
    </uinput>
  </view>
</template>
<script>
import uinput from '../../components/uinput.vue'

export default {
  components: {
    uinput
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.slot {
  flex: 1;
  text-align: right;
  padding-right: 10upx;
  color: #999999;
}
.manage {
  margin: 0 32upx;
  padding-top: 10upx;
}
</style>