<template>
  <div id="app">
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
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  background-image: url("./assets/skate-hero-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: rgba(255, 255, 255, 0.4);
  background-blend-mode: lighten;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  size: 100vw;
  color: #000;
  margin-top: 60px;
}

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
