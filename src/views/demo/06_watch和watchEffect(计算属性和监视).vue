<template>
  <div>
    <router-link to="/">返回首页</router-link>
  </div>
  <div>
    <h2>06_watch和watchEffect(计算属性和监视)</h2>
    <hr/>
    <fieldset>
      <legend>姓名操作</legend>
      姓氏:<el-input type="text" placeholder="请输入姓氏" v-model="user.firstName"/><br />
      名字:<el-input type="text" placeholder="请输入名字" v-model="user.lastName"/><br />
    </fieldset>
    <fieldset>
      <legend>计算属性和监视的演示</legend>
      姓名:<el-input type="text" placeholder="显示姓名" v-model="fullName1" disabled/><br />
      姓名:<el-input type="text" placeholder="显示姓名" v-model="fullName2" /><br />
      姓名:<el-input type="text" placeholder="显示姓名" v-model="fullName3" /><br />
    </fieldset>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, ref, watchEffect } from 'vue'
export default defineComponent ({
  name: "demo06",
  setup() {
    // 定义一个响应式对象
    const user = reactive({
      // 姓氏
      firstName: '东方',
      // 名字
      lastName: '不败',
    })
    // 通过计算属性的方式,实现第一个姓名的显示
    // vue3中的计算属性
    // 计算属性的函数中如果只传入一个回调函数,表示的是get

    // 第一个姓名:
    // 返回的是一个Ref类型的对象
    const fullName1 = computed(() => {
      return user.firstName + '_' + user.lastName
    })

    // 第二个姓名:
    const fullName2 = computed({
      get() {
        return user.firstName + '_' + user.lastName
      },
      set(val: string) {
        // console.log('=====',val)
        user.firstName = val.split('_')[0]
        user.lastName = val.split('_')[1]
      },
    })

    // 第三个姓名:
    const fullName3 = ref('')
    // 监视----监视指定的数据 immediate 默认会执行一次watch,deep 深度监视
    // watch(user, ({ firstName, lastName }) => {fullName3.value = firstName + '_' + lastName}, { immediate: true, deep: true })

    // 监视,不需要配置immediate,本身默认就会进行监视,(默认执行一次)
    watchEffect(() => { fullName3.value = user.firstName + '_' + user.lastName })

    // 监视fullName3的数据,改变firstName和lastName
    watchEffect(() => {
      user.firstName = fullName3.value.split('_')[0]
      user.lastName = fullName3.value.split('_')[1]
    })

    // watch---可以监视多个数据的
    // watch([user.firstName,user.lastName,fullName3],()=>{
    //   // 这里的代码就没有执行,fullName3是响应式的数据,但是,user.firstName,user.lastName不是响应式的数据
    //   console.log('====')
    // })

    // 当我们使用watch监视非响应式的数据的时候,代码需要改一下
    watch([() => user.firstName, () => user.lastName,fullName3], () => {
      console.log('====')
    })

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    }
  }
})
</script>

<style scoped>

</style>
