<template>
  <!-- v-if="total"当total等于0的时候 就为false total>0时都是true -->
  <div class="todo-footer" v-if="total">
    <label>
      <!-- 第一种方式 -->
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ completeTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: ['todos', 'checkAllTodo', 'clearAllTodo'],
  computed: {
    total () {
      return this.todos.length
    },
    //已完成的总数
    completeTotal () {
      // #region
      //方法1：
      // let i = 0
      // this.todos.forEach((todo) => {
      //   if(todo.completed) i++
      // });
      // return i
      //方法2： 计算todo.completed的长度
      // return this.todos.filter(todo => todo.completed).length
      //方法3：
      // return this.todos.reduce((pre, current) => {
      //   return pre + (current.completed ? 1 : 0)
      // }, 0)
      // #endregion
      return this.todos.reduce((pre, todo) => pre + (todo.completed ? 1 : 0), 0)
    },
    /*// isAll () {
    //设置this.total > 0 的时候全选状态不被选择
    //   return this.completeTotal === this.total && this.total > 0
    // }*/
    // 计算属性完整写法：
    isAll: {
      get () {
        return this.completedTotal === this.total && this.total > 0
      },
      set (value) {
        //拿到的是单选框的value值 ture或者false
        this.checkAllTodo(value)
      }
    }
  },
  methods: {
    //#region
    //全选or全不选
    // checkAll (e) {
    //   //拿到选中的状态
    //   // console.log(e.target.checked);
    //   this.checkAllTodo(e.target.checked)
    // }
    //#endregion
    clearAll () {
      this.clearAllTodo()
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>