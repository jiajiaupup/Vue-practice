<template>
  <div>
    <h1 @click="showName">学校名字：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
  </div>
</template>

<script>
// import { mixin } from '../minxin'
export default {
  name: 'SchoolInfo',
  data () {
    return {
      name: 'sgg',
      address: '长沙'
    }
  },
  // mixins:[mixin]
}
</script>

<style>
</style>