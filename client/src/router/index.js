import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../views/Home.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../views/Admin.vue'),
    children: [
      {
        path: '/anträge',
        component: () =>
          import(
            /* webpackChunkName: "group-foo" */ '../viewsAdmin/Anträge.vue'
          ),
      },
    ],
  },

  {
    path: '/infos',
    props: true,
    name: 'Informationen',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../views/Informationen.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../views/Contact.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../views/Login.vue'),
  },
  {
    path: '/daten',
    name: 'Daten',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../views/Daten.vue'),
  },
  {
    path: '/antrag',
    name: 'Antrag',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../views/Antrag.vue'),
  },
  {
    path: '/impress',
    name: 'Impressum',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../views/Impressum.vue'),
  },
  {
    path: '*',
    name: 'Not Found',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
