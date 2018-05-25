import Vue from "vue"
import VueRouter from "vue-router"
import _ from "lodash"
import App from "./app"
import routes from "routers"
import store from "./store"

window._ = _;

Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  store,
  router,
  el: '#root',
  render: h => h(App)
})
