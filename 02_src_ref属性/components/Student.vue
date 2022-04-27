<template>
  <div>
    <h1>学生名字:{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'studentInfo',
  data () {
    return {
      name: 'zs',
      age: 18
    }
  }
}
</script>

<style>
</style>