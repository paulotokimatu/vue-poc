<template>
  <div class="hello">
    Home
    <b-button type="is-primary" @click="get">Primary</b-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    async get() {
      const response = await fetch('https://test.com/list', {
        method: 'GET',
      });

      const a = await response.json();
      console.log(a)
    },
  }
};
</script>
