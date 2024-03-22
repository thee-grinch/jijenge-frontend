import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: '/dashboard/loans',
        name: 'loans',
        component: () => import('../views/DloanView.vue')
      },
      {
        path: '/dashboard/admin',
        name: 'loans',
        component: () => import('../views/DadminView.vue')
      },
      {
        path: '/dashboard/',
        name: 'dhome',
        component: () => import('../views/DhomeView.vue')
      },{
        path: '/dashboard/loantypes',
        name: 'loantypes',
        component: () => import('../views/LoansView.vue')
      },
      {
        path: '/dashboard/transact',
        name: 'transact',
        component: () => import('../views/DtransactView.vue') 
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
