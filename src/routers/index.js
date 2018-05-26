import App from "views/app"
import Home from "views/home"
import Search from "views/search"
import List from "views/list"

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
