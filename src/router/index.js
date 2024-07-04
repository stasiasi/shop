import { createRouter, createWebHistory } from 'vue-router'
import LogInPage from '@/pages/LogInPage.vue'
import ProductCardPage from '@/pages/ProductCardPage.vue'
import ProductListPage from '@/pages/ProductListPage.vue'
import TheDefaultLayout from '@/layouts/TheDefaultLayout.vue'
import TheEmptyLayout from '@/layouts/TheEmptyLayout.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LogInPage,
      meta: { layout: TheEmptyLayout }
    },
    {
      path: '/',
      name: 'product-list',
      component: ProductListPage,
      meta: { requiresAuth: true, layout: TheDefaultLayout }
    },
    {
      path: '/product-card',
      name: 'product-card',
      component: ProductCardPage,
      meta: { requiresAuth: true, layout: TheDefaultLayout }
    }
  ]
})

const isAuthenticated = true;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else {
    next() 
  }
})

export default router
