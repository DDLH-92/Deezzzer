<template>
  <component :is="this.$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>

<script>
import { createRouter, createWebHistory } from 'vue-router'
import { RouterView } from 'vue-router'
import router from './router'
import TheHeader from './components/Header.vue'
import TheFooter from './components/Footer.vue'

export default {
  components: {
    RouterView,
    TheHeader,
    TheFooter
  },
  router
}
</script>

<style lang="scss">
@import './assets/base.scss';
</style>
