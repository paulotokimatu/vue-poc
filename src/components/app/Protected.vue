<template>
  <div>
    <Navbar />

    {{ user }}
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from '@/components/app/Navbar.vue';

export default {
  computed: mapState({
    user: 'user',
  }),
  data: {
    id: 1,
  },
  name: 'Protected',
  methods: {
    bar: function () {
      return 'bar';
    },
  },
  components: {
    Navbar,
  },
};
</script>
