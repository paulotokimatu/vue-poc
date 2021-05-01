import Vue from 'vue';
import VueRouter from 'vue-router';
import Protected from './components/app/Protected.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/passport',
    name: 'Passport',
    component: () =>
      import(
        /* webpackChunkName: "passport" */ './components/passport/Passport.vue'
      ),
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ './components/login/Login.vue'),
  },
  {
    path: '/',
    name: 'Protected',
    component: Protected,
    beforeEnter: (to, from, next) => {
      console.log('guard')
      const isAuthenticated = true;

      if (!isAuthenticated) {
        next({ name: 'Login' });
      } else {
        next();
      }
    },
    children: [
      {
        path: '',
        component: () =>
          import(/* webpackChunkName: "home" */ './components/home/Home.vue'),
      },
      {
        path: 'dashboard',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ './components/dashboard/Dashboard.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
