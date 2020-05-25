<template>
  <div class="details">
    <div class="detaill-item" v-for="(item, index) in cateoryGoods[currentType]" :key="index">
    <category-data-item :cItem="item" />
  </div>
  </div>
</template>

<script>
  import CategoryDataItem from './CategoryDataItem'
  export default {
    name: 'CategoryData',
    props: {
      cateoryGoods: {
        type: Object,
        default() {
          return {}
        }
      },
      currentType:{
        type: String,
        default:'pop'
      },
    },
    components: {
      CategoryDataItem
    }
  }
</script>

<style scoped>
.details {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.detaill-item {
  width: 46%;
  margin-top: 10px;
  font-size: 16px;
}
</style>