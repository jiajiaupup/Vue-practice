<template>
  <div class="app">
    <h1>{{ msg }},学生姓名是：{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子组件给父组件传递数据 这里是亲自把函数传过去 亲自调用-->
    <School :getSchoolName="getSchoolName" />

    <!-- 第一种绑定事件的方式：用v-on或@atjiajia="getStudentName" -->
    <!-- 通过父组件给子组件绑定了一个自定义事件实现：子组件给父组件传递数据 这里是把传过去的事件的函数作为回调在使用-->
    <!-- <Student v-on:atjiajia="getStudentName" v-on:demo="m1" /> -->
    <!-- <Student v-on:atjiajia.once="getStudentName" /> -->
    <!-- 由于v-on在组件的实例标签上，给组件Student的实例对象vc身上绑定了一个事件，名为atjiajia只要触发了这个事件就会调用demo函数 -->

    <!-- 第二种绑定事件的方式：ref -->
    <!-- 用this.$refs.student 可以拿到student的组件实例对象 -->
    <Student ref="student" @click.native="show" />
    <!-- 加了native就能用原生事件 -->
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
      msg: 'hello！',
      studentName: ''
    }
  },
  //定义在methods里用普通函数的方式定义的this都指向当前所在的实例
  methods: {
    getSchoolName (name) {
      console.log('App收到了学校名', name)
    },
    // 可以传入多个数据 用...params
    getStudentName (name, ...params) {
      console.log('App收到了学生名', name, params)
      this.studentName = name
    },
    //自定义一给demo事件，事件名为m1
    m1 () {
      console.log('demo事件被触发了')
    },
    //自定义事件的事件名写在子组件中，但回调一定是写在父组件中的
    show () {
      alert('123')
    }
  },
  // mounted写在哪个组件里面就是哪个组件对象挂载完毕
  // 用ref的时候写下述代码
  mounted () {
    // this.$refs.student拿到student组件实例对象 vc 给vc绑定事件，名为atjiajia,只要触发了这个事件就会调用getStudentName函数 ，这里一定要加this，不然会显示函数未定义
    //.谁触发的这个自定义事件atjiajia，事件回调的this就指向谁
    this.$refs.student.$on('atjiajia', this.getStudentName)
    // this.$refs.student.$once('atjiajia', this.getStudentName)
  }
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
