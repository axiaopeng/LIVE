<template>
  <el-main>
    <el-row :gutter='12'>
      <el-col :span='8'>
        <el-card>
          <div slot="header"
               class="cardHeader">近五日系统访问次数</div>
          <div id="visits" class="visits" ></div>
        </el-card>
      </el-col>
      <el-col :span='8'>
        <el-card>
          <div slot="header"
               class="cardHeader">今日代办事宜</div>
        </el-card>
      </el-col>
      <el-col :span='8'>
        <el-card>
          <div slot="header"
               class="cardHeader">版本信息</div>
          <div class="table">
            <div class="table_row">
              <div class="table_col_left">当前版本</div>
              <div class="table_col_right">1.0</div>
            </div>
             <div class="table_row">
              <div class="table_col_left">基于框架</div>
              <div class="table_col_right">Vue+Vue-Router+VueX</div>
            </div>
            <div class="table_row">
              <div class="table_col_left">开发人员</div>
              <div class="table_col_right">卓泽鹏(微:13415614725)</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>
<script>
import {getCharts } from '../../api/global'

export default {
  data () {
    return {
      visitChart:null
    }
  },
  mounted () {
    this.visitChartsee()
    window.onresize = ()=> {
        this.visitChart.resize()
    }
    // this.getviews()
  },
  methods: {
   async visitChartsee () {    
      this.visitChart = this.$echarts.init(document.querySelector('#visits'))
       let {results} = await getCharts() 
       let data,X,arr
       data = results.data.map(item => {
          return  item.visitPeople
       })
       X = results.data.map(item => {
         arr= item.createTime.split(' ')[0].split('-')
          return arr[2]+'/'+arr[1] 
       })
       let option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: X
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: data,
          type: 'line',
          areaStyle: {}
        }]
      }
      this.visitChart.setOption(option)
     
    }

  }
}
</script>
<style lang='less' scoped>
.el-main {
  background-color: #f2f2f2;
  .el-card{
    width: 100%;
    height: 300px;
    .cardHeader {
      line-height: 10px;
     height: 10px;
    }
    .visits{
      margin-top: -40px;
      width: 100%;
      height: 280px;
    }
    .table{
      .table_row{
        border-top:1px solid #e6e6e6;
        border-left:1px solid #e6e6e6;
        border-right:1px solid #e6e6e6;
        display: flex;
        line-height: 40px;
        &:last-child{
                  border-bottom:1px solid #e6e6e6;
        }
        .table_col_left{
          border-right: 1px solid #e6e6e6;
          flex: 2;
          text-align: center;
        }
        .table_col_right{
          flex: 5;
          margin-left: 10px;
        }
      }
    }
  }
  
}
</style>