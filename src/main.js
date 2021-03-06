import 'buefy/dist/buefy.css';
import Buefy from 'buefy';
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../tests/mocks/browser')
  worker.start()
}

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
