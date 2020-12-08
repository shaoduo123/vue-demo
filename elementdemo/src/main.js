// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


//import MyRouter  from './router/index.js'

//Vue.use(MyRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  routes:Router,
  components: { App },
  template: '<App/>'
})
