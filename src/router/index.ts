import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
const router = createRouter({
  linkActiveClass: 'border-indigo-500',
  linkExactActiveClass: 'border-indigo-700',
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'defaultLayout',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/home/HomeView.vue')
        },
        {
          path: '/single/:id',
          name: 'single',
          component: () => import('@/views/single/SinglePage.vue')
        },
        {
          path: '/writer',
          name: 'writer',
          component: () => import('@/views/writer/WriterPage.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/about/AboutPage.vue')
        },
        {
          path: '/category',
          name: 'category',
          component: () => import('@/views/category/CategoryPage.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('@/views/profile/ProfilePage.vue'),
          children: [
            {
              name: 'marked',
              path: '', // Пустая строка означает, что этот маршрут будет использоваться при /profile
              component: () => import('@/views/profile/pages/MarkedPage.vue')
            },
            {
              name: 'send',
              path: 'send',
              component: () => import('@/views/profile/pages/SendPost.vue')
            },
            {
              name: 'posts',
              path: 'posts',
              component: () => import('@/views/profile/pages/PostsList.vue')
            },
          ]
        },
        {
          name: 'profile-edit',
          path: '/profile-edit',
          component: () => import('@/views/profile/EditPage.vue')
        },
        {
          name: 'contact',
          path: '/contact',
          component: () => import('@/views/contact/ContactPage.vue')
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'not-found',
          component: () => import('@/views/NotFound.vue')
        }
      ]
    }
  ]
})

export default router
