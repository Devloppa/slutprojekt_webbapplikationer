<template>
  <div id="app">
    <TheNavigation />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation"
export default{
  components: {
    TheNavigation
  }
}
</script>

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

</style>
