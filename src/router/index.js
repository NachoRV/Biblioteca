import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import SingUp from '@/components/SingUp'
import firebase from 'firebase'
import insertarLibro from '@/components/insertarLibro'
import verLibros from '@/components/verLibros'

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
    },
    {
      path: '/insertarlibro',
      name: 'insertarLibro',
      component: insertarLibro,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/verLibros',
      name: 'verLibros',
      component: verLibros,
      meta: {
        requiresAuth: true,
      }
    },
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