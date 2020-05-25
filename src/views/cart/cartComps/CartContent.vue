<template>
  <div class="cart-list">
    <b-scroll class="content" ref="reference">
      <cart-content-item v-for="(item, index) in cartList" :key="index" :cartitem="item" />
    </b-scroll>
  </div>
</template>

<script>
  import BScroll from 'components/common/BScroll/BScroll'

  import CartContentItem from './CartContentItem'

  import { mapGetters } from 'vuex'
  export default {
    name: 'CartContent',
    components: {
      BScroll,
      CartContentItem
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.reference.refresh()
    },
  }
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 98px - 40px);
  }
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>