import Vue from 'vue'
import router from './router'
import axios from 'axios'
/**
 * 可以将axios挂载到vue实例上
 */
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
// import env from './env'

/**
 * mock 开关
 */
const mock = false;

if(mock){
  require('./mock/api');
}

/**
 * 根据前端的跨域方式做调整  代理
 */
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
/**
 * 根据环境变量获取不同的请求地址
 */

// axios.defaults.baseURL = env.baseURL

/**
 * 接口错误拦截
 */
axios.interceptors.response.use(function(response) {
  let res = response.data;
  if(res.status == 0) {
    return res.data;
  }
  if(res.status == 10) {
    window.location.href = '/#/login';
    return;
  }
  alert(res.msg);
});

Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
