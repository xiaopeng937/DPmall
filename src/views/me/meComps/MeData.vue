<template>
  <div class="MeData">
    <img src="~assets/img/profile/userlogin.jpg"/>
    <span>欢迎您：{{name}}</span>
  </div>
</template>

<script>
  export default {
    name: 'MeData',
    data() {
      return {
        name: 'False'
      }
    },
  }
</script>

<style scoped>
.MeData {
  width: 100%;
  height: 150px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  background-color: var(--color-tint);
  color: #ffffff;
}
.MeData>img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.MeData>span {
  font-size: 17px;
  margin-left: 20px;
}
</style>