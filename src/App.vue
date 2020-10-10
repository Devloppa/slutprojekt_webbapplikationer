<template>
  <div id="app">
    <div id="nav">
      <ul class="nav-links">
        <li class="home-link">
        <router-link to="/">Home</router-link> 
        </li>
        <li class="about-link">
        <router-link to="/about">About</router-link>
        </li>
        <li class="blog-link">
        <router-link to="/blog">Blog</router-link>
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

.home-link{
    padding-right: 20px;
    list-style: none;
}
.home-link:hover{
    text-decoration: underline;
}

.about-link{
    padding-right: 20px;
    list-style: none;
}
.about-link:hover{
    text-decoration: underline;
}

.blog-link{
    padding-right: 20px;
    list-style: none;
}
.blog-link:hover{
    text-decoration: underline;
}
</style>
