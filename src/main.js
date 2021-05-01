import Vue from 'vue';
import Base from './Base.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(Base),
}).$mount('#app');
