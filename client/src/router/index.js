import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Informationen from '../views/Informationen.vue';
import Contact from '../views/Contact.vue';
import Login from '../views/Login.vue';
import Daten from '../views/Daten.vue';
import Admin from '../views/Admin.vue';
import Antrag from '../views/Antrag.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/infos',
    props: true,
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
  {
    path: '/antrag',
    name: 'Antrag',
    component: Antrag,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
