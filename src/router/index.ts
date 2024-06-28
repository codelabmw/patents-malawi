import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Guests/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/browse',
      name: 'browse',
      component: () => import('../views/Guests/BrowseView.vue')
    },
    {
      path: '/how-it-works',
      name: 'how-it-works',
      component: () => import('../views/Guests/HowItWorksView.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/Guests/TermsView.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/Guests/SupportView.vue')
    },
    {
      path: '/apply',
      name: 'apply',
      component: () => import('../views/Guests/ApplyView.vue')
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard/DashboardView.vue')
    }
  ]
})

export default router
