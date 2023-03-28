<template>
  <div id="TopNav" class="fixed right-0 flex items-center justify-between w-[calc(100%-240px)] h-[56px] border-b border-b-[#32323D]"
  >

</div>
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
import { useQuery } from "@tanstack/vue-query",
import Magnify from 'vue-material-design-icons/Magnify.vue';

const { isPending, isFetching, isError, data, error } = useQuery({
  queryKey: ['todos'],
  queryFn: getTodos,
})

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
