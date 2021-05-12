<template>
  <h3>AsyncComponent子级组件</h3>
  <h4>{{ msg }}</h4>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: '21_AsyncComponent',
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          msg: '王平平狗比',
        })
      }, 2000)
    })
    // return {}
  },
})
</script>
