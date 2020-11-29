<template>
  <view class="psLogin">
    <navigator url="/pages/index/codeLogin" class="url-codeLogin">验证码登录</navigator>
    <view class="psLogin-title">密码登录</view>
    <view class="psLogin-input">
      <input type="text" v-model='form.username' placeholder="请输入手机号" />
    </view>
    <view class="psLogin-input">
      <input class="pwd" :type="isshowpwd?'text':'password'"  v-model="form.password" placeholder="请输入密码" />
      <text @tap="isshowpwd = !isshowpwd" class="iconfont" :class="isshowpwd?'icon-kejian':'icon-bukejian'"></text>
	 
    </view>
    <view  @tap='login' :class="form.username!=null&&form.password!=null?'writeDone':''" class="psLogin-btn">登录</view>
    <navigator url="/pages/index/modifyPs" class="url-forgetPs">忘记密码</navigator>
    <navigator url="/pages/index/register" class="url-register">还没账号？快去注册</navigator>
  </view>
</template>

<script>
	import {$} from '../../network/fetch.js'

export default {
  data() {
    return {
		form:{
			username: null,
			password: null
		},
		isshowpwd: false
    }
  },
  onLoad() {

  },
  onShow() {

  },
  methods: {
	async login(){
		
		const res = await $({
			url:'/user/login_u',
			method: "POST",
			data:this.form
		})
		
		if(res.status == 200){
			getApp().globalData.userInfo = res.userInfo
			uni.switchTab({
				url:'/pages/tabbar/store'
			})
		}else if(res.status == 400){
			uni.showToast({
				image:'../../static/icon/error.png',
				title:res.error
			})
		}
	}
  }
}
</script>

<style lang="less" scoped>
.psLogin {
	
  font-family: PingFangSC-Medium;
  margin: var(--status-bar-height) 32upx 0;
  .url-codeLogin {
    text-align: right;
    line-height: 88upx;
    font-size: 28upx;
    color: #333333;
  }
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
	.pwd{
		height: 100upx;
		line-height: 200upx !important;
		font-size: 34upx;
		border: none;
		outline: none;
		border-bottom: 1upx solid #eeeeee;
	}
    & > text {
      position: absolute;
	  cursor: pointer;
      right: 0;
      top: 0;
      line-height: 100upx;
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
  .writeDone{
  	  background-color: #5656fa;
  	  color:#fff;
  
  }
  .url-forgetPs {
    line-height: 80upx;
    text-align: right;
    font-size: 24upx;
    color: #999999;
  }
  .url-register {
    text-align: center;
    color: #4688fa;
    font-style: 28upx;
    line-height: 100upx;
  }
}
</style>
