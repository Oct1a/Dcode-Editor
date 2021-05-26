import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import httpServer from '@client/service/httpServer' // axios拦截器配置
import '@/permission' // 权限控制
import * as mUtils from '@/common/js/mUtils' //工具类
import config from '@/config'
import filters from './filters/index' //过滤器
import AES from '@/common/js/secret'
import * as API from '@/api/index'

import Element from 'element-ui'
import '@/common/styles/element-variables.scss'
import '@/common/styles/index.scss' // 自定义 css
import 'animate.css' //动画 css
import VueClipboard from 'vue-clipboard2' //获取剪切板
import hotKey from '@client/libs/keypress/keypress' //快捷键
import Contextmenu from "vue-contextmenujs"

// 视频组件，todo：后期改为局部注册
import vueMiniPlayer from 'vue-mini-player'
import 'vue-mini-player/lib/vue-mini-player.css'

import VCharts from 'v-charts'
Vue.use(VCharts)


Vue.use(Element);
Vue.use(VueClipboard)
Vue.use(hotKey)
Vue.use(Contextmenu);
Vue.use(vueMiniPlayer);

/**
 * 引入公共方法mUtils
 */
Vue.prototype.$mUtils = mUtils;
Vue.prototype.AES = AES
Vue.prototype.$axios = httpServer;
Vue.prototype.$api = API;
Vue.prototype.$API = API;

/**
 * 公共配置信息
 */
Vue.prototype.$config = config

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


// 登录后跳转回之前停留页面
Vue.prototype.goBeforeLoginUrl = () => {
  let url = mUtils.Cookie.get('beforeLoginUrl')
  url = decodeURIComponent(url)
  if (!url || url.indexOf('/author') != -1) {
    router.push('/login')
  } else {
    router.push(url)
    mUtils.Cookie.set('beforeLoginUrl', '', 1 / 24 / 60, window.location.host, window.location.pathname.substring(0, window.location.pathname.length - 1))
  }
};

// 查询多个，全局替换
String.prototype.replaceAll = function(s1, s2) {
  return this.replace(new RegExp(s1, "gm"), s2);
}

Vue.config.productionTip = false

store.commit('UPDATE_USER_FROM_LOCAL')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')