<script>
import { createRouter, createWebHistory } from 'vue-router'
import { RouterView } from 'vue-router'
import router from './router'
import TheHeader from './components/Header.vue';
import TheFooter from './components/Footer.vue';

export default {
  components: {
    RouterView
  },
  router
}

</script>

<template>
  <router-view />
  <div class="app-container">
    <TheHeader class="header" />

    <TheFooter class="footer" />
  </div>
</template>

<style lang="scss">
@import './assets/base.scss';

.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'header header' 'shop cart' 'footer footer';
  grid-template-columns: 75% 25%;
  grid-template-rows: 48px auto 48px;
}
.header {
  grid-area: header;
}
.footer {
  grid-area: footer;
}
</style>
