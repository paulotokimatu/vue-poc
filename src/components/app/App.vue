<template>
  <div>
    <Navbar />
    <section class="section">
      <router-view />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from '@/components/app/Navbar.vue';
import { STATE_USER } from '@/store/state';

export default {
  computed: mapState({
    user: STATE_USER,
  }),
  name: 'App',
  components: {
    Navbar,
  },
};
</script>
