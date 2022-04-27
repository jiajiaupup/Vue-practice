<template>
  <ul class="todo-main">
    <!-- 遍历data中todos的每一项，每一项都是一个单独的对象(todoObj) 要给ListItem传数据要通过:todo="todoObj" 一定要加v-bind:value 命名可以随意-->
    <ListItem 
    v-for="todoObj in todos" 
    :key="todoObj.id" 
    v-bind:todo="todoObj"/>
  </ul>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
  name: 'TodoList',
  components: { ListItem },
  // #region
  // .这里的数据写到了App组件中，再通过父组件App传过来
  // data () {
  //   return {
  //完成的事情用completed 或者是done
  //     todos: [
  //       { id: '0001', title: 'eating', completed: true },
  //       { id: '0002', title: 'gaming', completed: false },
  //       { id: '0003', title: 'sleeping', completed: true },
  //     ]
  //   }
  // }
  // #endregion
  //用props接收父组件App传入的数据和方法
  props: ['todos']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>