<template>
  <div>
    <h1>Passport</h1>
  </div>
</template>

<script>
// const USER_TOKEN_KEY = 'pim-admin-token';
const isUserExpired = user => new Date() > new Date(user.exp * 1000);
// const decodeUserFromToken = token => jwt.decode(token);
const decodeUserFromToken = () => { return {
  exp: Date.now() / 1000 + 3000
}};

export default {
  name: 'Passport',
  mounted: function() {
    if (this.$route.query.token) {
      const decodedUser = decodeUserFromToken(this.$route.query.token);
      if (isUserExpired(decodedUser)) {
        console.log('expired', this.$route.query.token);
        // localStorage.removeItem(USER_TOKEN_KEY);
        this.$router.push({ name: 'Login' });
        return;
      }
    }
    console.log('ok', this.$route.query.token);
    // localStorage.setItem(USER_TOKEN_KEY, this.$route.query.token);
    this.$router.push({ name: 'Protected' });
  }
};
</script>
