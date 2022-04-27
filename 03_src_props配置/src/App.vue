<template>
  <div>
    <!-- age前面加了:之后就变成动态的了，读取的就是js表达式 -->
    <School/>
    <Student name="jia" v-bind:age="18" sex="girl"/>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: { School, Student },

}
</script>

<style scoped>
</style>
