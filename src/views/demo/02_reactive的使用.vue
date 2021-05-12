<template>
  <div>
    <router-link to="/">返回首页</router-link>
  </div>
  <div>
    <h2>02_reactive的使用</h2>
    <hr/>
    <h3>名字：{{user.name}}</h3>
    <h3>性别：{{user.gender}}</h3>
    <h3>年龄：{{user.age}}</h3>
    <h3>媳妇：{{user.wife}}</h3>
    <el-button @click="updateUser1">更新数据(vue3对象属性值改变)</el-button>
    <el-button @click="updateUser2">更新数据(vue3对象添加一个新的属性)</el-button>
    <el-button @click="updateUser3">更新数据(vue3对象移除一个已经存在的属性)</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"

// 需求：显示用户的相关信息，点击按钮，可以更新用户的相关信息数据

export default defineComponent({
  name: "demo02",
  /*
     reactive
     作用:定义多个数据的响应式
     const proxy = reactive(obj):接收一个普通对象然后返回该普通对象的响应式代理器对象
     响应式转换是“深层的”:会影响对象内部所有嵌套的属性
     内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
  */
  setup () {
    // const obj = {
    const obj: any = { // 为了在使用 obj.gender = '男' 的时候不出现这种错误的提示信息才这么书写
      name: '王平平',
      age: 20,
      wife: {
        name: '熊佳儿',
        age: 18,
        cars: ['奔驰', '宝马', '奥迪']
      }
    }
    // 把数据变成响应式的数据
    // 返回的是一个Proxy的代理对象,被代理的目标对象就是obj对象
    // user现在是代理对象，obj目标对象
    // user对象的类型是Proxy
    const user = reactive<any>(obj)
    console.log('user：', user)

    // 方法
    // function updateUser () {}
    const updateUser1 = () => {
      // obj.name = '熊大拿' // 直接使用目标对象的方式来更新目标对象中的成员的值，是不可能的，只能使用代理对象的方式来更新数据(响应式数据)
      user.name = '高健健'
      user.age += 2
      user.wife.name = '曾骚睿'
      user.wife.age -= 2
      user.wife.cars[0] = '玛莎拉蒂'
      console.log('updateUser1：', user)
    }
    const updateUser2 = () => {
      // user---->代理对象， obj---->目标对象
      // 问题1：user对象或者obj对象添加一个新的属性，哪一种方式会影响界面的更新？
      // obj.gender = '男' // 这种方式，界面没有更新渲染
      user.gender === '男' ? user.gender = '女' : user.gender = '男' // 这种方式,界面可以更新渲染,而且这个数据最终也添加到了obj对象上了
      console.log('updateUser2：', user)
    }
    const updateUser3 = () => {
      // user---->代理对象， obj---->目标对象
      // 问题2：user对象或者obj对象中移除一个已经存在的属性，哪一种方式会影响界面的更新？
      // delete obj.gender   // 界面没有更新渲染,obj中确实没有了age这个属性
      delete user.gender  // 界面更新渲染了,obj中确实没有了age这个属性
      console.log('updateUser3：', user)
    }

    // 总结：如果操作代理对象,目标对象中的数据也会随之变化,同时如果想要在操作数据的时候,界面也要跟着重新更新渲染，那么也是操作代理对象
    return {
      user,
      updateUser1,
      updateUser2,
      updateUser3
    }
  }
})
</script>

<style scoped>

</style>
