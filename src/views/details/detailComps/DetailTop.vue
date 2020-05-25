<template>
  <nav-bar>
    <div slot="left" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="" class="imgItem" >
    </div>
    <div slot="center" class="title" >
      <div v-for="(item, index) in title"
        :key="index" class="title-item" 
        @click="tabItemclick(index)" :class="{active: isActive === index}" ><span>{{item}}</span></div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  export default {
    name: 'DetailTop',
    components: {
      NavBar
    },
    data() {
      return {
        title: ["商品", "参数", "评论", "推荐"],
        isActive: 0
      }
    },
    methods: {
      //点击菜单栏获取下标
      tabItemclick(index) {
        this.isActive = index
        this.$emit("DetailClick", index)
      },
      backClick() {
        //返回上一层 用back() 或者用 go(-1)
        this.$router.back()
      }
    },
  }
</script>

<style scoped>
.title {
  display: flex;
  font-size: 15px;
}
.title-item {
  flex: 1;
}
.active {
  color: rgb(245, 115, 136);
}
.imgItem {
  padding: 10px;
}
</style>