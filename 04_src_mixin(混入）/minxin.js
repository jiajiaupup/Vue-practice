//分别暴露
export const mixin = {
  methods: {
    showName() {
      alert(this.name)
    }
  },
  //组件挂载完毕就会调用这个函数
  mounted() {
    console.log('组件挂载完毕！')
  }
}

export const mixin1 = {
  data() {
    return {
      name:'jiajia',
      x: 1,
      y: 2
    }
  }
}
