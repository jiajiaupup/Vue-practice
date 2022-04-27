<template>
  <div class="todo-header">
    <!-- 添加一个回车按下事件用keyup -->
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'TodoHeader',
  // props接收到父组件APP传过来的方法addTodo，显示在TodoHeader的组件VC身上，把参数todoObj(新添加的数据)传给父组件
  // props: ['addTodo'],
  data () {
    return {
      title: ''
    }
  },
  methods: {
    //获取用户输出用事件对象 event
    add () {
      // 如果输入的值为空，那么就直接返回
      if (!this.title.trim()) return alert('输入不能为空')
      // 将用户输入的数据包装成一个todo对象 新添加的用户数据
      // 第一种写法：事件对象的方式 console.log(event.target.value)
      //nanoid用于随机取用一个随机的id,todoObj是每一条待办事项
      //  第一种写法：const todoObj = { id: nanoid(), title: event.target.value, done: false }
      const todoObj = { id: nanoid(), title: this.title, completed: false }
      // console.log(todoObj)

      // this.addTodo(todoObj) 用props的方法
      //添加了新的todoObj之后就清空输入框中的value
      // 第一种写法： event.target.value = ''

      //.通知App组件去添加一个todo对象  自定义事件的方式
      this.$emit('addTodo', todoObj)
      this.title = ''
    }
  }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>