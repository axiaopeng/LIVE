<template>
  <view class="examine">
    <view class="examine-title">店铺资料</view>
    <view class="examine-img">
      <view class="img-choose">+</view>
      <view class="examine-tip">店主手持身份证或营业执照</view>
    </view>
    <view class="examine-item">
      <view>店铺名称</view>
      <input type="text" placeholder="填写店铺名称" />
    </view>
    <view class="examine-item">
      <view>主营范围</view>
      <picker @change="pickerChange" :value="index" :range="arr" range-key="name">
        <view>{{arr[index].name}}</view>
      </picker>
    </view>
    <view class="examine-item">
      <view>店铺地址</view>
    </view>
    <view class="examine-title">店主信息</view>
    <view class="examine-item">
      <view>店主姓名</view>
      <input type="text" placeholder="填写店主姓名" />
    </view>
    <view class="examine-item">
      <view>联系电话</view>
      <input type="number" placeholder="填写店主联系电话" />
    </view>

    <navigator url="/pages/examine/result" class="examine-btn">提交</navigator>
  </view>
</template>

<script>
export default {
  data() {
    return {
      arr: [{
        name: 'one'
      }, {
        name: 'two'
      }, {
        name: 'three'
      }],
      index: 0
    }
  },
  onLoad() { },
  methods: {
    pickerChange(e) {
      this.index = e.detail.value
    }
  }
}
</script>
<style lang="less" scoped>
.examine {
  margin: 0 32upx;
  .examine-title {
    font-size: 36upx;
    line-height: 120upx;
  }
  .examine-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-choose {
      width: 160upx;
      height: 160upx;
      text-align: center;
      line-height: 160upx;
      color: #ccc;
      font-size: 80upx;
      // border: 1px dashed #dddddd;
      border: 1upx dashed transparent;
      background: linear-gradient(white, white) padding-box,
        repeating-linear-gradient(
          -45deg,
          white 0em,
          #ccc 0.22em,
          white 0,
          white 0.33em
        );
      border-radius: 20upx;
    }
    .examine-tip {
      font-size: 28upx;
      color: #999999;
      line-height: 68upx;
      margin-bottom: 16upx;
    }
  }
  .examine-item {
    line-height: 100upx;
    font-size: 28upx;
    display: flex;
    border-bottom: 1upx solid #eeeeee;
    & > view {
      margin-right: 32upx;
    }
    & > input {
      flex: 1;
      height: 100upx;
      line-height: 100upx;
      font-size: 28upx;
    }
  }
  .examine-btn {
    line-height: 88upx;
    background-color: #96bbfa;
    color: #d4e2fa;
    font-size: 36upx;
    text-align: center;
    margin-top: 94upx;
    border-radius: 10upx;
  }
}
</style>