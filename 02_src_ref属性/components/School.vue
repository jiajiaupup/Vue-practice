<template>
  <div>
    <h1>学校名字：{{name}}</h1>
    <h1>学校地址：{{address}}</h1>
    <button @click="showName">点我显示学校名字</button>
  </div>
</template>

<script>
export default {
  name:'SchoolInfo',
  data(){
    return{
      name:'sgg',
      address:'长沙'
    }
  },
  methods:{
    showName(){
      alert(this.name)
    }
  }
}
</script>

<style>

</style>