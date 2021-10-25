import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Informationen from '../views/Informationen.vue';
import Contact from '../views/Contact.vue';
import Login from '../views/Login.vue';
import Daten from '../views/Daten.vue';
import NProgress from 'nprogress';

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
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/daten',
    name: 'Daten',
    component: Daten,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});
export default router;
