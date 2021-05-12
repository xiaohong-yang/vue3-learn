<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
html,body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

/* 解决element-ui的table表格控件表头与内容列不对齐问题 */
.el-table th.gutter {
  display: table-cell!important;
}
</style>

