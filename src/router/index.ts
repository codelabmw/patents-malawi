import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Guests/HomeView.vue'
import { WalletConnectService } from '@/services/WalletConnectService'

type Route = {
  path: string
  name: string
  component: any
}

export class Routes {
  static intended: string

  static home: Route = {
    path: '/',
    name: 'home',
    component: HomeView
  }

  static browse: Route = {
    path: '/browse',
    name: 'browse',
    component: () => import('../views/Guests/BrowseView.vue')
  }

  static show: Route = {
    path: '/browse/:patent',
    name: 'show',
    component: () => import('../views/Guests/PatentDetailsView.vue')
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

  static connect: Route = {
    path: '/connect',
    name: 'connect',
    component: () => import('../views/Guests/ConnectView.vue')
  }

  static dashboard: Route = {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard/DashboardView.vue')
  }

  static create: Route = {
    path: '/dashboard/patents/create',
    name: 'create',
    component: () => import('../views/Dashboard/CreateView.vue')
  }

  static patent_details: Route = {
    path: '/dashboard/patents/:patent',
    name: 'patent_details',
    component: () => import('../views/Dashboard/PatentDetailsView.vue')
  }

  static edit_patent: Route = {
    path: '/dashboard/patent/edit',
    name: 'patent_edit',
    component: () => import('../views/Dashboard/EditPatentView.vue')
  }

  static profile: Route = {
    path: '/dashboard/profile',
    name: 'profile',
    component: () => import('../views/Dashboard/ProfileView.vue')
  }

  static all(): Route[] {
    return [
      this.home,
      this.browse,
      this.show,
      this.how_it_works,
      this.terms,
      this.support,
      this.connect,
      this.dashboard,
      this.create,
      this.patent_details,
      this.profile,
      this.edit_patent,
    ]
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Routes.all()
})

router.beforeEach((to, from, next) => {
  if (to.name === Routes.dashboard.name && !WalletConnectService.instance.connected()) {
    Routes.intended = Routes.dashboard.name
    return next(Routes.connect.name)
  }

  if (to.name === Routes.connect.name && WalletConnectService.instance.connected()) {
    return next(Routes.dashboard.name)
  }

  if (to.name === Routes.browse.name && !WalletConnectService.instance.connected()) {
    Routes.intended = Routes.browse.name
    return next(Routes.connect.name)
  }

  return next()
})

export default router
