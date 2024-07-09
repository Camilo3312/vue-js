import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/to-do',
      name: 'to-do',
      component: () => import('../views/ToDoView.vue')
    }
  ]
})

export default router
