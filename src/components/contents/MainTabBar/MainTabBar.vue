<template>
    <tab-bar>
        <tab-bar-item path="/home">
          <img slot="item-icon" src="~assets/img/tabbar/home.png" />
          <img slot="item-icon_active" src="~assets/img/tabbar/home_2.png" />
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/Category">
          <img slot="item-icon" src="~assets/img/tabbar/list.png" />
          <img slot="item-icon_active" src="~assets/img/tabbar/list_2.png" />
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
          <img slot="item-icon" src="~assets/img/tabbar/cart_empty.png" />
          <img slot="item-icon_active" src="~assets/img/tabbar/cart_empty_2.png" />
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/me">
          <img slot="item-icon" src="~assets/img/tabbar/user.png" />
          <img slot="item-icon_active" src="~assets/img/tabbar/user_2.png" />
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
</template>

<script>
    import TabBar from "components/common/tabbar/index"
    import TabBarItem from 'components/common/tabbar/TabBaritem'
    export default {
        name: 'MainTabBar',
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped></style>