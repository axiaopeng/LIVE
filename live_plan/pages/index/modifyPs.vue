<template>
  <view class="register">
    <view class="register-title">
      重置登录密码
      <view class="modifyPs-uname">设置账号 134 1561 4725</view>
    </view>
    <view class="psLogin-input">
      <input type="password" placeholder="请确认旧密码" />
      <text class="iconfont icon-bukejian"></text>
      <text class="iconfont icon-guanbi"></text>
    </view>
    <view class="psLogin-input">
      <input type="password" placeholder="请输入新密码" />
      <text class="iconfont icon-bukejian"></text>
      <text class="iconfont icon-guanbi"></text>
    </view>
    <view class="psLogin-btn">确认</view>
  </view>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  onLoad() {

  },
  methods: {}

}
</script>

<style lang="less" scoped>
.register {
  margin: 0 32upx;
  .register-title {
    margin: 30upx 0 40upx;
    line-height: 108upx;
    text-align: center;
    font-size: 52upx;
    .modifyPs-uname {
      line-height: 32upx;
      font-size: 28upx;
      color: #999999;
    }
  }
}
.psLogin-input {
  height: 100upx;
  font-size: 28upx;
  color: #333333;
  position: relative;
  margin-bottom: 18upx;
  border-bottom: 1upx solid #eeeeee;
  & > input {
    height: 100upx;
    line-height: 200upx !important;
  }
  & > text {
    position: absolute;
    right: 0;
    top: 0;
    line-height: 100upx;
    color: #999999;

    &:nth-child(3) {
      right: 60upx;
    }
  }
}
.psLogin-btn {
  margin-top: 50upx;
  text-align: center;
  background-color: #96bbfa;
  line-height: 88upx;
  font-size: 36upx;
  color: #d4e2fa;
  border-radius: 3px;
}
</style>