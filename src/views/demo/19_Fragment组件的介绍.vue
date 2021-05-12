<template>
  <div>
    <router-link to="/">返回首页</router-link>
  </div>
  <div>
    <h2>19_Fragment组件的介绍</h2>
    <hr/>
    <!--根标签-->
    <!-- <div>
      <h3>测试1</h3>
      <h3>测试2</h3>
    </div> -->
    <div>备注：在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中 好处: 减少标签层级, 减小内存占用</div>
    <h3>测试1</h3>
    <h3>测试2</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent ({
  name: "demo19"
})
</script>

<style scoped>

</style>
