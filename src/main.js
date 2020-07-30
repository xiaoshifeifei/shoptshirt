import Vue from 'vue'
import App from './App.vue'
import 'view-design/dist/styles/iview.css'
import { locale } from 'view-design'
import './assets/css/common.css'
import lang from 'view-design/dist/locale/en-US'
import { Modal, Message } from 'view-design'

import utils from './utils'

import Products from './components/Products'

Vue.use(utils)
Vue.component('Products', Products)
Vue.prototype.$Modal = Modal
Vue.prototype.$Message = Message
// configure language
locale(lang)

Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
}).$mount('#app')
