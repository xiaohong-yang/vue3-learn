<template>
  <div>
    <router-link to="/">返回首页</router-link>
  </div>
  <div>
    <h2>04_vue3-setup的执行时机问题</h2>
    <hr/>
    <h3>父级组件</h3>
    <div>msg：{{ msg }}</div>
    <el-button @click="changeMsgByParent">更新数据(父组件 => 子组件）</el-button>
    <hr/>
    <Child :msgToChild="msg" msg2="熊佳儿是狗比" @msgToParent="msgToParent"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import Child from "./components/04_Child.vue"
export default defineComponent ({
  name: "demo04",
  components: {
    Child
  },
  setup () {
    const msg = ref('王平平，菜得抠脚')
    const changeMsgByParent = () => {
      msg.value += '，狗比'
    }
    const msgToParent = (val: string) => {
      msg.value += val
    }
    return {
      msg,
      changeMsgByParent,
      msgToParent
    }
  }
})
</script>

<style scoped>

</style>
