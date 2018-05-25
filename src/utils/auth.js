import _ from "lodash"


export function setAuth(obj){
  _.each(obj, (item, index)=>{
    item.meta = {
      isLogin: true
    }
    if (item.children && item.children.length>0) {
      setAuth(item.children)
    }
  })
  return obj
}

export function auth(router){
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!authLogin()) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next() // 确保一定要调用 next()
    }
  })

}

export function authLogin(){
  return window.userInfo?true:false
}
