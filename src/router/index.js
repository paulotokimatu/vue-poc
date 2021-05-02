import store from '@/store/index';
import Vue from 'vue';
import VueRouter from 'vue-router';
import authGuard from './authGuard';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(authGuard(store));

export default router;
