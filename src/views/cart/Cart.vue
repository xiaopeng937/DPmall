<template>
  <div class="cart">
    <!-- 头部title -->
    <nav-bar class="navbar">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
    <!-- 内容 -->
    <cart-content />
    <!-- 底部合计导航栏 -->
    <cart-button />
  </div>
</template>

<script>
  //子组件
  import CartContent from './cartComps/CartContent'
  import CartButton from './cartComps/CartButton'
  //公共组件
  import NavBar from 'components/common/navbar/NavBar'

  import { mapGetters } from 'vuex'
  export default {
    name: "Cart",
    components: {
      NavBar,
      CartContent,
      CartButton
    },
    computed: {
      // getcartList() {
      //   //获取商品数量
      //   return this.$store.getters.cartListLength
      // }
      //获取商品数量
      ...mapGetters([
        'cartListLength'
      ])
    },
  }
</script>

<style scoped>
  .navbar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .cart {
    height: 100vh;
  }
</style>