import Vue from 'vue'
import Router from 'vue-router'
import A from '@/components/A.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',
      name: 'a',
      component: A
    }
  ]
})
