import Vue from 'vue'
import App from './App.vue'
//全局混合
import { mixin, mixin1 } from './minxin'

Vue.config.productionTip = false
//把定义的mixin挂载再全局 有几个就挂载几个
Vue.mixin(mixin)
Vue.mixin(mixin1)

new Vue({
  render: h => h(App)
}).$mount('#app')
