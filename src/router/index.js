import Vue from 'vue'
import Router from 'vue-router'
import Consult from '@/views/consult.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Consult
    }
  ]
})
