import { ref, getCurrentInstance } from 'vue'
export default function <T>(url: string) {
  // 加载的状态
  const loading = ref(true)
  // 请求成功的数据
  const data = ref<T | null>(null) // 坑
  // 错误信息
  const errorMsg = ref('')
  // 发送请求
  // @ts-ignore
  const { proxy } = getCurrentInstance()
  setTimeout(() => {
    // @ts-ignore
    proxy.$axios.get(url).then(response => {
      // console.log(response.data)
      // 改变加载状态
      loading.value = false
      data.value = response.data
    }).catch((error: { message: string }) => {
      // 改变加载状态
      loading.value = false
      errorMsg.value = error.message || '未知错误'
    })
  }, 2000)
  return {
    loading,
    data,
    errorMsg
  }
}
