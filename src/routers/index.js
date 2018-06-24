import App from "views/app"
import Home from "views/home"
import Search from "views/search"
import List from "views/list"
import Shop from "views/shop"
import Order from "views/order"
import Help from "views/help"


export default [
  {
    path: '/',
    component: App,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/shop',
        component: Shop
      },
      {
        path: '/order',
        component: Order
      },
      {
        path: '/help',
        component: Help
      },
      {
        path: '/search',
        component: Search
      },
      {
        path: '/list',
        component: List
      }
    ]
  }
]
