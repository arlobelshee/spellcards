import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/by-source/:slug',
      name: 'by-source',
      component: HomeView
    },
    {
      path: '/by-class/:slug',
      name: 'by-class',
      component: HomeView
    },
    {
      path: '/character/:slug',
      name: 'character',
      component: HomeView
    }
  ]
})

export default router
