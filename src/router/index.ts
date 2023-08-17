import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dog',
      name: 'dog',
      component: () => import('../views/DogView.vue')
    }
  ]
})

export default router
