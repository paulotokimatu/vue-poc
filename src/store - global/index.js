// Use vuex if application grows too much
import Vue from 'vue';

const state = Vue.observable({
  user: null,
});

const mutations = {
  updateUser(newUser) {
    state.user = newUser;
  },
};

export default {
  state,
  mutations,
};
