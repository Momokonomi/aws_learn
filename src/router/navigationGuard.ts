import type { Router } from 'vue-router';

export function navigationGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    document.title = `My App | ${to.meta.title}`;
    next();
  });
}
