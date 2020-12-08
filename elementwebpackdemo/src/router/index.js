import Vue from 'vue'
import Router from 'vue-router'


import mLogin from '../components/Login.vue'
import mMain  from '../views/Main'
import mUserProfile from '../components/UserProfile'
import mUserList from '../components/UserList'


Vue.use(Router);

export default new Router({
  routes: [
    {
      //登录页
      path:'/Login',
      name:'Login',
      component:mLogin
    },
    {
      //首页
      path:'/main',
      name:'Main',
      component: mMain,
      //子路由
      children:  [
        {path: '/user/profile', component: mUserProfile},
        {path: '/user/list', component: mUserList},
      ]
    },
    //路由重定向
    {
      path:'/LoginOut',
      redirect:'/Login'  //重定向到登录页
    }

  ]


})

