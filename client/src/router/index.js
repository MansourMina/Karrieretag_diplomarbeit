import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Informationen from '../views/Informationen.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/infos',
    name: 'Informationen',
    component: Informationen,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
