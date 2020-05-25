<template>
  <div class="bottom">
    <div class="check-button">
      <CheckButton class="check-content" :is-active="getChecked" @click.native="CheckedClick" />
      <span>全选</span>
    </div>
    <div class="price">
      合计:<span>{{addPrice}}</span>
    </div>

    <div class="ment" @click="toastclick" >
      去计算({{mentclick}})
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/contents/checkButton/CheckButton'
  export default {
    name: 'CartButton',
    components: {
      CheckButton
    },
    computed: {
      //合计
      addPrice() {
        return "¥" + this.$store.getters.cartList.filter(res => {
          return res.checked
        }).reduce((perValue, item) => {
          return perValue + item.price * item.count 
        },0).toFixed(2)
      },
      //结算
      mentclick() {
        return this.$store.getters.cartList.filter(item => item.checked).length
      },
      //全选
      getChecked() {
        if(this.$store.getters.cartList.length === 0) return false 
        // return !(this.$store.getters.cartList.filter(item => !item.checked).length)
        return !this.$store.getters.cartList.find(item => !item.checked)
      }
    },
    methods: {
      CheckedClick() {
        //全选的时候
        if(this.getChecked) {
          this.$store.getters.cartList.forEach(item => item.checked = false);
        }else {
          this.$store.getters.cartList.forEach(item => {
            item.checked = true
          });
        }
      },
      toastclick() {
        if(!this.mentclick) {
          this.$toast.show("请勾选商品")
        }
      }
    }
  }
</script>

<style scoped>
  .bottom {
    height: 40px;
    position: relative;
    line-height: 40px;
    background-color: #eeeeee;
    bottom: -2px;
    display: flex;
    font-size: 14px;
  }
  .check-button {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
  }
  .check-content {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }
  .price {
    margin-left: 30px;
    flex: 1;
  }
  .price span {
    color: #f00;
  }
  .ment {
    width: 90px;
    background-color: rgb(255, 136, 0);
    color: #ffffff;
    text-align: center;
  }
</style>
