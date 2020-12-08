// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/**start --全局注册**/
import MyHeader from './components/header.vue'
import Content from './components/content.vue'
import Bottom from './components/bottom.vue'

Vue.component('MyHeader',MyHeader) ;
Vue.component('MyContent',Content) ;
Vue.component('MyBottom',Bottom) ;
/**end -- 全局注册 **/


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
