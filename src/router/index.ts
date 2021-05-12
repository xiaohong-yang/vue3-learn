import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/demo01',
    name: 'demo01',
    component: () => import('../views/demo/01_setup和ref的基本使用.vue'),
    meta: {
      title: 'setup和ref的基本使用',
      keepAlive: false
    }
  },
  {
    path: '/demo02',
    name: 'demo02',
    component: () => import('../views/demo/02_reactive的使用.vue'),
    meta: {
      title: 'reactive的使用',
      keepAlive: false
    }
  },
  {
    path: '/demo03',
    name: 'demo03',
    component: () => import('../views/demo/03_vue3的响应式数据的核心原理.vue'),
    meta: {
      title: 'vue3的响应式数据的核心原理',
      keepAlive: false
    }
  },
  {
    path: '/demo04',
    name: 'demo04',
    component: () => import('../views/demo/04_vue3-setup的执行时机问题.vue'),
    meta: {
      title: 'vue3-setup的执行时机问题',
      keepAlive: false
    }
  },
  {
    path: '/demo05',
    name: 'demo05',
    component: () => import('../views/demo/05_vue3-reactive和ref的细节问题.vue'),
    meta: {
      title: 'vue3-reactive和ref的细节问题',
      keepAlive: false
    }
  },
  {
    path: '/demo06',
    name: 'demo06',
    component: () => import('../views/demo/06_watch和watchEffect(计算属性和监视).vue'),
    meta: {
      title: 'watch和watchEffect(计算属性和监视)',
      keepAlive: false
    }
  },
  {
    path: '/demo07',
    name: 'demo07',
    component: () => import('../views/demo/07_生命周期.vue'),
    meta: {
      title: '生命周期',
      keepAlive: false
    }
  },
  {
    path: '/demo08',
    name: 'demo08',
    component: () => import('../views/demo/08_自定义hook.vue'),
    meta: {
      title: '自定义hook',
      keepAlive: false
    }
  },
  {
    path: '/demo09',
    name: 'demo09',
    component: () => import('../views/demo/09_toRefs的使用.vue'),
    meta: {
      title: 'toRefs的使用',
      keepAlive: false
    }
  },
  {
    path: '/demo10',
    name: 'demo10',
    component: () => import('../views/demo/10_ref获取页面元素.vue'),
    meta: {
      title: 'ref获取页面元素',
      keepAlive: false
    }
  },
  {
    path: '/demo11',
    name: 'demo11',
    component: () => import('../views/demo/11_shallowReactive(Reactive浅监视)和shallowRef(Ref浅监视).vue'),
    meta: {
      title: 'shallowReactive(Reactive浅监视)和shallowRef(Ref浅监视)',
      keepAlive: false
    }
  },
  {
    path: '/demo12',
    name: 'demo12',
    component: () => import('../views/demo/12_readonly(深只读)和shallowReadonly(浅只读).vue'),
    meta: {
      title: 'readonly(深只读)和shallowReadonly(浅只读)',
      keepAlive: false
    }
  },
  {
    path: '/demo13',
    name: 'demo13',
    component: () => import('../views/demo/13_toRaw(将代理对象变成了普通对象)和markRaw(标记对象数据,使之不能再成为代理对象).vue'),
    meta: {
      title: 'toRaw(将代理对象变成了普通对象)和markRaw(标记对象数据,使之不能再成为代理对象)',
      keepAlive: false
    }
  },
  {
    path: '/demo14',
    name: 'demo14',
    component: () => import('../views/demo/14_toRef的使用及特点.vue'),
    meta: {
      title: 'toRef的使用及特点',
      keepAlive: false
    }
  },
  {
    path: '/demo15',
    name: 'demo15',
    component: () => import('../views/demo/15_CustomRef(定时器)的使用.vue'),
    meta: {
      title: 'CustomRef(定时器)的使用',
      keepAlive: false
    }
  },
  {
    path: '/demo16',
    name: 'demo16',
    component: () => import('../views/demo/16_provide(父向子提供数据)与inject(子或孙注入数据).vue'),
    meta: {
      title: 'provide(父向子提供数据)与inject(子或孙注入数据)',
      keepAlive: false
    }
  },
  {
    path: '/demo17',
    name: 'demo17',
    component: () => import('../views/demo/17_响应式数据的判断.vue'),
    meta: {
      title: '响应式数据的判断',
      keepAlive: false
    }
  },
  {
    path: '/demo18',
    name: 'demo18',
    component: () => import('../views/demo/18_手写组合API.vue'),
    meta: {
      title: '手写组合API',
      keepAlive: false
    }
  },
  {
    path: '/demo19',
    name: 'demo19',
    component: () => import('../views/demo/19_Fragment组件的介绍.vue'),
    meta: {
      title: 'Fragment组件的介绍',
      keepAlive: false
    }
  },
  {
    path: '/demo20',
    name: 'demo20',
    component: () => import('../views/demo/20_Teleport组件介绍.vue'),
    meta: {
      title: 'Teleport组件介绍',
      keepAlive: false
    }
  },
  {
    path: '/demo21',
    name: 'demo21',
    component: () => import('../views/demo/21_Suspense组件的使用.vue'),
    meta: {
      title: 'Suspense组件的使用',
      keepAlive: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
