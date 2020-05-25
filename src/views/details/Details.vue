<template>
  <div id="detail">
    <!-- 导航栏 -->
    <detail-top @DetailClick="DetailClick" ref="navtop"/>
    <b-scroll class="content" ref="bscroll" @bscroll="DetailBScroll" :rolling-data="3" >
      <!-- 轮播图 -->
      <detail-swiper :top-img="itemInfo"></detail-swiper>
      <!-- 商品内容 -->
      <detail-content :cont-data="DetailData" />
      <!-- 商家信息 -->
      <detail-merchants :merchants-data="MerchantsData" />
      <!-- 商品介绍 -->
      <detail-detail-image :detail-image="detailImage" @imageLoad="ImageLoad" />
      <!-- 商品参数 -->
      <detail-param :detail-param="detailParam" ref="param" />
      <!-- 用户评论 -->
      <detail-comment :comments="comments" ref="comment" />
      <!-- 商品推荐 -->
      <goods-data :Goodsdata="recommemd" ref="recommemd" />
    </b-scroll>
    <!-- 底部导航栏 -->
    <detail-buttom-bar @AddCart="AddCart" />
    <!-- 回到顶部 -->
    <back-top @click.native="BackTopClick" v-show="show" />
    <!-- <toast :message="message" :show="isShow" /> -->
  </div>
</template>

<script>
  //引入子组件
  import DetailTop from "./detailComps/DetailTop"
  import DetailSwiper from './detailComps/DetailSwiper'
  import DetailContent from './detailComps/DetailContent'
  import DetailMerchants from './detailComps/DetailMerchants'
  import DetailDetailImage from './detailComps/DetailDetailImage'
  import DetailParam from './detailComps/DetailParam'
  import DetailComment from './detailComps/DetailComment'
  import DetailButtomBar from './detailComps/DetailButtomBar'

  //引入公共组件
  import BScroll from 'components/common/BScroll/BScroll'
  import GoodsData from 'components/contents/GoodsData/GoodsData'

  //请求网络数据
  import {getDetailGoods, Goods, Shop, GoodsParam, getRecommend} from 'network/details'
  import {debounce} from 'common/utils'
   // 混入
  import {ReturnTop} from 'common/mixin'

  // import Toast from 'components/common/toast/Toast'
  export default {
    name: 'Details',
    data() {
      return {
        iid: null,
        DetailData: {},
        itemInfo: [],
        MerchantsData: {},
        detailImage: {},
        detailParam: {},
        comments: {},
        recommemd: [],
        TopY: [],
        getTopY: null,
        DetailIndex: 0,
        // message: '',
        // isShow: false
      }
    },
    components: {
      DetailTop,
      BScroll,
      DetailSwiper,
      DetailContent,
      DetailMerchants,
      DetailDetailImage,
      DetailParam,
      DetailComment,
      GoodsData,
      DetailButtomBar,
      // Toast
    },
    mixins: [ReturnTop],
    created() {
      //获取链接上的id
      this.iid = this.$route.params.iid
      //获取数据
      getDetailGoods(this.iid).then(res => {
        const data = res.data.result
        //获取轮播图信息
        this.itemInfo = data.itemInfo.topImages
        //获取商品信息
        this.DetailData = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //获取商家信息
        this.MerchantsData = new Shop(data.shopInfo)
        //获取商品介绍图片
        this.detailImage = data.detailInfo
        //获取商品参数
        this.detailParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //获取评论信息
        if (data.rate.cRate !==0){
          this.comments = data.rate.list[0]
        }
        //获取推荐数据
        getRecommend().then(res => {
          this.recommemd = res.data.data.list
        })

        //给getTopY赋值
        this.getTopY = debounce(() => {
          this.TopY = []
          // 商品
          this.TopY.push(0)
          // 参数
          this.TopY.push(this.$refs.param.$el.offsetTop - 44)
          // 评论
          this.TopY.push(this.$refs.comment.$el.offsetTop - 44)
          // 推荐
          this.TopY.push(this.$refs.recommemd.$el.offsetTop - 44)
          this.TopY.push(Number.MAX_VALUE)
        })
      })
    },
    methods: {
      ImageLoad() {
        //图片加载完成 bscroll进行刷新
        this.$refs.bscroll.refresh()
        //调用获取组件的TopY位置
        this.getTopY()
      },
      DetailClick(index) {
        //监听导航栏点击事件
        this.$refs.bscroll.scrollTo(0, -this.TopY[index], 200)
      },
      DetailBScroll(pos) {
        //滚动监听   获取Y的值
        const positionY = (-pos.y)
        // 监听滚动实现内容与导航栏对应的位置 联动效果

        //普通做法
        // const length = this.TopY.length
        // for (let i = 0 ; i < length; i++) {
        //   if(this.DetailIndex !==i && ((i < length -1 && positionY >= this.TopY[parseInt(i)] && 
        //   positionY < this.TopY[parseInt(i)+1]) | 
        //   (i === length - 1 && positionY >= this.TopY[parseInt(i)]))) {
        //     this.DetailIndex = i;
        //     this.$refs.navtop.isActive = this.DetailIndex
        //   }
        // }

        // hack做法
        const length = this.TopY.length
        for (let i = 0 ; i < length -1; i++) {
          if(positionY >= this.TopY[parseInt(i)] && positionY < this.TopY[parseInt(i)+1]) {
            this.DetailIndex = i;
            this.$refs.navtop.isActive = this.DetailIndex
          }
        };
        //监听滚动到什么位置显示回到顶部按钮
        this.show = positionY > 1000 
      },
      AddCart() {
        // 添加到购物车
        //1.获取购物车需要展示的信息
        const product = {}
        //获取图片
        product.image = this.itemInfo[0];
        //获取标题
        product.title = this.DetailData.title;
        //获取价格
        product.price = this.DetailData.realPrice;
        //描述信息
        product.desc = this.DetailData.desc;
        //商品id
        product.iid = this.iid;
        //2.将商品添加到购物车
        // this.$store.commit('addCart', product)
        this.$store.dispatch("addCart", product).then(res => {
          // this.message = res;
          // this.isShow = true;
          // console.log(res)
          // setTimeout(() => {
          //   this.isShow = false;
          //   this.message = '';
          // }, 1500)

          //显示添加商品成功弹窗
          this.$toast.show(res)
        })
        
      }
    },
    // destroyed() {
    //   //取消全局监听
    //   this.$bus.$off("UpdataImg", this.ListenerItem)
    // },
    mounted() {
      //图片加载完毕进行刷新
      const refresh = debounce(this.$refs.bscroll.refresh, 300)
      this.$but.$on('DetailUpdataImg', () => {
        refresh()
      });
    },
  }
</script>

<style scoped>
.content {
  height: calc(100% - 44px - 53px);
  overflow: hidden;
}
#detail {
  position: relative;
  z-index: 9;
  background-color: #ffffff;
  height: 100vh;
}
</style>