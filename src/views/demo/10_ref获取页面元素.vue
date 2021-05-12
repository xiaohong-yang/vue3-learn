<template>
  <div>
    <router-link to="/">返回首页</router-link>
  </div>
  <div>
    <h2>10_ref获取页面元素</h2>
    <hr/>
    <el-input type="text" ref="inputRef" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

// 需求:当页面加载完毕后,页面中的文本框可以直接获取焦点(自动获取焦点)
export default defineComponent ({
  name: "demo10",
  setup() {
    // 默认是空的,页面加载完毕,说明组件已经存在了,获取文本框元素
    const inputRef = ref<HTMLElement | null>(null)
    // 页面加载后的生命周期组合API
    onMounted(() => {
      inputRef.value && inputRef.value.focus() // 自动获取焦点
      console.log('输入框HTML：', inputRef)
    })
    return {
      inputRef
    }
  }
})
</script>

<style scoped>

</style>
