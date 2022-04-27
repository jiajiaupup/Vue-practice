<template>
  <div>
    <h1 @click="showName">学生名字:{{ name }}</h1>
    <h1>学生性别:{{ sex }}</h1>
  </div>
</template>

<script>
// import { mixin, mixin1 } from '../minxin'
export default {
  name: 'studentInfo',
  data () {
    console.log(this)
    return {
      name: 'zs',
      sex: '男'
    }
  },
  //  mounted() {
  //   console.log('stduent组件挂载完毕！！')
  // },
  // mixins: [mixin,mixin1]

}
</script>

<style>
</style>