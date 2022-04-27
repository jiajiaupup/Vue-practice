<template>
  <div class="demo">
    <h1>学校名字：{{ name }}</h1>
    <h1 >学校地址：{{ address }}</h1>
    <div class="atjiajia">今天天气真好</div>
  </div>
</template>

<script>

export default {
  name: 'SchoolInfo',
  data () {
    return {
      name: 'sgg1234',
      address: '长沙'
    }
  },
}
</script>

<style lang="less" scoped>
/* 相当于给添加这个属性的标签添加了一个随机数字的属性 <div data--3375b0b8 class="demo"></div> */
.demo {
  background-color: skyblue;
  .atjiajia {
    font-size: 40px;
  }
}
</style>