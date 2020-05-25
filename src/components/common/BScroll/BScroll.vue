<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'BScroll',
  data() {
    return {
        bscroll: null
    }
  },
  props: {
    //滚动
    RollingData: {
        type: Number,
        default() {
            return 0
        }
    },
    pullUpLoad: {
        type: Boolean,
        default() {
            return false
        }
    }
  },
  mounted() {
    this.BS()
  },
  methods: {
    scrollTo(x, y, time = 1000) {
      this.bscroll && this.bscroll.scrollTo(x, y, time)
    },
    finishPullUp() {
        // 当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
        this.bscroll.finishPullUp()
    },
    refresh() {
        //刷新
        this.bscroll && this.bscroll.refresh()
    },
    getY() {
      return this.bscroll ? this.bscroll.y : 0
    },
    BS() {
      this.bscroll = new BScroll(this.$refs.wrapper, {
        probeType: this.RollingData,
        pullUpLoad: this.pullUpLoad,
        click: true
      })
      if(this.RollingData == 2 || this.RollingData == 3) {
        this.bscroll.on("scroll", (rolling) => {
          // scroll滚动过程中，具体时机取决于选项中的 probeType。
          //监听滚动
          this.$emit('bscroll', rolling)
        })
      }
      if(this.pullUpLoad) {
        this.bscroll.on("pullingUp", () => {
          // pullingUp在一次上拉加载的动作后，这个时机一般用来去后端请求数据。
          this.$emit("pullingUp")
        })
      }
    }
  }
}
</script>

<style scoped>

</style>