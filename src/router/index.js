import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import PersonalView from '../views/PersonalView.vue'
import WorkView from '../views/WorkView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import CustomerView from '../views/CustomerView.vue'
import MoviesView from '../views/MoviesView.vue'
import RentView from '../views/RentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PersonalView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path: '/customer',
      name: 'customer',
      component: CustomerView
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView
    },
    {
      path: '/rent',
      name: 'rent',
      component: RentView
    },
  ]
})

export default router

