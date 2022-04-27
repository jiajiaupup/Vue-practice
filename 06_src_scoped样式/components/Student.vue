<template>
  <div class="demo">
    <h1>学生名字:{{ name }}</h1>
    <h1>学生性别:{{ sex }}</h1>
  </div>
</template>

<script>
export default {
  name: 'studentInfo',
  data () {
    return {
      name: 'zs',
      sex: '男'
    }
  },
}
</script>

<style scoped>
/* 如果这里的样式 */
.demo{
  background-color: #bfa;
}
</style>