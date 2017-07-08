// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import accounting from 'accounting'
import pluralize from 'pluralize'
import Shop from './components/shop/Shop'
import store from './store'

Vue.filter('formatMoney', accounting.formatMoney)
Vue.filter('pluralize', pluralize)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#shop',
  store,
  render: h => h(Shop)
})
