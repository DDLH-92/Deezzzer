<template>
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
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
