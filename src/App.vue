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
import MusicCard from './components/MusicCard.vue'

export default {
  components: {
    RouterView,
    TheHeader,
    TheFooter,
    MusicCard
  },
  router
}
</script>

<style lang="scss">
@import './assets/base.scss';
</style>
