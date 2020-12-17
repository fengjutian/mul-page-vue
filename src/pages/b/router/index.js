import Vue from 'vue'
import Router from 'vue-router'
import B from '@/components/B.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/b',
      name: 'b',
      component: B
    }
  ]
})
