// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//导入路由包
import VueRouter from'vue-router'
//配置路由
import router from './router' //默认去找index.js
//导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//安装路由
Vue.use(VueRouter);

//全局使用Elementui所有组件
Vue.use(ElementUI);




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
