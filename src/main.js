import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import hotKey from './common/keypress/keypress' //快捷键

import utils from './common/utils/index'

Vue.use(ElementUI)

Vue.use(hotKey)

Vue.use(utils)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')