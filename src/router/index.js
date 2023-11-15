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
      path: '/contact',
      name: 'contact',
      component: () =>  import('../views/ContactView.vue')
    },
    {
      path: '/projets',
      name: 'projets',
      component: () =>  import('../views/ProjetsView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/PageNotFound.vue')
    }
  ]
})

export default router
