<template>
  <div>
    <router-link to="/">返回首页</router-link>
  </div>
  <div>
    <h2>20_Teleport组件介绍</h2>
    <hr/>
    <h3>App父级组件</h3>
    <hr>
    <ModalButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import ModalButton from './components/20_ModalButton.vue'
export default defineComponent ({
  name: "demo20",
  components:{
    ModalButton
  }
})
</script>

<style scoped>

</style>
