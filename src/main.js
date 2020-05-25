import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import toast from 'components/common/toast/index'


Vue.config.productionTip = false
//添加原型
Vue.prototype.$but = new Vue();
//注册toast
Vue.use(toast)
//解决移动端的300毫秒延迟
fastClick.attach(document.body)
//使用懒加载插件
Vue.use(VueLazyload, {
  //占位图
  loading: require("./assets/img/common/placeholder.png")
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
