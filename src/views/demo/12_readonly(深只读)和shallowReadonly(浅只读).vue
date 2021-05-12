<template>
  <div>
    <router-link to="/">返回首页</router-link>
  </div>
  <div>
    <h2>12_readonly(深只读)和shallowReadonly(浅只读)</h2>
    <hr/>
    <h3>state:{{ state2 }}</h3>
    <hr />
    <el-button @click="update">更新数据</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue'
export default defineComponent ({
  name: "demo12",
  setup() {
    const state = reactive({
      name: '佐助',
      age: 20,
      car: {
        name: '奔驰',
        color: 'yellow',
      },
    })
    // 只读的数据---深度的只读
    // const state2 = readonly(state)
    // 只读的数据---浅只读的
    const state2 = shallowReadonly(state)
    const update = () => {
      // state2.name += '==='
      // state2.car.name += '=='

      // state2.name+='==='
      state2.car.name += '==='
    }
    return {
      state2,
      update,
    }
  }
})
</script>

<style scoped>

</style>
