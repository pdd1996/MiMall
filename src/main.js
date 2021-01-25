import Vue from 'vue'
import router from './router'
import axios from 'axios'
/**
 * 可以将axios挂载到vue实例上
 */
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
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
  let path = location.hash;
  if(res.status == 0) {
    return res.data;
  }
  else if(res.status == 10) {
    if(path != '#/index') {
      window.location.href = '/#/login';
    }
  }
  else {
    alert(res.msg);
    // 错误抛出
    return Promise.reject(res);
  }
});

Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.use(VueCookie);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
