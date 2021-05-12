<template>
  <h3>Child子级组件</h3>
  <h4>msg:{{ msg }}</h4>
  <el-button @click="updateMsg">更新数据</el-button>
</template>
<script lang="ts">
import { defineComponent, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
export default defineComponent({
  name: '07_Child',
  // vue2.x中的生命周期钩子
  beforeCreate() {
    console.log('2.x中的beforeCreate...')
  },
  created() {
    console.log('2.x中的created...')
  },
  beforeMount() {
    console.log('2.x中的beforeMount...')
  },
  mounted() {
    console.log('2.x中的mounted...')
  },
  beforeUpdate() {
    console.log('2.x中的beforeUpdate...')
  },
  updated() {
    console.log('2.x中的updated...')
  },
  // vue2.x中的beforeDestroy和destroyed这两个生命周期回调已经在vue3中改名了,所以,不能再使用了
  beforeUnmount() {
    console.log('2.x中的beforeUnmount(beforeDestroy(已被改名))...')
  },
  unmounted() {
    console.log('2.x中的unmounted(destroy(已被改名))...')
  },

  setup() {
    console.log('3.0中的setup')
    // 响应式的数据
    const msg = ref('abc')
    // 按钮点击事件的回调
    const updateMsg = () => {
      msg.value += '==='
    }
    onBeforeMount(()=>{
      console.log('3.0中的onBeforeMount')
    })
    onMounted(()=>{
      console.log('3.0中的onMounted')
    })
    onBeforeUpdate(()=>{
      console.log('3.0中的onBeforeUpdate')
    })
    onUpdated(()=>{
       console.log('3.0中的onUpdated')
    })
    onBeforeUnmount(()=>{
       console.log('3.0中的onBeforeUnmount')
    })
    onUnmounted(()=>{
       console.log('3.0中的onUnmounted')
    })
    return {
      msg,
      updateMsg,
    }
  },
})
</script>
