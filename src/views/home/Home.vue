<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="center">首页</div>
    </nav-bar>
    <tab-control :title="title" @tabClick="TabClick" ref="tabcontrol1" class="tab-top" v-show="isTabTop" />
    <!-- 滚动 -->
    <b-scroll class="content" 
      ref="bscroll" 
      :rolling-data='3' 
      @bscroll="bscroll" 
      :pullUpLoad="true" 
      @pullingUp="pullingUp">
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @swiperTop="swiperTop" />
      <home-recommend :recommends="recommends" />
      <feature-view />
      <!-- 吸顶分类导航栏 -->
      <tab-control :title="title" @tabClick="TabClick" ref="tabcontrol2" />
      <!-- 内容 -->
      <goods-data :Goodsdata="showTab"></goods-data>
    </b-scroll>
    <!-- 返回置顶图标 -->
    <back-top @click.native="BackTopClick" v-show="show" />
  </div>
</template>

<script>
  //子组件导入
  import HomeSwiper from './HomeComps/HomeSwiper'
  import HomeRecommend from './HomeComps/HomeRecommend'
  import FeatureView from './HomeComps/FeatureView'
  //公共组件导入
  import TabControl from 'components/contents/TabControl/TabControl'
  import NavBar from 'components/common/navbar/NavBar'
  import GoodsData from 'components/contents/GoodsData/GoodsData'
  import BScroll from 'components/common/BScroll/BScroll'
  //数据导入
  import { 
    getHomeMultidata, 
    getHomeGoods 
  } from 'network/home'
  import {debounce} from 'common/utils'
  // 混入
  import {ReturnTop} from 'common/mixin'
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      FeatureView,
      TabControl,
      GoodsData,
      BScroll
    },
    data() {
      return {
        banners: [],
        recommends: [],
        title: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        tabdata: 'pop',
        TabTop: 0,
        isTabTop: false,
        Y: 0
      }
    },
    created() {
      //创建之后
      //获取轮播图数据
      this.getHomeMultidata();
      //获取商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mixins: [ReturnTop],
    methods: {
      //点击事件
      TabClick(index) {
        switch (index) {
          case 0:
            this.tabdata = "pop"
            break;
          case 1:
            this.tabdata = 'new'
            break;
          case 2:
            this.tabdata = 'sell'
            break;
          default:
            break;
        }
        this.$refs.tabcontrol1.isActive = index
        this.$refs.tabcontrol2.isActive = index
      },
      bscroll(rolling) {
        //显示隐藏返回置顶图标
        this.show = (-rolling.y) > 1000
        //分类吸顶
        this.isTabTop = (-rolling.y) > this.TabTop

      },
      pullingUp() {
        this.getHomeGoods(this.tabdata)
      },
      swiperTop() {
        //吸顶  $el是用来获取组件中的元素 630
        this.TabTop = this.$refs.tabcontrol2.$el.offsetTop
      },

      //获取网络数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page)
        .then(res =>  {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
          this.$refs.bscroll.finishPullUp()
        })
      }
    },
    mounted() {
      //图片加载完毕进行刷新
      const refresh = debounce(this.$refs.bscroll.refresh, 200)
      this.$but.$on('HomeUpdataImg', () => {
        refresh()
      })
    },
    computed: {
      showTab() {
        return this.goods[this.tabdata].list
      }
    },
    activated() {
      this.$refs.bscroll.scrollTo(0, this.Y, 0)
      this.$refs.bscroll.refresh()
    },
    deactivated() {
      // 保存Y值
      this.Y = this.$refs.bscroll.getY()
      //取消全局监听
      // this.$bus.$off("UpdataImg", this.ListenerItem)
      // this.$bus.$off("UpdataImg", this.ListenerItem)
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;  /*视图*/
    position: relative;
    /* padding-top: 44px; */
  }

  .navbar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .tab-top {
    position: relative;
    z-index: 9;
    top: -1px;
    left: 0;
    right: 0;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>