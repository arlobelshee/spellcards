import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardSheetView from '@/views/CardSheetView.vue'

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
      component: CardSheetView
    },
    {
      path: '/by-class/:slug',
      name: 'by-class',
      component: CardSheetView
    },
    {
      path: '/character/:slug',
      name: 'character',
      component: CardSheetView
    }
  ]
})

export default router
