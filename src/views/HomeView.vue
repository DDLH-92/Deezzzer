<script setup>
import CustomCarousel from "@/components/CustomCarousel.vue";
import SearchAndPagination from "@/components/SearchAndPagination.vue";
</script>

<template v-if="isLoading">
  <div class="max-w-[1500px] mx-auto">
    <div class="px-8 mt-8 min-w-[800px] w-full mt-4">
      <div class="text-white text-xl font-semibold inline-block">
        TOP 10
        <div class="text-sm font-light text-[#A2A2AD]">
          Ecoutez les titres les plus populaires du moment !
        </div>
      </div>
      <CustomCarousel />
      <div class="py-6"></div>
      <div class="text-white text-xl font-semibold inline-block">
        TOP 100
        <div class="text-sm font-light text-[#A2A2AD]">
          Découvrez les 100 titres les plus populaires.
        </div>
      </div>
      <div class="grid gap-4">
        <div class="grid-cols-3" :key="track">
          <SearchAndPagination category :data="topTracks" />
        </div>
      </div>
    </div>
  </div>
</template>
