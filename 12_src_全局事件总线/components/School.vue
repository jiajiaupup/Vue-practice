<template>
  <div class="school">
    <h1>学校名字：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
    <button @click="death">解绑了hello事件</button>
  </div>
</template>

<script>

export default {
  name: 'SchoolInfo',
  data () {
    return {
      name: 'sgg1234',
      address: '长沙'
    }
  },
  mounted () {
    console.log('School', this)
    this.$bus.$on('hello', (data) => {
      console.log('我是School组件，收到了数据', data)
    })
  },
  // 当组件实例将要被销毁的时候解绑这些组件实例上的自定义事件
  beforeDestroy () {
    console.log('解绑了hello事件')
    this.$bus.$off('hello')
  }
}
</script>

<style lang="less" scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>