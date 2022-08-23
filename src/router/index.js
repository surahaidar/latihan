import { createRouter, createWebHistory } from 'vue-router'
import PersonalView from '../views/PersonalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Personal',
      component: PersonalView
    },
    {
      path: '/skils',
      name: 'skils',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SkilsView.vue')
    }
  ]
})

export default router
