<template>
  <div>
    <div class="Category">
      <div v-for="(item, index) in categoryDataList" :key="index" class="Category-item" >
        <img v-lazy="item.image" alt="" @load="Navupdate" >
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
  import {debounce} from 'common/utils'
  export default {
    name: 'CategoryContentNav',
    data() {
      return {
        udate: null
      }
    },
    props: {
      categoryDataList: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      Navupdate() {
        this.udate()
      }
    },
    mounted() {
      //防抖动
      this.udate = debounce(() => {
        this.$emit("NavUpdate");
      }, 100)
    }
  }
</script>

<style scoped>

.Category {
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
}
.Category-item {
  display: flex;
  width: 33.3%;
  height: 80px;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
.Category-item img{
  width: 60px;
  z-index: 0;
}
</style>