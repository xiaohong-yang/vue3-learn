<template>
  <div>
    <router-link to="/">返回首页</router-link>
  </div>
  <div>
    <h2>13_toRaw(将代理对象变成了普通对象)和markRaw(标记对象数据,使之不能再成为代理对象)</h2>
    <hr/>
    <h3>state:{{ state }}</h3>
    <hr />
    <el-button @click="testToRaw">测试toRaw</el-button>
    <el-button @click="testMarkRaw">测试markRaw</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, markRaw, reactive, toRaw } from 'vue'
interface UserInfo {
  name: string;
  age: number;
  likes?: string[];
}
export default defineComponent ({
  name: "demo13",
  setup() {
    const state = reactive<UserInfo>({
      name: '小明',
      age: 20,
    })

    const testToRaw = () => {
      // 把代理对象变成了普通对象了,数据变化,界面不变化
      const user = toRaw(state)
      user.name += '=='
      console.log('哈哈,我好帅哦')
    }
    const testMarkRaw = () => {
      // state.likes = ['吃', '喝']
      // state.likes[0] += '=='
      // console.log(state)
      const likes = ['吃', '喝']
      // markRaw标记的对象数据,使之从此以后都不能再成为代理对象了
      state.likes = markRaw(likes)
      setInterval(() => {
        if (state.likes) {
          state.likes[0] += '='
          console.log('定时器走起来')
        }
      }, 1000)
    }
    return {
      state,
      testToRaw,
      testMarkRaw,
    }
  }
})
</script>

<style scoped>

</style>
