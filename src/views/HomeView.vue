<script setup>
import axios from "axios";
import MixesInspiredBy from "../components/MixesInspiredBy.vue";
import CustomCarousel from "../components/CustomCarousel.vue";

let topTracks = [];
let isLoading = true;

axios
  .get("https://cors-anywhere.herokuapp.com/api.deezer.com/chart", {
    mode: "no-cors",
    headers: { "Access-Control-Allow-Origin": "Accept" },
    credentials: "same-origin",
  })
  .then((response) => {
    console.log("response", response.data.tracks.data);
    topTracks = response.data.tracks.data;
    isLoading = false;
  })
  .catch((e) => {
    console.log("error", e);
    isLoading = false;
  });
</script>

<template>
  <div class="max-w-[1500px] mx-auto">
    <div class="px-8 mt-8 min-w-[800px] w-full" v-if="!isLoading">
      <div class="text-white text-xl font-semibold inline-block">
        TOP 10
        <div class="text-sm font-light text-[#A2A2AD]">
          Découvrez les titres les plus populaires du moment !
        </div>
      </div>

      <div class="mt-8 min-w-[800px]">
        <CustomCarousel category :data="topTracks" v-if="topTracks.length" />
      </div>

      <div class="py-10"></div>

      <div class="text-white text-xl font-semibold inline-block">
        TOP 100
        <div class="text-sm font-light text-[#A2A2AD]">
          Les 100 titres les plus populaires
        </div>
      </div>
      <div class="mt-8 min-w-[800px] flex flex-wrap gap-4">
        <div class="w-1/2" :key="track" v-for="track in topTracks">
          <MixesInspiredBy category :data="track" />
        </div>
      </div>
    </div>
  </div>
</template>
