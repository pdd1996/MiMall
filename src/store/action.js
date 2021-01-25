/**
 * 商城Vuex-actions
 */
export default {
  saveUsernName(context, username) {
    context.commit('saveUsernName', username)
  },
  saveCartCount(context, cartCount) {
    context.commit('saveCartCount', cartCount)
  }
}