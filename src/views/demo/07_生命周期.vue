<template>
  <div>
    <router-link to="/">返回首页</router-link>
  </div>
  <div>
    <h2>07_生命周期</h2>
    <hr/>
    <h3>App父级组件</h3>
    <el-button @click="isShow = !isShow">切换显示</el-button>
    <hr/>
    <Child v-if="isShow" />
  </div>
</template>

<script lang="ts">
import Child from './components/07_Child.vue'
import { defineComponent, ref} from "vue"
export default defineComponent ({
  name: "demo07",
  components: {
    Child,
  },
  setup() {
    const isShow = ref(true)
    return {
      isShow,
    }
  }
})
</script>

<style scoped>

</style>
