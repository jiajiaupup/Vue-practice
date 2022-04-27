<template>
  <div class="school">
    <h1>学校名字：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
    <!-- 子组件再定义一个函数 使用父组件传递过来的函数再把参数（值）传给父组件 -->
    <button @click="setSchoolName()">把学校名给App</button>
  </div>
</template>

<script>

export default {
  name: 'SchoolInfo',
  props:['getSchoolName'],
  data () {
    return {
      name: 'sgg1234',
      address: '长沙'
    }
  },
  methods:{
    setSchoolName(){
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style lang="less" scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>