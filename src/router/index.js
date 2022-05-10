import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component:  () => import('../components/MainPage.vue'),
  },
  {
    path: '/plants',
    name: 'plants',
    component: () => import('../components/PlantsAndFlowers/PlantsAndFlowers.vue'),
  },
  {
    path: '/care',
    name: 'care',
    component: () => import('../components/PlantCare/PlantCare.vue'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../components/News/PlantNews.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
