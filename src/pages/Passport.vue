<template>
  <div>
    <h1>Passport</h1>
  </div>
</template>

<script>
import { MUTATION_USER_UPDATE } from '@/store/mutations';
import { ROUTE_NAMES } from '@/router/routes';

const USER_TOKEN_KEY = 'pim-admin-token';
const decodeUserFromToken = (token) => {
  if (!token) {
    return null;
  }

  return {
    exp: Date.now() / 1000 + 3000,
  };
};

export default {
  name: 'Passport',
  mounted: function () {
    const user = decodeUserFromToken(this.$route.query.token);

    localStorage.setItem(USER_TOKEN_KEY, this.$route.query.token);

    this.$store.commit(MUTATION_USER_UPDATE, user);
    this.$router.push({ name: ROUTE_NAMES.home });

    // if (isUserValid(user)) {
    //   localStorage.setItem(USER_TOKEN_KEY, this.$route.query.token);
    //   this.$store.commit(MUTATION_USER_UPDATE, user);

    //   this.$router.push({ name: ROUTE_NAMES.app });

    //   return;
    // }

    // localStorage.removeItem(USER_TOKEN_KEY);
    // this.$router.push({ name: ROUTE_NAMES.login });
  },
};
</script>
