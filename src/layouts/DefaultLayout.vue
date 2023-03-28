<script setup>
import { onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { useSongStore } from "../stores/song";
import MusicPlayer from "../components/MusicPlayer.vue";

const useSong = useSongStore();
const { isPlaying, isLyrics, trackTime } = storeToRefs(useSong);

onBeforeMount(() => {
  isPlaying.value = false;
  isLyrics.value = false;
  trackTime.value = "0:00";
});
</script>

<template>
  <div
    id="TopNav"
    class="fixed right-0 flex items-center justify-between w-[calc(100%-240px)] h-[56px] border-b border-b-[#32323D]"
  >
    <div class="flex items-center w-full">
      <Magnify class="pl-6 mt-1 pr-2" fillColor="#7E7E88" :size="22" />
      <input
        class="p-1 bg-transparent outline-none font-[300] placeholder-[#BEBEC7] text-[#FFFFFF] w-full max-w-xl placeholder-green-500"
        placeholder="Rechercher un titre"
        type="text"
      />
    </div>
    <div class="flex items-center pr-10">
      <div class="mr-4 p-1 hover:bg-gray-600 rounded-full cursor-pointer">
        <Bell fillColor="#FFFFFF" :size="20" />
      </div>
      <div class="mr-4 p-1 hover:bg-gray-600 rounded-full cursor-pointer">
        <LogoutButton fillColor="#FFFFFF" :size="20" />
      </div>
      <img class="rounded-full w-[33px]" src="/images/AvatarTim.jpeg" />
    </div>
  </div>

  <div
    id="SideNav"
    class="fixed w-[200px] bg-[#191922] h-[100vh] border-r border-r-[#32323D]"
  >
    <div class="w-full pl-6 pt-3 cursor-pointer">
      <RouterLink to="/">
        <img width="130" src="" />
      </RouterLink>
    </div>
  </div>
  <div
    class="fixed w-[calc(100%-240px)] h-[calc(100%-56px)] ml-[240px] mt-[56px] overflow-x-auto"
  >
    <slot />
  </div>

  <MusicPlayer v-if="currentTrack" />
  />
</template>
