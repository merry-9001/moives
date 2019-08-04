import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
//  vue.prototype.axios = axios;
 Vue.prototype.axios = axios;

//  Vue.filter('serWH',(url,avg)=>
//  {
//    return url.replace(/w\.h/,avg);
//  });
 Vue.filter('setWH',(url , arg)=>{
  return url.replace(/w\.h/,arg);
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
