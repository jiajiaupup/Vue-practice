import Vue from 'vue'
import App from '../src/App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //安装全局事件总线
  //.全局事件总线就是给$bus绑定自定义事件
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
