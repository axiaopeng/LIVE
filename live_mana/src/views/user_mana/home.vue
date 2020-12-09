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
               class="cardHeader">最近七日温度变化(城市：{{city}})</div>
          <div id="weather" class="weather"></div>     
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
import {getCharts,getWeather } from '../../api/global'
 import 'echarts/lib/chart/bar'
 import 'echarts/lib/chart/line'
 require('echarts/lib/component/tooltip')
 require('echarts/lib/component/legend')
 require('echarts/lib/component/grid')
//  require('echarts/lib/component/toolbox')
export default {
  data () {
    return {
      visitChart:null,  // 访问Echart对象
      weatherChart: null, //天气Echart对象
      city: null
   }
  },
  mounted () {
    this.visitChartsee()
    window.onresize = ()=> {
        this.visitChart.resize()
        this.weatherChart.resize()
    }
    // this.getviews()
  },
  methods: {
   async visitChartsee () {    
    //  访问数据渲染开始
       let {results} = await getCharts({ page: 1,
        pageSize: 5,
        sort:{
          _id: -1
        }})
    results.data=  results.data.reverse()
       let data,X,arr,visitOpt
       data =  results.data.map(item => {
          return  item.visitPeople
       })
       X = results.data.map(item => {
         arr= item.createTime.split(' ')[0].split('-')
          return arr[2]+'/'+arr[1] 
       })
    
       visitOpt = {
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
           };
      this.visitChart = this.$echarts.init(document.querySelector('#visits'))
        this.visitChart.setOption(visitOpt)
        //  访问数据渲染结束
        // 天气数据渲染开始
        getWeather().then(res => {
            console.log(res.data)
            this.city = res.data.city   //当前ip城市
            let lowTem,highTem,dates,weatherOpt   // 低温，高温,日期
            lowTem = res.data.data.map(item => {
              return item.tem2
            })
            highTem = res.data.data.map(item => {
              return item.tem1
            })
            dates = res.data.data.map(item => {
              return item.day.split('（')[0]
            })
        weatherOpt = {
              tooltip: {
                  trigger: 'axis'
              },
              legend: {
                  data: ['低温', '高温'],
                  top: 20
              },
              grid: {
                  left: '0%',
                  right: '0%',
                  bottom: '3%',
                  containLabel: true
              },
              toolbox: {
                  feature: {
                      saveAsImage: {}
                  }
              },
              xAxis: {
                  type: 'category',
                  boundaryGap: ['10%'],  //x轴两边留空
                  data: dates
              },
              yAxis: {
                  type: 'value',
                  axisLine:{   //显示y轴
                    show:true
                  },
                  axisTick:{    //显示刻度
                    show: true
                  },
                  boundaryGap: ['0%','10%'] //y轴两边留空
              },
              series: [
                  {
                      name: '低温',
                      type: 'line',          
                      data: lowTem,
                      itemStyle : { normal: {label : {show: true,position:['30%','300%'], formatter:function(v,t,c){
                          return v.value +'℃'
                      }}}}
                  },
                  {
                      name: '高温',
                      type: 'line',
                      data: highTem,
                      itemStyle : { normal: {label : {show: true,position:['30%','-300%'], formatter:function(v,t,c){
                          return v.value +'℃'
                      }}}}
                  }
              ]
          };

        this.weatherChart = this.$echarts.init(document.querySelector('#weather'))
        this.weatherChart.setOption(weatherOpt)
        })
        // 天气数据渲染结束
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
    .weather{
       margin-top: -30px;
      width: 100%;
      height: 240px;
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