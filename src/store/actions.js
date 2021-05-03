import VoucherApiService from '@/core/VoucherApiService';
import { MUTATION_VOUCHER_LIST_UPDATE } from './mutations';

export const ACTION_VOUCHER_LIST_FETCH = 'fetchList';

export default {
  [ACTION_VOUCHER_LIST_FETCH]({ commit }) {
    // commit(types.VOUCHER_LOADING)

    VoucherApiService.getVoucherList()
      .then((list) => commit(MUTATION_VOUCHER_LIST_UPDATE, list));
      // .catch(() => commit(types.CHECKOUT_FAILURE));
  }
};
