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
    path: '/dashboard',
    name: 'Dashboard',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../views/Dashboard.vue'),
  },
  {
    path: '/pdf',
    name: 'PDF',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../components/PDFContent.vue'),
  },
  {
    path: '/requests',
    name: 'Anträge',

    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../viewsAdmin/Anträge.vue'),
  },
  {
    path: '/activities',
    name: 'Aktivitäten',
    component: () =>
      import(
        /* webpackChunkName: "group-foo" */ '../viewsAdmin/Aktivitäten.vue'
      ),
  },
  {
    path: '/vortrag',
    name: 'Vortrag',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../views/Vorträge.vue'),
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
    path: '/anmeldeformular',
    name: 'Formular',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../views/Formular.vue'),
  },
  {
    path: '/impress',
    name: 'Impressum',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../views/Impressum.vue'),
  },
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../views/NotFound.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () =>
      import(/* webpackChunkName: "group-foo" */ '../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const notFound = {
    name: 'NotFound',
    params: { pathMatch: to.path.split('/').slice(1) },
  };
  // Besucher
  if (
    (!isAuthenticated() || user == null) &&
    (to.name == 'Dashboard' ||
      to.name == 'Vortrag' ||
      to.name == 'Aktivitäten' ||
      to.name == 'Daten' ||
      to.name == 'Anträge' ||
      to.name == 'Formular')
  ) {
    next(notFound);
  }
  // Admin
  if (user != null && isAuthenticated()) {
    if (
      user.admin == true &&
      (to.name == 'Daten' ||
        to.name == 'Antrag' ||
        to.name == 'Login' ||
        to.name == 'Formular')
    ) {
      next(notFound);
    }
    // Firma
    if (
      user.admin == false &&
      (to.name == 'Antrag' ||
        to.name == 'Anträge' ||
        to.name == 'Dashboard' ||
        to.name == 'Vortrag' ||
        to.name == 'Aktivitäten' ||
        to.name == 'Login')
    ) {
      next(notFound);
    }
    next();
  }
  next();
});

function isAuthenticated() {
  if (Vue.$cookies.get('sid')) return true;
  else return false;
}

export default router;
