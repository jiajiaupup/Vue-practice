<template>
  <div>
    <!-- 这里写的值是data里面的值，props接收到外部传入的值，再赋值到data中 -->
    <h1>{{ msg }}</h1>
    <h1>学生名字:{{ myName }}</h1>
    <h1>学生年龄:{{ myAge + 1 }}</h1>
    <h1>学生性别:{{ mySex }}</h1>
    <button @click="updateAge">点我修改年龄</button>
  </div>
</template>

<script>
// 备注：props 是只读的，Vue 底层会监测你对 props 的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制 props 的内容到 data 中一份，然后去修改 data 中的数据。
export default {
  name: 'studentInfo',
  data () {
    return {
      msg: "我是一只神奇的猫咪",
      myName: this.name,
      myAge: this.age,
      mySex: this.sex
    }
  },
  methods: {
    updateAge () {
      this.myAge++
    }
  },
  // props:['name','age','sexy'] 简单声明接受 不限定类型

  //props身上的属性是优先被接收的
  //接受的同时对数据进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String, //name的类型是字符串
      required: true //name是必要的
    },
    age: {
      type: Number,
      default: 99
    },
    sex: {
      type: String,
      require: true
    }
  }
}
</script>

<style>
</style>