<script setup>
import axios from "axios";
import MixesInspiredBy from "../components/MixesInspiredBy.vue";
import CustomCarousel from "../components/CustomCarousel.vue";

let topTracks = [];
let isLoading = true;

if (localStorage.getItem("topTracks")) {
  topTracks = JSON.parse(localStorage.getItem("topTracks"));
  isLoading = false;
}

const apiEndpoint = "http://localhost:3000/top10";
const proxyEndpoint = "http://localhost:3000/proxy";

axios.get('http://localhost:3000/top10')
  .then(response => {
    if (response.headers['content-type'].includes('application/json')) {
      topTracks = response.data;
      isLoading = false;
      localStorage.setItem("topTracks", JSON.stringify(topTracks.data));
    } else {
      console.error('Response is not JSON');
      isLoading = false;
    }
  })
  .catch(e => {
    console.log("error", e);
    isLoading = false;
  });
</script>

<template v-if="isLoading">
  <div class="max-w-[1500px] mx-auto">
    <div class="px-8 mt-8 min-w-[800px] w-full">
      <div class="text-white text-xl font-semibold inline-block">
        TOP 10
        <div class="text-sm font-light text-[#A2A2AD]">
          Découvrez les titres les plus populaires du moment !
        </div>
      </div>

      <div class="mt-8 min-w-[800px]" v-if="!isLoading">
        <CustomCarousel category :data="topTracks" />
      </div>

      <div class="py-10"></div>

      <div class="text-white text-xl font-semibold inline-block">
        TOP 100
        <div class="text-sm font-light text-[#A2A2AD]">
          Les 100 titres les plus populaires
        </div>
      </div>
      <div class="mt-8 min-w-[800px] grid grid-cols-2 gap-4">
        <div class="grid-cols-2" :key="track" v-for="track in topTracks">
          <MixesInspiredBy category :data="track" />
        </div>
      </div>
    </div>
  </div>
</template>
