const ROUTE_NAMES = {
  app: 'app',
  dashboard: 'dashboard',
  login: 'login',
  home: 'home',
  passport: 'passport',
};

const routes = [
  {
    path: '/passport',
    name: ROUTE_NAMES.passport,
    meta: { isPublic: true },
    component: () =>
      import(
        /* webpackChunkName: "passport" */ '../components/passport/Passport.vue'
      ),
  },
  {
    path: '/login',
    name: ROUTE_NAMES.login,
    meta: { isPublic: true },
    component: () =>
      import(/* webpackChunkName: "login" */ '../components/login/Login.vue'),
  },
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "home" */ '../components/app/App.vue'),
    children: [
      {
        path: '',
        name: ROUTE_NAMES.home,
        component: () =>
          import(/* webpackChunkName: "home" */ '../components/home/Home.vue'),
      },
      {
        path: 'dashboard',
        name: ROUTE_NAMES.dashboard,
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '../components/dashboard/Dashboard.vue'
          ),
      },
    ],
  },
];

export { ROUTE_NAMES };
export default routes;
