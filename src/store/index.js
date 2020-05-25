import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//安装vuex插件
Vue.use(Vuex)

//创建插件

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations ,
  actions,
  getters
})

//挂载
export default store