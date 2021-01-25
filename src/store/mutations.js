/**
 * 商城Vuex-mutations
 */
export default {
  saveUsernName(state, username) {
    state.username = username
  },
  saveCartCount(state, count) {
    state.cartCount = count
  }
}