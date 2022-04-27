import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// const Demo = Vue.extend({})
// const d = new Demo()

// x 是实例对象
// Vue.prototype.x = d

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
  }
}).$mount('#app')

/* 
.安装全局事件总线
new Vue({
  ......
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线,$bus就是当前应用的vm
  }
})

使用事件总线：
1.接受数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身
methods(){
  demo(data){...}
}
....
mounted(){
  this.$bus.$on('xxx',this.demo)
}

2.提供数据：this.$bus.$emit('xxx',数据)
!最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件
 */
