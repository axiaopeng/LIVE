import Vue from 'vue'
// 引入echarts图形表
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js' //按需引入elelment
import './normalize.css' //样式初始化
// import * as echarts from 'echarts/echarts.simple'
import echarts from 'echarts/lib/echarts'

import './permission' //导入登录权限路由判断

import drag from '@/directive/el-drag-dialog/drag'
Vue.directive('drag', drag)

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')