import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Guests/HomeView.vue'
import { WalletConnectService } from '@/services/WalletConnectService'

type Route = {
  path: string
  name: string
  component: any
}

export class Routes {
  static home: Route = {
    path: '/',
    name: 'home',
    component: HomeView
  }

  static browser: Route = {
    path: '/browse',
    name: 'browse',
    component: () => import('../views/Guests/BrowseView.vue')
  }

  static how_it_works: Route = {
    path: '/how-it-works',
    name: 'how-it-works',
    component: () => import('../views/Guests/HowItWorksView.vue')
  }

  static terms: Route = {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/Guests/TermsView.vue')
  }

  static support: Route = {
    path: '/support',
    name: 'support',
    component: () => import('../views/Guests/SupportView.vue')
  }

  static apply: Route = {
    path: '/apply',
    name: 'apply',
    component: () => import('../views/Guests/ApplyView.vue')
  }

  static dashboard: Route = {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard/DashboardView.vue')
  }

  static create: Route = {
    path: '/dashboard/create',
    name: 'create',
    component: () => import('../views/Dashboard/CreateView.vue')
  }

  static all(): Route[] {
    return [
      this.home,
      this.browser,
      this.how_it_works,
      this.terms,
      this.support,
      this.apply,
      this.dashboard,
      this.create
    ]
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Routes.all()
})

router.beforeEach((to, from, next) => {
  if (to.name === Routes.dashboard.name && !WalletConnectService.instance.connected()) {
    return next(Routes.apply.name)
  }

  if (to.name === Routes.apply.name && WalletConnectService.instance.connected()) {
    return next(Routes.dashboard.name)
  }

  return next()
})

export default router
