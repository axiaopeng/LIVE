<template>
  <view class="manage">
    <uinput url="/pages/stores/account_manage" title="账号管理"></uinput>
    <uinput title="清除缓存">
      <template>
        <view class="slot">23.39MB</view>
      </template>
    </uinput>
    <uinput title="检查更新"></uinput>
    <uinput title="联系我们"></uinput>
    <uinput title="关于我们"></uinput>
    <uinput title="退出当前账号"></uinput>
  </view>
</template>
<script>
import uinput from '../../components/uinput.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    uinput
  }
}
</script>
<style lang="less" scoped>
.manage {
  padding-top: 10upx;
  margin: 0 32upx;
}
.slot {
  flex: 1;
  text-align: right;
  padding-right: 10upx;
  color: #999999;
}
</style>