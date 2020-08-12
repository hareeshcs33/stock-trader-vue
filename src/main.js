// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-ade74.firebaseio.com/';

import store from './store/store';

import VueRouter from 'vue-router';

// const router = new VueRouter({
//   mode: 'history',
//   routes
// })

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
