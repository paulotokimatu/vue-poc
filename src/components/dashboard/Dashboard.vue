<template>
  <div>
    <template v-if="list.length == 0">
      <p>No data loaded!</p>
    </template>
    <template v-else>
      <b-table :data="list" :columns="columns"></b-table>
      <b-pagination
        class="mt-4"
        :total="list.length"
        @change="onPageChange"
        v-model="currentPage"
        per-page="2"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page">
      </b-pagination>
    </template>
  </div>
</template>

<script>
import { STATE_VOUCHER_LIST } from '@/store/state';
import { ACTION_VOUCHER_LIST_FETCH } from '@/store/actions';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Dashboard',
  methods: {
    onPageChange(newPage) {
      console.log(newPage);
    },
    ...mapActions({
      update: ACTION_VOUCHER_LIST_FETCH,
    })
  },
  async mounted() {
    this.update();
  },
  computed: mapState({
    list: STATE_VOUCHER_LIST,
  }),
  data() {
    return {
      currentPage: 1,
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true,
        },
        {
          field: 'first_name',
          label: 'First Name',
        },
        {
          field: 'last_name',
          label: 'Last Name',
        },
        {
          field: 'date',
          label: 'Date',
          centered: true,
        },
        {
          field: 'gender',
          label: 'Gender',
        },
      ],
    };
  },
};
</script>
