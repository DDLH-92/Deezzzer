<script setup>
import axios from "axios";
import CardTop100 from "@/components/CardTop100.vue";
import MusicPlayer from "@/components/MusicPlayer.vue";
import { ref, toRefs, onMounted } from "vue";

const props = defineProps({ data: Object });
const { data } = toRefs(props);
let top100Tracks = ref([]);
const top100 = [];
const searchTerm = ref("");
let currentPage = ref(0);
const itemsPerPage = 8;

const setPage = (page) => {
  currentPage.value = page;
  getData();
};

const getData = async () => {
  const apiEndpoint = `http://localhost:3000/top10?index=${currentPage.value}`;

  axios
    .get(apiEndpoint)
    .then((response) => {
      if (response.headers["content-type"].includes("application/json")) {
        top100Tracks.value = response.data.data;
      } else {
        console.error("Response is not JSON");
      }
    })
    .catch((e) => {
      console.log("error", e);
      isLoading = false;
    });
};

onMounted(() => {
  getData();
});
</script>

<template>
  <div>
    <div class="px-8 mt-8 min-w-[800px] w-full mt-4">
      <div class="my-8 flex justify-between items-center">
        <button
          :disabled="currentPage === 0"
          @click="setPage(currentPage - 1)"
          class="border border-green-500 text-green-500 font-semibold py-2 px-4 rounded-lg w-auto transition-colors duration-300 hover:bg-green-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Précédent
        </button>
        <button
          :disabled="currentPage === 10"
          @click="setPage(currentPage + 1)"
          class="border border-green-500 text-green-500 font-semibold py-2 px-4 rounded-lg w-auto transition-colors duration-300 hover:bg-green-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Suivant
        </button>
      </div>
      <div class="mt-8 min-w-[800px] grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          class="w-full sm:w-auto"
          :key="track.id"
          v-for="track in top100Tracks"
        >
          <CardTop100 :track="track" />
        </div>
        <MusicPlayer
          v-if="currentTrack"
          :source="currentTrack.source"
          :isPlaying="isPlaying"
        />
      </div>
    </div>
  </div>
</template>
