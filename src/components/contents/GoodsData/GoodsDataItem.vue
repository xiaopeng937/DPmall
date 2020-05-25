<template>
  <div class="goods-data-item" @click="goodsItem">
    <img v-lazy="getImg" alt="" @load="imgupdate">
    <div class="goods-info">
      <p>{{GoodsDataItem.title}}</p>
      <span class="price">{{GoodsDataItem.price}}</span>
      <span class="cfav">{{GoodsDataItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsDataItem',
    props: {
      GoodsDataItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgupdate() {
        //图片加载完 发送事件
        if(this.$route.path.indexOf("/home")) {
          this.$but.$emit("HomeUpdataImg");
        }else if(this.$route.path.indexOf("/details")) {
          this.$but.$emit("DetailUpdataImg")
        }

        // this.$but.$emit("UpdataImg")
        
      },
      goodsItem(id) {
        this.$router.push("/details/" + this.GoodsDataItem.iid)
      }
    },
    computed: {
      getImg() {
        return this.GoodsDataItem.image || this.GoodsDataItem.show.img
      }
    },
    data() {
      return {
        id: null
      }
    },
  }
</script>

<style scoped>
  .goods-data-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-data-item img {
    width: 100%;
    /* height: 100%; */
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .cfav {
    position: relative;
  }

  .goods-info .cfav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>