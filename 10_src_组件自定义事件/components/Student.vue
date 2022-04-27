<template>
  <div class="student">
    <h1>学生名字:{{ name }}</h1>
    <h1>学生性别:{{ sex }}</h1>
    <h1>{{ number }}</h1>
    <button @click="add">点我number+1</button>
    <button @click="setStudentName()">把学生名给App</button>
    <button @click="unbind">解绑atjiajia事件</button>
    <button @click="death">销毁掉当前Student组件的实例(vc)</button>
  </div>
</template>

<script>
export default {
  name: 'studentInfo',
  data () {
    return {
      name: 'zs',
      sex: '男',
      number: 0
    }
  },
  methods: {
    add () {
      console.log('add被调用了')
      this.number++
    },
    setStudentName () {
      // 触发Student组件实例身上的atjiajia事件 $emit('事件名')
      this.$emit('atjiajia', this.name, 666, 888, 999)
      // this.$emit('demo')
    },
    unbind () {
      this.$off('atjiajia') //解绑一个自定义事件
      //this.$off(['atjiajia', 'demo']) //解绑多个自定义事件
      //this.$off()  //解绑所有的自定义事情
    },
    death () {
      this.$destroy() //销毁了当前Student的组件实例,响应式就没有了，但原生事件依旧存在，Student组件实例上的自定义事件不存在了
    },
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