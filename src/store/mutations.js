import { STATE_USER, STATE_VOUCHER_LIST } from './state';

export const MUTATION_USER_UPDATE = 'user/update';
export const MUTATION_VOUCHER_LIST_UPDATE = 'voucher/listUpdate';

export default {
  [MUTATION_USER_UPDATE](state, newUser) {
    state[STATE_USER] = newUser;
  },
  [MUTATION_VOUCHER_LIST_UPDATE](state, newList) {
    state[STATE_VOUCHER_LIST] = newList;
  },
};
