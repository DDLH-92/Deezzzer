<template>

  <div class="app-container">
    <TheHeader class="header" />
    <slot />
    <TheFooter class="footer" />
  </div>
</template>

<script>

import TheHeader from '../components/Header.vue'
import TheFooter from '../components/Footer.vue'
import MusicCard from '../components/MusicCard.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter,
    MusicCard
  }
}
</script>

<style lang="scss">

.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'header header' 'shop cart' 'footer footer';
  grid-template-rows: 48px auto 48px;
}
.header {
  grid-area: header;
}
.footer {
  grid-area: footer;
}
</style>
