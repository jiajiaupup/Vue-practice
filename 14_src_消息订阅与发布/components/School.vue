<template>
  <div class="school">
    <h1>学校名字：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
    <!-- <button @click="death">解绑了hello事件</button> -->
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'SchoolInfo',
  data () {
    return {
      name: 'sgg1234',
      address: '长沙'
    }
  },
  methods: {
    demo (msgName, data) {
      console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data,this)
      //这里的this就没有问题 指向的就是vc实例对象
    }
  },
  mounted () {
    // console.log('School', this)
    // this.$bus.$on('hello', (data) => {
    //   console.log('我是School组件，收到了数据', data)
    // })
    //.消息的订阅 回调有两个参数 第一个参数是事件名(消息名) 第二个才是你要传的数据
    // 每次订阅消息 都会有一个独一无二的id (pubId)
    this.pubId = pubsub.subscribe('hello', this.demo)
    // console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data)
    //? 因为用的是第三方的库 所以这里的this指向就不是vc实例对象 
    //* 解决办法 1.回调函数写成箭头函数的形式 2.这里的回调写成this.demo 然后再method中定义
    // console.log(this) //undefiend 

  },
  // 当组件实例将要被销毁的时候解绑这些组件实例上的自定义事件
  beforeDestroy () {
    // console.log('解绑了hello事件')
    // this.$bus.$off('hello')
    //.取消订阅
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style lang="less" scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>