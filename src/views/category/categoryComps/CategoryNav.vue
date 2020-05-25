<template>
  <b-scroll class="tab-menu">
    <div v-if="Object.keys(NavDataList).length !== 0">
      <div class="menu-list-item" 
          v-for="(item, index) in NavDataList" 
          :key="(index)" 
          @click="getActive(index)" :class="{active: isActive === index}">
        {{item.title}}
      </div>
    </div>
  </b-scroll>
</template>

<script>
  import BScroll from 'components/common/BScroll/BScroll'
  export default {
    name: 'CategoryNav',
    data() {
      return {
        isActive: 0
      }
    },
    components: {
      BScroll
    },
    props: {
      NavDataList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      //点击导航栏事件
      getActive(index) {
        this.isActive = index;
        this.$emit("Navclick", index)
      }
    },
  }
</script>

<style scoped>
  .tab-menu {
    background-color: #f6f6f6;
    height: calc(100% - 94px);
    width: 20%;
    box-sizing: border-box;
    overflow: hidden;
  }
  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }

  .active {
    font-weight: 700;
    color: #ff7174;
    background-color: #fff;
    border-left: 2px solid var(--color-high-text);
  }
</style>