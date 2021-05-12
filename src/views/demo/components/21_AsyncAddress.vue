<template>
  <h3>AsyncAddress子级组件</h3>
  <h4>{{ data }}</h4>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// 引入axios
import axios from 'axios'
export default defineComponent({
  name: '21_AsyncAddress',
  // setup() {
  //   // return axios.get('/data/address.json').then((response) => {
  //   //   return {
  //   //     data: response.data,
  //   //   }
  //   // })
  // },

  async setup() {
    const result = await axios.get('/data/address.json')
    return {
      data: result.data,
    }
  },
})
</script>
