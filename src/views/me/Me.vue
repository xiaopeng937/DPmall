<template>
  <div class="me">
    <!-- 登录 -->
    <me-data />
    <!-- 余额 -->
    <me-money />
    <!-- 信息 -->
    <me-content />
  </div>
</template>

<script>
  // 子组件
  import MeData from './meComps/MeData'
  import MeMoney from './meComps/MeMoney'
  import MeContent from './meComps/MeContent'
  export default {
    name: "Me",
    components: {
      MeData,
      MeMoney,
      MeContent
    }
  }
</script>

<style scoped>
.me{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(189, 189, 189, 0.1);
 }
</style>