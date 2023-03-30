<script setup>
import { storeToRefs } from "pinia";
import { useSongStore } from "../stores/song";
import MusicPlayer from "../components/MusicPlayer.vue";
import { useRouter } from "vue-router";

const useSong = useSongStore();
const { currentTrack } = storeToRefs(useSong);
const router = useRouter();

const logout = () => {
  localStorage.removeItem("isAuthenticated");
  router.push("/");
};
</script>

<template>
          <!--  -->
  <div id="TopNav"
    class="fixed right-0 flex items-center justify-between w-[calc(100%-240px)] h-[64px] border-b border-b-[#32323D]"><input
            v-model.trim="searchTerm"
            type="text"
            class="w-[280px] pl-10 pr-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Rechercher"
          />
    <div class="flex items-center w-full">
      <Magnify class="pl-6 mt-1 pr-2" fillColor="#7E7E88" :size="22" />
      <input
        class="p-1 bg-transparent outline-none font-[300] placeholder-[#BEBEC7] text-[#FFFFFF] w-full max-w-xl placeholder-[#45e811]"
        placeholder="Rechercher un titre" type="text" />
    </div>
    <div class="flex items-center pr-10">
      <button class=" text-white p-1 bg-transparent hover:text-[#45e811] cursor-pointer mr-5" @click="logout">
        Déconnexion
      </button>
      <img class="rounded-full w-[50px]" src="/images/AvatarTim.jpeg" />
    </div>
  </div>
  <div id="SideNav" class="fixed w-[200px] bg-[#191922] h-[100vh] border-r border-r-[#32323D]">
    <div class="flex items-center w-full my-[20px]">
      <img src="public/images/Logo-dizzzer.png" alt="Logo" />
    </div>
    <div class="w-full pl-6 pt-3 cursor-pointer relative">
      <div class="absolute bottom-0 left-0 right-0 text-center mb-3"></div>
    </div>
  </div>
  <div class="fixed w-[calc(100%-240px)] h-[calc(100%-56px)] ml-[240px] mt-[56px] overflow-x-auto">
    <slot />
  </div>
  <MusicPlayer v-if="currentTrack" />
</template>
