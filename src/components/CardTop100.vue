<script setup>
import { ref, toRefs } from "vue";

import Play from "vue-material-design-icons/Play.vue";

let isHover = ref(false);

const props = defineProps({ track: Object });
const { track } = toRefs(props);
</script>

<template>
  <div>
    <div class="flex items-center bg-[#23232D] rounded-sm h-[54px] relative">
      <div class="flex items-center w-[54px]" @mouseenter="isHover = true" @mouseleave="isHover = false">
        <div :class="
          isHover
            ? 'transition ease-in duration-100 bg-opacity-40'
            : 'transition ease-out duration-100 bg-opacity-5'
        " class="absolute h-full z-10 w-[54px] bg-black rounded-sm" />
        <div :class="
          isHover
            ? 'transition ease-in duration-100 bg-opacity-1000'
            : 'transition ease-out duration-100 opacity-0'
        " class="absolute z-20 p-1.5 rounded-full bg-white left-[6px]">
          <Play :size="30" />
        </div>
        <img class="min-h-[54px] min-w-[54px] rounded-sm z-0" :src="track.album.cover" />
      </div>
      <div class="truncate w-full ml-4">
        <p class="hover:underline truncate max-w-[95%] text-gray-200 font-light text-[15px] cursor-pointer">
          {{ track.title }}
        </p>
        <p class="text-[#787882] truncate text-[12px] max-w-[95%] font-light">
          by
          <span class="hover:underline cursor-pointer">{{
            track.artist.name
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
