import Buefy from 'buefy';
import Vue from 'vue';
import Base from './Base.vue';
import router from './router';
import store from './store';

import 'buefy/dist/buefy.css';

Vue.use(Buefy);

Vue.config.productionTip = false;

// const plugin = {
//   install(Vue) {
//     Vue.prototype.$newsfeed = function () { //use your normal function to make the API call
//       console.log(123)
//     }
//   }
// }

// Vue.use(plugin)

new Vue({
  router,
  store,
  render: (h) => h(Base),
}).$mount('#app');
