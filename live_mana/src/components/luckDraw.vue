<template>
  <div class="luck_draw">
      <!-- 转盘最多三层边框 -->
      <div v-if="mode=='disk'" class="pd1" :style='pd[0]?{...pd[0],minWidth:width,height}:""'>
        <div class="pd2" :style='pd[1]?pd[1]:""'>
          <div class="pd3" :style='pd[2]?pd[2]:""'>
             <!-- 奖品区域 -->
              <!-- <img ref='img' class="img" v-if='prize' :style="'transform:rotateZ('+deg+'deg)'" :src="prize.img" alt="奖品区域"> -->
              <img ref='img' class="img" v-if='prize' :style="'transform:rotateZ('+deg+'deg)'" src="@/assets/luck.jpg" alt="奖品区域">
              <img @click='lucking' class="btnImg"  v-if="btn.img" :style='btn.style' :src="btn.img" alt="中间按钮">
              <div @click='lucking' v-else class="btnImg2" :style='btn.style' >{{btn.content}}</div>
          </div>
        </div>
      </div> 

      <!-- 九宫格转盘 -->
       <div v-if="mode=='grid'" class="gpd1" :style='pd[0]?{...pd[0],minWidth:width,height}:""'>
        <div class="gpd2" :style='pd[1]?pd[1]:""'>
          <div class="gpd3" :style='pd[2]?pd[2]:""'>
            <img ref='img' class="gridImg" v-if='prize' :src='prize.img' />
          </div>
        </div>
      </div>      
  </div>
</template>
<script>
export default {
  props:{
    mode:{
      type: String,
      default: 'disk'
    },
    width:{
      type: String
    },
    height:{
      type: String
    },
    pd:{
      type: Array,
      default: []
    },
    prize:{
      type: Object
    },
    btn:{
      type: Object
    },
    reset:{
      type: Boolean
    }
  },
  data(){
    return{
      deg:0,
      partDeg: null,   //每块的角度大小
      endDeg: null,     //结束角度  
      action: false
    }
  },
  create(){},
  mounted(){
    var that = this
     this.partDeg = 360/this.prize.part
        this.$refs.img.addEventListener("transitionend",function(){
              that.$emit('end',-Math.floor((that.deg%360-360)/36))
              that.action = false       
       })
  },
  methods: {
    lucking(){
        if(this.action == false){
          this.action = true
          if(this.prize.end){ //内定好停止结果
            let part = Math.ceil(Math.random()*this.prize.end.length)-1
            this.endDeg = this.prize.deg- this.partDeg*(this.prize.end[part]-1) - Math.random()*this.partDeg
            this.deg+=  (this.endDeg -this.deg%360)+ 2880 
          }else{   //随机结果
            this.deg +=  Math.random()*360 +2880
            console.log(this.deg%360)
          }
        }
    }
  }
}
</script>
<style lang='less' scoped>
.luck_draw{
  display: flex;
  justify-content: center;
}
.pd1,.pd2,.pd3{
  box-sizing: border-box;
  border-radius: 50%;
  height: 100%;
}
.gpd1,.gpd2,.gpd3{
  box-sizing: border-box;
  height: 100%;
}
.img{
  width: 100%;
  height:100%;
  border-radius: 50%;
    transition: all 4s cubic-bezier(.3, .6, .3, 1);
}
.gridImg{
  width: 100%;
  height:100%;
}
.pd3{
  position: relative;
  .btnImg{
  position: absolute;
  left:50%;
  top: 50%;
  transform: translate(-50%,-50%);
 
 }
 .btnImg2{
  position: absolute;
  left:50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &:before{
    content: '';
    width:0;
    height:0;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    //  -ms-border-bottom: 16px solid red;
    // ie不兼容var
    border-bottom: 16px solid var(--bgcolor);
   
    border-left: 10px solid transparent;
    position: absolute;
    top: -22px;
    left: 50%;
    transform: translateX(-50%);
    
  }
 }
}
// .pd2{
//   box-sizing: border-box;
//   border-radius: 50%;
//   height:100%;
// }


</style>