import MyRouter from "vue-router";
import Login from "../views/Login";
import Vue from 'vue' ;

Vue.use(MyRouter) ;

export default new MyRouter({
  routes: [
    {
    // 路由路径
      path: '/Login',
    // 路由名称
      name: 'Login',
    // 跳转到组件
      component: Login
    }
  ]



})
