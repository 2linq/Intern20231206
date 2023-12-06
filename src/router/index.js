// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/Map',
    component: () => import('@/views/Map.vue')
  },
  {
    path: '/BookMark',
    component: () =>import('@/views/BookMark.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router