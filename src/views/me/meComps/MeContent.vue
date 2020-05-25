<template>
  <div class="MeContent">
    <ul>
      <li><img src="~assets/img/profile/message.svg" alt=""><span>我的消息</span></li>
      <li><img src="~assets/img/profile/pointer.svg" alt=""><span>积分商城</span></li>
      <li><img src="~assets/img/profile/vip.svg" alt=""><span>会员卡</span></li>
      <li><img src="~assets/img/profile/cart.svg" alt=""><span>我的购物车</span></li>
      <li><img src="~assets/img/profile/shopping.svg" alt=""><span>下载购物APP</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'MeContent'
  }
</script>

<style scoped>
.MeContent {
  margin-top: 5px;
}
.MeContent ul {
  display: flex;
  flex-direction: column;
}
.MeContent ul li{
  padding: 0 20px;
  background-color: #ffffff;
  height: 50px;
  line-height: 50px;
  font-size: 17px;
  color: #000000;
  border-bottom: 1px solid rgba(7, 7, 7, 0.1);
}
.MeContent ul li:nth-child(3) {
  border: none;
  margin-bottom: 10px;
}
.MeContent ul li img {
  width: 22px;
  height: 22px;
  position: relative;
  top: 3px;
}
.MeContent ul li span {
  padding-left: 5px;
}
</style>