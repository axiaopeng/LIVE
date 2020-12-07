<template>
  <view class="register">
    <view class="register-title">开启你的账户</view>
    <view class="psLogin-input">
      <input type="text"  placeholder="请输入手机号" v-model="regi.username" />
    </view>
    <view class="psLogin-input">
      <input type="text" placeholder="密码为 8-18位长度,数字,字母,字符任意两种" v-model="regi.password" />
    </view>
    <view class="psLogin-input">
      <input type="password" placeholder="请再次输入密码"  v-model="check"/>
    </view>
    <view @tap='register' class="psLogin-btn" :class="regi.username!= null&&regi.password !=null?'writeDone':''">注册</view>
  </view>
</template>
<script>
	import {$}  from '../../network/fetch.js'
export default {
  data() {
    return {
		regi:{
			username: null,
			password:null,
			creator: '5fc85e78e24ba247040a096e'
		},
		check: null
    }
  },
  onLoad() {

  },
  methods: {
	  async register(){
		const res = await $({
			url: '/user/regi_u',
			method:'POST',
			data:this.regi
		})
		if(res.status == 200){
			uni.showToast({
				title:'注册成功'
			})
			setTimeout(() => {
				uni.navigateBack()
			},1500)
		}else if(res.status === 400){
			if(res.results.errors){
				uni.showToast({
					icon: 'none',
					title: res.results.errors.username.message
				})
			}else if(res.results.code&&res.results.code === 11000){
				uni.showToast({
					icon: 'none',
					title: '该手机号已被创建'
				})
			}
		}
	  }
  }

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
    font-size: 40upx;
	
    color: #d4e2fa;
    border-radius: 3px;
	
  }
  .writeDone{
	  background-color: #5656fa;
	  color:#fff;

  }
}

</style>