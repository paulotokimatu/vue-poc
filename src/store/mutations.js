export const MUTATION_USER_UPDATE = 'user/update';

export default {
  [MUTATION_USER_UPDATE](state, newUser) {
    state.user = newUser;
  },
};
