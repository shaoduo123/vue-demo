import Home from './components/Home'
import Products from './components/Products'

//向外暴漏常量 routes 这个名固定不能改变
export const routes = [
  {path:'/',component :Home},
  {path:'/Products',component: Products}

]
