<template>
  <div class="detail-item" v-if="Object.keys(cItem).length !== 0" @click="CategoryClick"> 
    <img v-lazy="cItem.img" @load="imgupdate" />
    <p>{{cItem.title}}</p>
    <div class="detail-info">
      <span class="price">¥{{cItem.price}}</span>
      <span class="collect">{{cItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CategoryDataItem',
    props: {
      cItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      //进入详情页
      CategoryClick(id) {
        this.$router.push("/details/" + this.cItem.iid)
      },
      //图片加载完后发送事件
      imgupdate() {
        this.$but.$emit("CateforyUpdate");
      }
    },
  }
</script>

<style scoped>
 .detaill-item img {
  width: 100%;
  border-radius: 5px;
}

.detaill-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.detaill-info {
  display: flex;
  justify-content: space-evenly;
}
.detaill-item .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.detaill-item .collect {
  position: relative;
}

.detaill-item .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 3px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>