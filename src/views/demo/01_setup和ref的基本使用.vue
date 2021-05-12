<template>
  <div>
    <router-link to="/">返回首页</router-link>
  </div>
  <div>
    <h2>01_setup和ref的基本使用</h2>
    <hr/>
<!--    <h3>{{count1}}</h3>
    <el-button @click="updateCount1">更新数据(vue2)</el-button>-->
    <h3>{{count2}}</h3>
    <el-button @click="updateCount2">更新数据(vue3)</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

// 需求：页面打开后可以直接看到一个数据，点击数据后，改数据可以发生变化

// vue2的方式实现
/*export default {
  name: "demo01",
  data () {
    return {
      count1: 0 // 属性
    }
  },
  methods: {
    updateCount1 () { // 方法
      this.count1++
    }
  }
}*/

// vue3的方式实现
export default defineComponent ({
  name: "demo01",
  // setup是组合API的入口函数
  setup () {
    // 变量
    // let count2 = 0 // 此时的数据并不是响应式数据（响应式数据:数据变化,页面跟着渲染变化）
    // ref是一个函数，作用：定义一个响应式的数据，返回的是一个Ref对象，对象中有一个value属性，如果需要对数据进行操作，需要使用该Ref对象调用value属性的方式进行数据的操作
    // html模板中是不需要使用.value属性的
    // 一般用来定义一个基本数据类型的响应式数据
    // 此时 count2 的类型是Ref类型
    const count2 = ref(0)
    function updateCount2 () {
      // 报错的原因:count是一个Ref对象,对象是不能进行++的操作
      // count++
      count2.value++
      console.log('count2：', count2)
    }
    // 返回的是一个对象
    return {
      // 属性
      count2,
      // 方法
      updateCount2
    }
  },
})
</script>

<style>

</style>
