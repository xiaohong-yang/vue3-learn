<template>
  <div class="home">
    <div>
      <router-link to="/demo01">01_setup和ref的基本使用</router-link>
    </div>
    <div>
      <router-link to="/demo02">02_reactive的使用</router-link>
    </div>
    <div>
      <router-link to="/demo03">03_vue3的响应式数据的核心原理</router-link>
    </div>
    <div>
      <router-link to="/demo04">04_vue3-setup的执行时机问题</router-link>
    </div>
    <div>
      <router-link to="/demo05">05_vue3-reactive和ref的细节问题</router-link>
    </div>
    <div>
      <router-link to="/demo06">06_watch和watchEffect(计算属性和监视)</router-link>
    </div>
    <div>
      <router-link to="/demo07">07_生命周期</router-link>
    </div>
    <div>
      <router-link to="/demo08">08_自定义hook</router-link>
    </div>
    <div>
      <router-link to="/demo09">09_toRefs的使用</router-link>
    </div>
    <div>
      <router-link to="/demo10">10_ref获取页面元素</router-link>
    </div>
    <div>
      <router-link to="/demo11">11_shallowReactive(Reactive浅监视)和shallowRef(Ref浅监视)</router-link>
    </div>
    <div>
      <router-link to="/demo12">12_readonly(深只读)和shallowReadonly(浅只读)</router-link>
    </div>
    <div>
      <router-link to="/demo13">13_toRaw(将代理对象变成了普通对象)和markRaw(标记对象数据,使之不能再成为代理对象)</router-link>
    </div>
    <div>
      <router-link to="/demo14">14_toRef的使用及特点</router-link>
    </div>
    <div>
      <router-link to="/demo15">15_CustomRef(定时器)的使用</router-link>
    </div>
    <div>
      <router-link to="/demo16">16_provide(父向子提供数据)与inject(子或孙注入数据)</router-link>
    </div>
    <div>
      <router-link to="/demo17">17_响应式数据的判断</router-link>
    </div>
    <div>
      <router-link to="/demo18">18_手写组合API</router-link>
    </div>
    <div>
      <router-link to="/demo19">19_Fragment组件的介绍</router-link>
    </div>
    <div>
      <router-link to="/demo20">20_Teleport组件介绍</router-link>
    </div>
    <div>
      <router-link to="/demo21">21_Suspense组件的使用</router-link>
    </div>
    <div>
      <a href="https://www.bilibili.com/video/BV1ra4y1H7ih?p=1" target="_blank" style="margin-right: 20px;">学习视频(点击打开)</a>
      <a href="https://24kcs.github.io/vue3_study/" target="_blank">学习文档(点击打开)</a>
    </div>
  </div>
</template>

<script lang="ts">
// 这里可以使用ts的代码

// defineComponent函数,目的是定义一个组件,内部可以传入一个配置对象
import { defineComponent } from 'vue';

// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字是Home
  name: 'Home'
});
</script>

<style>

</style>
