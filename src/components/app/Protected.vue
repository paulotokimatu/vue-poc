<template>
  <div>
    <Navbar />

    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue';

export default {
  name: 'Protected',
  components: {
    Navbar,
  },
};
</script>
