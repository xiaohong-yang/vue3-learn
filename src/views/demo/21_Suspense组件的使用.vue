<template>
  <div>
    <router-link to="/">返回首页</router-link>
  </div>
  <div>
    <h2>21_Suspense组件的使用</h2>
    <hr/>
    <h3>App父级组件</h3>
    <hr/>
    <Suspense>
      <template #default>
        <!--异步组件-->
        <!-- <AsyncComponent /> -->
        <AsyncAddress />
      </template>
      <template v-slot:fallback>
        <!--loading的内容-->
        <h2>Loading.....</h2>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive} from "vue"

// 静态引入组件
// import AsyncComponent from './components/21_AsyncComponent.vue'
import AsyncAddress from './components/21_AsyncAddress.vue'
export default defineComponent ({
  name: "demo21",
  components: {
    // AsyncComponent,
    AsyncAddress,
  }
})
</script>

<style scoped>

</style>
