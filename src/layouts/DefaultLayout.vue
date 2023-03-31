<script setup>
import { storeToRefs } from "pinia";
import { useSongStore } from "../stores/song";
import MusicPlayer from "../components/MusicPlayer.vue";
import { useRouter } from "vue-router";
import SearchAndPagination from "../components/SearchAndPagination.vue";

const useSong = useSongStore();
const { currentTrack } = storeToRefs(useSong);
const router = useRouter();

const logout = () => {
  localStorage.removeItem("isAuthenticated");
  router.push("/");
};
</script>

<template>
  <div
    id="TopNav"
    class="fixed right-0 flex items-center justify-between w-[calc(100%-240px)] h-[50px] border-b border-b-[#32323D]"
  >
    <div>
      <input
        v-model.trim="searchTerm"
        type="text"
        class="w-[280px] pl-10 pr-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-[#121216] text-white placeholder-green-500"
        placeholder="Rechercher"
      />
      <button
        v-if="searchTerm"
        @click="searchTerm = ''"
        class="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      >
      </button>
    </div>
    <div class="flex items-center w-full">
      <Magnify class="pl-6 mt-1 pr-2" fillColor="#7E7E88" :size="22" />
    </div>
    <div class="flex items-center pr-10">
      <button
        class="text-white p-1 bg-transparent hover:text-[#45e811] cursor-pointer mr-5"
        @click="logout"
      >
        Déconnexion
      </button>
      <img class="rounded-full w-[40px] mr-6" src="/images/AvatarTim.jpeg" />
    </div>
  </div>
  <div
    id="SideNav"
    class="fixed w-[200px] h-[100vh] border-r border-r-[#32323D]"
  >
    <div class="flex items-center w-full my-[20px]">
      <img src="public/images/Logo-dizzzer.png" alt="Logo" />
    </div>
    <div class="w-full pl-6 pt-3 cursor-pointer relative">
      <div class="absolute bottom-0 left-0 right-0 text-center mb-3"></div>
    </div>
  </div>
  <div
    class="fixed w-[calc(100%-240px)] h-[calc(100%-56px)] ml-[240px] mt-[56px] overflow-x-auto"
  >
    <slot />
  </div>
  <div v-if="currentTrack">
    <MusicPlayer />
  </div>
</template>
