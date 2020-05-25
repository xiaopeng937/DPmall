import {debounce} from './utils'
// 混入  未使用
export const updatemixin = {
  data() {
    return {
      ListenerItem: null
    }
  },
  mounted() {
    //图片加载完成进行刷新BScroll
    const refresh = debounce(this.$refs.bscroll.refresh, 300)
    this.ListenerItem = () => {
      refresh()
    }
    this.$but.$on('UpdataImg', this.ListenerItem)
  }
}


import BackTop from 'components/contents/BackTop/BackTop'
//回到顶部
export const ReturnTop = {
  data() {
    return {
      show: false
    }
  },
  methods: {
    BackTopClick() {
        //回到顶部
        this.$refs.bscroll.scrollTo(0, 0)
      }
  },
  components: {
    BackTop
  }
}