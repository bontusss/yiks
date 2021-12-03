<script setup>
import Nigeria from '../components/Nigeria.vue';
import Business from '../components/Business.vue'
import Tech from '../components/Tech.vue';
import Sports from '../components/Sports.vue';
import Entertainment from '../components/Entertainment.vue';
import Crypto from '../components/Crypto.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <section>
        <!-- <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Hello Vue 3 + Vite" />-->
        <!-- navbar -->
        <Nigeria name="Nigeria" />
        <Business name="Business" />
        <Tech name="Technology" />
        <Sports name="Sports" />
        <Entertainment name="Entertainment" />
        <Crypto name="Cryptocurrency" />
    </section>
</template>