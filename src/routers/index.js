import App from "views/app"
import Home from "views/home"
import List from "views/list"

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/list',
        component: List
      }
    ]
  }
]
