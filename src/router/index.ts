import AppHome from '@/pages/AppHome.vue';
import AppCalendar from '@/pages/AppCalendar.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { navigationGuard } from './navigationGuard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
      meta: { title: 'ホームページ' },
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: AppCalendar,
      meta: { title: 'カレンダー' },
    },
  ],
});
navigationGuard(router);

export default router;
