<template>
  <view class="register">
    <view class="register-title">重置登录密码</view>
    <view class="psLogin-input">
      <input type="text" placeholder="请输入账户" />
    </view>
    <view class="psLogin-input">
      <input type="text" placeholder="请输入验证码" />
    </view>
    <view class="psLogin-input">
      <input type="password" placeholder="请输入新密码" />
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
    line-height: 168upx;
    text-align: center;
    font-size: 52upx;
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