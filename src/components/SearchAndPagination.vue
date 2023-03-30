<script setup>
import axios from "axios";
import CardTop100 from "@/components/CardTop100.vue";
import { ref, toRefs, onMounted } from "vue";

const props = defineProps({ data: Object });
const { data } = toRefs(props);
let top100Tracks = ref([]);

// fetch data from API or use a static array
const top100 = [
  // data here
];
const searchTerm = ref("");
let currentPage = ref(0);
const itemsPerPage = 8;

const setPage = page => {
  currentPage.value = page;
  getData()
}

const getData = async () => {
  const apiEndpoint = `http://localhost:3000/top10?index=${currentPage.value}`;
  axios
    .get(apiEndpoint)
    .then((response) => {
      if (response.headers["content-type"].includes("application/json")) {
        top100Tracks.value = response.data.data;
  console.log("test",apiEndpoint)

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
  <div class="max-w-[1500px] mx-auto">
    <div class="px-8 mt-8 min-w-[800px] w-full mt-4">
      <div class="flex justify-between items-center mb-6">
        <div class="relative">
          <input
            v-model.trim="searchTerm"
            type="text"
            class="w-[280px] pl-10 pr-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Rechercher"
          />
          <button
            v-if="searchTerm"
            @click="searchTerm = ''"
            class="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 5.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="mt-8 min-w-[800px] grid grid-cols-2 gap-4">
        <div class="grid-cols-2" :key="track.id" v-for="track in top100Tracks">
          <CardTop100 :track="track" />
        </div>
      </div>
      <div class="my-8 flex justify-center items-center">
        <button
          :disabled="currentPage === 1"
          @click="currentPage -= 1"
          class="mr-2 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Précédent
        </button>
        <button
          :disabled="currentPage === totalPages"
          @click="setPage(currentPage += 1)"
          class="px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Suivant
        </button>
      </div>
    </div>
  </div>
</template>
