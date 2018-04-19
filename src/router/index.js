import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import SingUp from '@/components/SingUp'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect:'/login'
    },
    {
      path: '/hola',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/singup',
      name: 'SingUp',
      component: SingUp
    }
  ]
 })

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/login')
  else if (!requiresAuth && currentUser) next('/hola')
  else next()
})
export default router