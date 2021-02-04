import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomeComponent from '../components/home-component.vue';
import Portfolio from '../components/portfolio/Portfolio.vue'
import Stocks from '../components/stocks/Stocks.vue'

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: Stocks
    },
  ]
})
