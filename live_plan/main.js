import Vue from 'vue'
import App from './App'
import store from './store/index.js'

Vue.prototype.$store = store //将store挂载到vue原型上
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
  store  //将store挂载到vue全局上
})
app.$mount()
