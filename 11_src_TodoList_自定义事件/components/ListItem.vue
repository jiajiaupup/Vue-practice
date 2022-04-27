<template>
  <li>
    <label>
      <!-- input框想要判断是否勾选 用checked的true和false来判断 加:是动态数据获取 -->
      <!-- 这里可以用点击click事件也可以用change事件，因为状态改变了 -->
      <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)" />
      <!-- 下述代码和上面的代码实现的功能是一样的，但不推荐使用，因为会直接修改props传过来的数据但props是只读不改的，所以不推荐使用，一旦使用了当todo不在对象中的时候就会报错 -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->

      <!-- 展示要做的事情的名字 所以用props里面传入的对象 然后对象.属性展示数据 -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  // 声明接收todo对象 (父组件传给子组件 用props拿到数据和方法) props是只读不改的（原始数据类型不能修改
  props: ['todo', 'checkTodo','deleteTodo'],
  // mounted () {
  //这里的this是vc就是实例组件
  //   console.log(this.todo)
  // }
  methods: {
    //拿到要处理的数据的id
    //勾选or取消勾选
    handleCheck (id) {
      // console.log(id)
      //通知App组件将对应的todo对象的done值取反
      this.checkTodo(id)
    },
    //删除todo
    handleDelete (id) {
      //判断是否需要删除用confirm
      if(confirm('确定删除吗？')){
        // console.log(id);
        //通知App组件将对应的todo对象删除一个todo
        this.deleteTodo(id)
      }
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>