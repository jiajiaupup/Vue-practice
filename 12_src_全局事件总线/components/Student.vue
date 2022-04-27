<template>
  <div class="student">
    <h1>学生名字:{{ name }}</h1>
    <h1>学生性别:{{ sex }}</h1>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
export default {
  name: 'studentInfo',
  data () {
    return {
      name: 'zs',
      sex: '男',
    }
  },
  mounted () {
    // console.log('Student', this.name)
  },
  methods: {
    sendStudentName () {
      //通过$bus把自定义事件 hello 挂载在实例对象身上 传入名字
      this.$bus.$emit('hello', [this.name, this.sex])
    }
  }
}
</script>

<style scoped>
/* 如果这里的样式 */
.student {
  background-color: #bfa;
  padding: 5px;
  margin-top: 30px;
}
</style>