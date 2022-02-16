import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import {Outils} from "./mixins/outils.js";
Vue.mixin(Outils);

Vue.prototype.$api = axios.create({
  baseURL: 'https://allweb.fun/coop/api/',
  params: {},
  headers: {
    'Authorization':
      "b0aa01bf55de6465491561e77bf888823ee21dd8"
  }
});
Vue.prototype.$bus = new Vue();

Vue.prototype.$api.interceptors.request.use(function 
  (config) {
  //console.log(config);
  if (store.state.token) {
    config.params.token = store.state.token;
  }
  return config;
});

Vue.config.productionTip = false

//Chargement global du composant Navigation
Vue.component('Navigation', ()=>import('@/components/Navigation.vue'));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
