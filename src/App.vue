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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav{
    display: flex;
}

#nav a {
    color: #2c3e50;
    text-decoration: none;
    font-weight: bold;
}

.nav-links {
    display: flex;
}

.products-link{
    padding-right: 20px;
    list-style: none;
}
.products-link:hover{
    text-decoration: underline;
}

.cart-link{
    padding-right: 20px;
    list-style: none;
}
.cart-link:hover{
    text-decoration: underline;
}

.login-link{
    padding-right: 20px;
    list-style: none;
}
.login-link:hover{
    text-decoration: underline;
}
</style>
