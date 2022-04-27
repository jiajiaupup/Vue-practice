<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- TODO头部组件 -->
        <!-- 自定义事件 @addTodo="addTodo" -->
        <TodoHeader @addTodo="addTodo" />
        <!-- 不写:传递不了js表达式 下面定义的方法都要写到子组件中传递-->
        <TodoList :todos="todos" />
        <TodoFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: { TodoHeader, TodoFooter, TodoList },
  //本来写在TODOList中的数据拿到了父组件App中，再通过:todos="todos"传给子组件TodoList
  data () {
    return {
      //完成的事情用completed 或者是done
      //加一个判断条件 本地存储的数据都是字符串 先转成对象 因为初始化的todos是null 什么都没有也没有长度 如果不加或为空数组Footer组件会报错
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  //不仅仅data里面的数据能传给子组件，methods中的方法也可以传给子组件
  // TODO 数据在哪里 操作数据的方法就在哪里
  methods: {
    //拿到子组件TodoHeader传过来的todoObj，然后把新的todos传给子组件TodoList == > <TodoList :todos="todos" />
    //.添加一个todo
    addTodo (todoObj) {
      // console.log('我是APP组件，我接收到了数据：', x)
      this.todos.unshift(todoObj)
    },
    //.勾选or取消勾选
    checkTodo (id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.completed = !todo.completed
      })
    },
    //.删除一个todo
    deleteTodo (id) {
      //因为filter返回一个新数组 所以需要重新赋值
      //返回的是需要留下的数据，过滤掉了需要删掉的 因为选中的id是todo.id ===  id 返回那些不是选中的id的
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    //.全选or取消全选
    checkAllTodo (completed) {
      this.todos.forEach((todo) => {
        //把所有的todos的当前状态不管是勾选还是不勾选全部设置为 completed
        todo.completed = completed
      })
    },
    //.清除所有的已完成的todo
    clearAllTodo () {
      //return 需要留下的值
      this.todos = this.todos.filter((todo) => { return !todo.completed })
    }
  },
  //只要数据改变就能监视到
  watch: {
    todos: {
      deep: true,
      //在todos发生变化的时候把值存入到本地存储中
      handler (value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  //当组件一挂载就绑定事件总线
  mounted () {
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('deleteTodo', this.deleteTodo)
  },
  // 当组件准备销毁的时候 解绑事件
  beforeDestroy () {
    this.$bus.$off('checkTodo')
    this.$bus.$off('deleteTodo')
  }
}
</script>

<style >
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
