import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import SingUp from '@/components/SingUp'

Vue.use(Router)

export default new Router({
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
