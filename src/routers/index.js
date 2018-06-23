import App from "views/app"
import Home from "views/home"
import Search from "views/search"
import List from "views/list"
import Shop from "views/shop"


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
