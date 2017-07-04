import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
