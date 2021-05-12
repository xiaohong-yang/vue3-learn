<template>
  <div>
    <router-link to="/">返回首页</router-link>
  </div>
  <div>
    <h2>08_自定义hook</h2>
    <hr/>
    <h3>x:{{ x }},y:{{ y }}</h3>
    <hr/>
    <div>
      <h4 v-if="loading1">正在加载中....</h4>
      <h4 v-else-if="errorMsg1">错误信息:{{ errorMsg1 }}</h4>
      <!-- 对象数据 -->
      <ul v-else>
        <li>id:{{ data1.id }}</li>
        <li>address:{{ data1.address }}</li>
        <li>distance:{{ data1.distance }}</li>
      </ul>
    </div>
    <hr/>
    <div>
      <h4 v-if="loading2">正在加载中....</h4>
      <h4 v-else-if="errorMsg2">错误信息:{{ errorMsg2 }}</h4>
      <!-- 数组数据 -->
      <ul v-else v-for="item in data2" :key="Number(item.id)">
        <li>id:{{ item.id }}</li>
        <li>title:{{ item.title }}</li>
        <li>price:{{ item.price }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useRequest from './hooks/useRequest'

// 定义接口,约束对象的类型
interface AddressData {
  id: number;
  address: string;
  distance: string;
}

interface ProductsData {
  id: string;
  title: string;
  price: number;
}
// 需求1:用户在页面中点击页面,把点击的位置的横纵坐标收集起来并展示出来
export default defineComponent ({
  name: "demo08",
  setup() {
    const { x, y } = useMousePosition()

    // 发送请求获取对象数据
    const res1 = useRequest<AddressData>('/data/address.json')
    const loading1 = res1.loading
    const data1 = res1.data
    const errorMsg1 = res1.errorMsg
    console.log('对象数据', loading1, data1, errorMsg1)
    // 监视
    watch(data1, () => {
      if (data1.value) {
        console.log('监视对象数据：', data1.value)
      }
    })
    // 发送请求获取数组数据
    const res2 = useRequest<ProductsData[]>('/data/products.json')
    const loading2 = res2.loading
    const data2 = res2.data
    const errorMsg2 = res2.errorMsg
    console.log('数组数据', loading2, data2, errorMsg2)
    // 监视
    watch(data2, () => {
      if (data2.value) {
        console.log('监视数组数据：',data2.value)
      }
    })
    return {
      x,
      y,
      loading1,
      data1,
      errorMsg1,
      loading2,
      data2,
      errorMsg2
    }
  }
})
</script>

<style scoped>

</style>
