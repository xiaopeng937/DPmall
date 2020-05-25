<template>
  <div class="check" :class="{active: isActive}">
    <img src="~assets/img/cart/tick.svg"  alt="">
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    props: {
      isActive: {
        type: Boolean,
        default() {
          return false
        }
      }
    }
  }
</script>

<style scoped>
  .check {
    border-radius: 50%;
    border: 1px solid #cccccc;
  }
  .active {
    border: 1px solid var(--color-tint);
    background-color: var(--color-tint);
  }
</style>