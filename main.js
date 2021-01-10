import Vue from 'vue'
import App from './App'
// 导入封装的myRequest请求方法
import { myRequest } from 'api/api.js'

// 挂载myRequest到原型上，供全局使用
Vue.prototype.$myRequest = myRequest
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
