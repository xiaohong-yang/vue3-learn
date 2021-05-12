<template>
  <div>
    <router-link to="/">返回首页</router-link>
  </div>
  <div>
    <h2>16_provide(父向子提供数据)与inject(子或孙注入数据)</h2>
    <hr/>
    <h3>APP父级组件</h3>
    <p>当前的颜色:{{ color }}</p>
    <el-button @click="color = 'red'">红色</el-button>
    <el-button @click="color = 'yellow'">黄色</el-button>
    <el-button @click="color = 'green'">绿色</el-button>
    <hr />
    <Son />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import Son from './components/16_Son.vue'
export default defineComponent ({
  name: "demo16",
  components: {
    Son,
  },
  setup() {
    // 响应式的数据
    const color = ref('red')
    // 提供数据
    provide('color', color)
    return {
      color,
    }
  }
})
</script>

<style scoped>

</style>
