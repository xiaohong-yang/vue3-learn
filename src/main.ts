// 程序的主入口文件,ts文件,是main.ts
// 引入createApp函数,创建对应的应用,产生应用的实例对象
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// 引入App组件(所有组件的父级组件)
import App from './App.vue'
import router from './router'
import store from './store'

// @ts-ignore
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$axios = axios
// 创建App应用返回对应的实例对象,调用mount方法进行挂载
app.use(store).use(router).use(ElementPlus).mount('#app')
