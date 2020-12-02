<template>
  <el-main>
    <el-row :gutter='12'>
      <el-col :span='8'>
        <el-card>
          <div slot="header"
               class="cardHeader">今日活跃客户</div>
          <div id="visits" :style="{width: '300px', height: '300px'}"></div>
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
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>
<script>


export default {
  data () {
    return {}
  },
  mounted () {
    this.visitChartsee()
  },
  methods: {
    visitChartsee () {    
        var visitChart = this.$echarts.init(document.querySelector('#visits'))

   let option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }]
      }
      visitChart.setOption(option)

    }
  }
}
</script>
<style lang='less' scoped>
.el-main {
  background-color: #f2f2f2;
  .cardHeader {
    line-height: 10px;
    height: 10px;
  }
}
</style>