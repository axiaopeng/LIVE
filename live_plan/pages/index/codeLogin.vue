<template>
  <view class="psLogin">
    <view class="psLogin-title">验证码登录</view>
    <view class="psLogin-input">
      <input type="text" placeholder="请输入账号" />
    </view>
    <view class="psLogin-input">
      <input type="password" placeholder="请输入密码" />
    </view>
    <view class="codeLogin-tip">
      提示：未注册账号的手机号，清先
      <navigator url="/pages/index/register" class="url-register">注册</navigator>。
    </view>
    <view class="psLogin-btn">登录</view>
  </view>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.psLogin {
  font-family: PingFangSC-Medium;
  margin: 0 32upx;

  .psLogin-title {
    line-height: 136upx;
    font-size: 52upx;
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
  .codeLogin-tip {
    color: #999999;
    font-size: 24upx;
    .url-register {
      display: inline-block;
      color: #ff4759;
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
}
</style>