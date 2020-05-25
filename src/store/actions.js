export default {
  addCart(context, payload) {
    // payload 新添加的商品
    //判断是否存在一样的商品
    // let oldproduct = null;
    // for(let item of state.cartList) {
    //   if(item.iid === payload.iid) {
    //     oldproduct += 1
    //   }
    // }
    //检查是否有该商品
    return new Promise((resole,reject) => {
      let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)

      if(oldproduct) {
        //数量加一
        // oldproduct.count += 1
        context.commit('addCpinter', oldproduct)
        resole("当前商品数量加一")
      }else {
        //添加商品
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit("addpayload", payload)
        resole("添加新的商品")
      }
    })
    
  }
}