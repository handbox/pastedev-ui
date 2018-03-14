import Vue from 'vue'
import Router from 'vue-router'
import NewPaste from '@/components/NewPaste'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'New paste',
      component: NewPaste
    },
  ]
})
