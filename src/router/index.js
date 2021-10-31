import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Song from '../views/Song.vue';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    // alias: '/manage',
    path: '/manage-music',
    name: 'Manage',
    meta: {
      requiresAuth: true,
    },
    component: () => import(/* webpackChunkName: "manage" */ '../views/Manage.vue'),
  },
  // keep route for search engines
  {
    path: '/manage',
    redirect: { name: 'Manage' },
  },
  {
    name: 'Song',
    path: '/song/:id',
    component: Song,
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'Home' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
});

router.beforeEach((to, from, next) => {
  if (
    !to.matched.some((record) => record.meta.requiresAuth) || store.state.auth.userLoggedIn
  ) {
    next();
  } else {
    next({ name: 'Home' });
  }
});

export default router;
