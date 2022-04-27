/*
  该文件是整个项目的入口文件
*/
//todo 引入vue对象，类似于script src = vue.js
import Vue from 'vue'  

//引入App组件，它是所有组件的父组件  APP.vue文件里对象引入到到vue项目页面入口
import App from './App.vue' 

Vue.config.productionTip = false

//开始实例化vue
new Vue({ 
  //准备渲染App页面 将App组件放入容器
  render: h => h(App),   
  //和上面的简写代码一样，但是上面是组件的形式不加'' render:createElement=>{ return createElement('h1','你好啊')}
}).$mount('#app')
