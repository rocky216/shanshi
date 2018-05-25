import Vue from "vue"
import VueRouter from "vue-router"
import "asset/js/flexible.js"
import _ from "lodash"
import App from "./app"
import routes from "routers"
import store from "./store"
import "./asset/less/common.less";

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
