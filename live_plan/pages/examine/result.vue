<template>
  <view class="result">
    <image class="result-icon" src="../../static/icon/wait.png" />
    <text class="result-tip">店铺资料已提交，等待人工审核</text>
    <text class="result-date">2019-02-21 15:20:10</text>
    <text class="result-down">预计完成时间: 02月28日</text>
    <view class="result-btn">返回</view>
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
.result {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 32upx;
  .result-icon {
    margin-top: 98upx;
    width: 144upx;
    height: 144upx;
  }
  .result-tip {
    line-height: 88upx;
  }
  .result-date {
    font-size: 24upx;
    color: #999999;
  }
  .result-down {
    font-size: 24upx;
    color: #999999;
    line-height: 64upx;
  }
  .result-btn {
    line-height: 88upx;
    background-color: #4688fa;
    width: 100%;
    text-align: center;
    color: #f1f1f1;
    margin-top: 32upx;
  }
}
</style>