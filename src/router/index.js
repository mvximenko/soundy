import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const Home = () => import(/* webpackChunkName: "home" */'@/views/Home.vue');
const Manage = () => import(/* webpackChunkName: "groupedChunk" */'@/views/Manage.vue');
const Song = () => import(/* webpackChunkName: "groupedChunk" */'@/views/Song.vue');
const About = () => import(/* webpackChunkName: "about" */'@/views/About.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    // alias: '/manage',
    path: '/manage-music',
    name: 'Manage',
    meta: {
      requiresAuth: true,
    },
    component: Manage,
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
