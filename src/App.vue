<script setup>
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue';
import Footerr from './components/Footerr.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <section>
    <!-- navbar -->
    <Navbar site="Yik" />

    <router-view></router-view>

    <!-- footer -->
    <Footerr />
  </section>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
