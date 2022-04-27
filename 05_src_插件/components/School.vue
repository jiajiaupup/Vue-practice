<template>
  <div>
    <h1>学校名字：{{ name | mySlice }}</h1>
    <h1>学校地址：{{ address }}</h1>
    <button @click="test">点我测试一个hello方法</button>
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
  methods:{
    test(){
      this.hello()
    }
  }

}
</script>

<style>
</style>