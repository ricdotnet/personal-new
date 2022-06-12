import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { About, Home, Projects } from '@pages';

const routes: RouteRecordRaw[] = [
  { name: 'home', path: '/', component: Home },
  { name: 'about', path: '/about', component: About },
  { name: 'projects', path: '/projects', component: Projects }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
