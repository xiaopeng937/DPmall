export default {
  cartListLength(state) {
    //获取商品数量
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  }
}