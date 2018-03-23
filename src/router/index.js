import Vue from 'vue'
import Router from 'vue-router'

import NewPaste from '@/components/NewPaste'
import ShowPaste from '@/components/ShowPaste'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'New paste',
      component: NewPaste
    },
    {
      path: '/:id',
      name: 'Show paste',
      component: ShowPaste
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
