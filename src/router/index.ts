import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/layout/DefaultLayout.vue'),
      children: [
        {
          path: 'dog',

          component: () => import('../views/DogView.vue')
        },
        {
          path: 'breed',

          component: () => import('../views/BreedView.vue')
        }
      ]
    }
  ]
})

export default router
