<template>
  <div class="goods-info" v-if="Object.keys(detailImage).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailImage.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailImage.detailImage[0].key}}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailImage.detailImage[0].list"
        :key="index"
        @load="imgLoad"
        v-lazy="item"
      />
    </div>
  </div>
</template>

<script>
  import {debounce} from 'common/utils'
  export default {
    name: 'DetailDetailImage',
    props: {
      detailImage: {
        type: Object,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength: null
      };
    },
    methods: {
      imgLoad() {
        this.imagesLength()
      }
    },
    mounted() {
      //防抖动
      this.imagesLength = debounce(() => {
        this.$emit("imageLoad");
      }, 100)
    },
  }
</script>

<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}
</style>