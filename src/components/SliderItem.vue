<script setup>
import { ref } from "vue";
import Play from "vue-material-design-icons/Play.vue";
import { useSongStore } from "../stores/song";
let isHover = ref(false);
const props = defineProps({ slide: Object });
const useSong = useSongStore();
</script>

<template>
  <div class="pl-8">
    <div
      class="relative"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
    >
      <div
        :class="
          isHover
            ? 'transition ease-in duration-150 bg-opacity-30'
            : 'transition ease-out duration-150 bg-opacity-5'
        "
        class="absolute w-full h-full bg-black z-10 rounded-md"
      />
      <div class="absolute z-50 bottom-3 left-3 rounded-full bg-white p-1.5">
        <Play :size="27" @click="useSong.loadSong(slide)" />
      </div>
      <img class="rounded-md aspect-square" :src="slide.album.cover_big" />
    </div>

    <div class="text-white text-left mt-2">
      <div class="text-sm hover:underline cursor-pointer">
        {{ slide.title }}
      </div>
      <div class="text-[13px] flex hover:underline text-[#858590] pt-0.5">
        by {{ slide.artist.name }}
      </div>
    </div>
  </div>
</template>
