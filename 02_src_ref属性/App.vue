<template>
<!-- ref用来给元素或子组件注册引用信息（id的替代者）和id的区别是 写在组件元素身上获取的是整个组件的html结构 ref是获取组件实例对象 -->
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的Dom元素</button>
    <School ref="sch"/>
    <Student />
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: { School, Student },
  data () {
    return {
      msg: '欢迎学习vue'
    }
  },
  methods: {
    showDOM() {
      // console.log(document.getElementById('title'))
      console.log(this.$refs);
      console.log(this.$refs.title
      );
    }
  }
}
</script>

<style scoped>
</style>
