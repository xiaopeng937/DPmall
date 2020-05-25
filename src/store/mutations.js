export default {
  addCpinter(state, payload) {
    payload.count++
  },
  addpayload(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}