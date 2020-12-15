<template>
    <el-main>
     <el-row :gutter='10'>
     
       <el-col :span='8'>
        <el-card>
          <el-checkbox-group  @change="handleCheckAllChange" v-model="checkList">
            <el-checkbox label="一等奖"></el-checkbox>
            <el-checkbox label="二等奖"></el-checkbox>
            <el-checkbox label="三等奖"></el-checkbox>
            <el-checkbox label="四等奖"></el-checkbox>
            <el-checkbox label="谢谢惠顾"></el-checkbox>
          </el-checkbox-group>
          <div style="padding: 10px 0">若没有选中或者全选，则为概率抽奖</div>
          <luck-draw  
            @end='luckEnd($event)' 
            :btn='item.btn' 
            :prize='item.prize' 
            :pd='item.pd' 
            width='300px' 
            height='300px'
            ></luck-draw>
        </el-card>
      </el-col>
      <el-col :span='8'>
        <el-card>
          <luck-draw 
            mode='grid'
            width='240px' 
            height='240px'
            :prize='item1.prize'
            :pd='item1.pd' ></luck-draw>
        </el-card>
      </el-col>
      <el-col :span='8'>
        <el-card>sdf</el-card>
      </el-col>
    </el-row>
    </el-main>
</template>
<script>
import LuckDraw from '@/components/luckDraw'
export default {
  components:{
    LuckDraw

  },
  data(){
    return{
      checkList: ['一等奖'],
      deg: 0,
      item:{
        mode: 'disk',
        pd: [{
          padding: '10px',
          background: 'red'
        },{
          padding: '10px',
          background: '#eee'
        }],
        prize:{
          // img:'https://avatar-static.segmentfault.com/250/150/2501505664-55aa78271422a_big64',
          part: 10,  //分为10部分
          end: [2],   //停留在哪几块, 没传则为概率抽奖,从1开始
          deg: 0
       } ,
        btn:{
          // img:'https://100px.net/logo.png',
          style:{
            width:'70px',
            height: '70px',
            background:'red',
            "--bgcolor": 'red',  //小箭头背景色样式
            fontSize:'18px',
            
          },
          content: '抽奖'
        },
      },
      item1:{
        mode:'grid',
        pd: [{
          padding: '10px',
          background: 'red'
        }],
        prize:{
          img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3499996576,2706487313&fm=26&gp=0.jpg',
          part: 9,   // 9, 16
          end:[1]
        }
      },
      resetId: '1' // 每次结束后都重置
    }
  },

  methods:{   
    luckEnd(reason){
        console.log(reason)
      if([2].indexOf(reason)>=0){
        alert('一等奖')
      }else if([7].indexOf(reason)>=0){
         alert('二等奖')
      }else if([5,10].indexOf(reason)>=0){
         alert('三等奖')
      }else if([4,9].indexOf(reason)>=0){
         alert('四等奖')
      }else{
         alert('谢谢参与')
      }
      // alert('抽奖结束，谢谢惠顾')
      // this.resetId = Math.random()
    },
    handleCheckAllChange(e){
      var that =this
      this.item.prize.end = []
      e.forEach(item => {
        switch(item){
          case '一等奖':
            this.item.prize.end=[2,...this.item.prize.end]
            break;
          case '二等奖':
            this.item.prize.end=[7,...this.item.prize.end]
            break;
          case '三等奖':
            this.item.prize.end=[5,10,...this.item.prize.end]
            break;     
          case '四等奖':
            this.item.prize.end=[4,9,...this.item.prize.end]
            break;
          default:
            this.item.prize.end=[1,3,6,8,...this.item.prize.end]    
        }
      })
      console.log(this.item.prize.end)
    }
  }
}
</script>
<style lang='less' scoped>
.el-col{
  min-width: 320px;
}
</style>