<template>
  <view class="add">
    <view class="add-title">基本信息</view>
    <view class="add-img">
      <view class="img-choose">+</view>
      <view class="add-tip">店主手持身份证或营业执照</view>
    </view>
    <view class="add-item">
      <view>商品名称</view>
      <input type="text" id="good_name" @blur="input" placeholder="填写商品名称" />
    </view>
    <view class="add-item">
      <view>商品简介</view>
      <input type="text" id="good_introduce" @blur="input" placeholder="填写简短描述" />
    </view>
    <view class="add-item">
      <view>折后价格</view>
      <input type="number" id="good_price" @blur="input" placeholder="填写商品单品折后价格" />
    </view>
    <view class="add-item">
      <view>商品条码</view>
      <input type="text" id="good_code" @blur="input" placeholder="选填" />
      <text class="iconfont icon-saoma"></text>
    </view>
    <view class="add-item">
      <view>商品说明</view>
      <input type="text" id="good_explain" @blur="input" placeholder="选填" />
    </view>
    <view class="add-title">折后立减</view>
    <view class="add-item">
      <view>立减金额</view>
      <input type="number" id="good_reduce" @blur="input" placeholder="0.00" />
    </view>
    <view class="add-item">
      <view>折扣金额</view>
      <input type="number" id="good_count" @blur="input" placeholder="0.00" />
    </view>
    <view class="add-title">类型规格</view>
    <view class="add-item">
      <view>商品类型</view>
      <input type="text" placeholder="请选择商品类型" />
    </view>
    <view class="add-item">
      <view>商品规格</view>
      <input type="text" placeholder="对规格进行分类" />
    </view>
    <view class="add-btn" @tap="submit">提交</view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      good: {
        good_name: '',
        good_introduce: '',
        good_price: 0,
        good_code: null,
        good_explain: '',
        good_reduce: null,
        good_count: null,
        good_type: '',
        good_specs: null
      }
    }
  },
  methods: {
    input(e) {
      if (e.target.value.trim() != '') {
        this.good[e.target.id] = e.target.value
      }
    },
    submit() {
      console.log(this.good)
    }

  }
}
</script>
<style lang="less" scoped>
.add {
  margin: 0 32upx 32upx;
  .add-title {
    line-height: 120upx;
  }
  .add-img {
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
    .add-tip {
      font-size: 28upx;
      color: #999999;
      line-height: 68upx;
      margin-bottom: 16upx;
    }
  }
  .add-item {
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
  .add-btn {
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