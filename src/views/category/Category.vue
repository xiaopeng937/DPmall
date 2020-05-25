<template>
  <div class="Category">
    <!-- 分类头部标题 -->
    <nav-bar class="Category-top">
      <div slot="center">商品分类</div>
    </nav-bar>
    <!-- 内容 -->
    <div class="cates-content">
      <!-- 左边导航栏 -->
      <category-nav :nav-data-list="NavList" @Navclick="Navclick" />
      <!-- 右边内容 -->
      <!-- 吸顶导航栏 -->
      <tab-control :title="title" @tabClick="tabClick" ref="tabControl2" class="mycontrol" v-show="TopShow" />
      <b-scroll class="Category-center" :RollingData="3" @bscroll="bscroll" ref="bscroll" >
        <category-content-nav :category-data-list="categorylist" @NavUpdate="NavUpdate" />
        <!-- 新品导航栏 -->
        <tab-control :title="title" @tabClick="tabClick" ref="tabControl" />
        <!-- 导航栏对应内容 -->
        <category-data :cateory-goods="cateoryGoods" :current-type="Datatype" />
      </b-scroll>
    </div>
    <!-- 返回置顶 -->
    <back-top v-show="isShow" @click.native="backtopclick" />
  </div>
</template>

<script>
  //公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import BScroll from 'components/common/BScroll/BScroll'
  import TabControl from 'components/contents/TabControl/TabControl'
  import BackTop from 'components/contents/BackTop/BackTop'

  //子组件
  import CategoryNav from './categoryComps/CategoryNav'
  import CategoryContentNav from './categoryComps/CategoryContentNav'
  import CategoryData from './categoryComps/CategoryData'

  //网络请求
  import {getCategory, getSubcategory, getSortDetails} from 'network/category'
  //防抖
  import {debounce} from 'common/utils'
  export default {
    name: "Category",
    data() {
      return {
        NavList: [],
        categorylist: [],
        miniWallkey: null,
        title: ['流行', '新款', '精选'],

        Datatype: 'pop',
        cateoryGoods: {
          pop: [],
          new: [],
          sell: []
        },
        isShow: false,
        topheight: 0,
        TopShow: false
      }
    },
    components: {
      NavBar,
      BScroll,
      CategoryNav,
      CategoryContentNav,
      TabControl,
      CategoryData,
      BackTop
    },
    mounted() {
      const refresh = debounce(this.$refs.bscroll.refresh, 200)
      this.$but.$on('CateforyUpdate', () => {
        refresh()
      })
    },
    created()  {
      //创建之后 获取导航栏数据
      this.NavDataList()
      // this._getSubcategory()
      // this._getSortDetails()
    },
    methods: {
      //获取左边导航栏数据
      NavDataList() {
        getCategory().then(res => {
          this.NavList = res.data.data.category.list
          // 使用_getSubcategory方法  参数为0 是为了第一次进来的时候能获取的数据
          this._getSubcategory(0);
          // console.log(this.NavList[0].maitKey)
          // console.log(res.data.data.category.list)
        })
      },
      //获取中间导航
      _getSubcategory(index) {
        // 把值赋值给maitKey
        const maitKey = this.NavList[index].maitKey;
        // console.log(this.NavList[0].miniWallkey)
          getSubcategory(maitKey).then(res => {
            //获取
            this.categorylist = res.data.data.list
            // 获取miniWallkey的值
            this.miniWallkey = this.NavList[index].miniWallkey
            //获取商品数据
            this._getSortDetails('pop');
            this._getSortDetails('new');
            this._getSortDetails('sell');
        })
      },
      //获取内容
      _getSortDetails(type) {
        getSortDetails(this.miniWallkey, type).then(res => {
          //将获取的商品数据放入cateoryGoods中
          this.cateoryGoods[type] = res.data
          // console.log(this.cateoryGoods[type])
        })
      },
      //中间导航栏点击
      tabClick(index) {
        switch (index) {
          case 0:
            this.Datatype = "pop";
            break;
          case 1:
            this.Datatype = "new";
            break;
          case 2:
            this.Datatype = "sell";
            break;
        }
        this.$refs.tabControl.isActive = index;
        this.$refs.tabControl2.isActive = index;
      },
      //左边导航栏点击事件
      Navclick(index) {
        //把index的值付给_getSubcategory获取中间的值
        this._getSubcategory(index)
        this.$refs.bscroll.scrollTo(0, 0, 0)
      },
      //滚动监听
      bscroll(val) {
        //显示隐藏返回头部图标
        this.isShow = (-val.y) >= 1200
        this.TopShow = (-val.y) > this.topheight
        // console.log(-val.y, this.topheight)
      },
      //返回头部
      backtopclick() {
        this.$refs.bscroll.scrollTo(0, 0)
      },
      NavUpdate() {
        //获取tab-control所在的位置
        this.topheight = this.$refs.tabControl.$el.offsetTop
      }
    }
  }
</script>

<style scoped>
  .Category {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .Category-top {
    background-color: var(--color-tint);
    color: #ffffff;
    z-index: 999;
  }

  .cates-content {
    display: flex;
    width: 100%;
    height: 100vh;
  }

  .Category-center {
    flex: 1;
    height: calc(100% - 94px);
    overflow: hidden;
    position: absolute;
    top: 44px;
    left: 80px;
    right: 0;
  }

  .mycontrol{
  width: 79%;
  height: 44px;
  position: fixed;
  top: 6.5%;
  left: 21%;
  z-index: 99;
}
</style>