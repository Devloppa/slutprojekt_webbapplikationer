<template>
  <div id="nav">
    <ul class="nav-links">
      <li class="products-link">
        <router-link to="/">Products</router-link>
      </li>
      <li class="cart-link">
        <router-link to="/cart">Cart</router-link>
      </li>
      <li class="login-link">
        <router-link to="/login">Login</router-link>
        <router-link
          v-if="authenticated"
          to="/login"
          v-on:click.native="logout()"
          replace
          >Logout</router-link
        >
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "admin",
        password: "admin",
      },
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
};
</script>

<style>

#nav {
  display: flex;
}

#nav a {
  color: #000;
  text-decoration: none;
  font-weight: bold;
}

.nav-links {
  display: flex;
}

.products-link {
  padding-right: 20px;
  list-style: none;
}
.products-link:hover {
  text-decoration: underline;
}

.cart-link {
  padding-right: 20px;
  list-style: none;
}
.cart-link:hover {
  text-decoration: underline;
}

.login-link {
  padding-right: 20px;
  list-style: none;
}
.login-link:hover {
  text-decoration: underline;
}
</style>
