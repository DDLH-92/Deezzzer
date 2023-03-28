<script setup>
import MixesInspiredBy from "../components/MixesInspiredBy.vue";
import MultiArtistSelect from "../components/MultiArtistSelect.vue";
import CustomCarousel from "../components/CustomCarousel.vue";
import Highlights from "../components/Highlights.vue";
</script>

<template>
  <div class="max-w-[1500px] mx-auto">
    <div class="px-8 mt-8 min-w-[800px] w-full">
      <div class="text-white text-xl font-semibold inline-block">
        TOP 10
        <div class="text-sm font-light text-[#A2A2AD]">
          Découvrez les titres les plus populaires du moment !
        </div>
      </div>

      <div class="mt-8 min-w-[800px]">
        <CustomCarousel
          category
          :data="[
            {
              url: 'https://picsum.photos/id/134/300/300',
              song: 'Foregone',
              by: 'In Flames',
              releasedOn: '10/02/2023',
            },
            {
              url: 'https://picsum.photos/id/144/300/300',
              song: 'Dark Waters',
              by: 'Delain',
              releasedOn: '09/01/2023',
            },
            {
              url: 'https://picsum.photos/id/146/300/300',
              song: 'Heritage',
              by: 'Distant',
              releasedOn: '10/01/2023',
            },
            {
              url: 'https://picsum.photos/id/78/300/300',
              song: 'Meanwhile',
              by: 'Klone',
              releasedOn: '08/02/2023',
            },
            {
              url: 'https://picsum.photos/id/151/300/300',
              song: 'Truth Decay',
              by: 'You Me At Six',
              releasedOn: '10/01/2023',
            },
            {
              url: 'https://picsum.photos/id/155/300/300',
              song: 'This Is Why',
              by: 'Paramore',
              releasedOn: '10/02/2023',
            },
            {
              url: 'https://picsum.photos/id/167/300/300',
              song: 'The Jaws Of Life',
              by: 'Pierce The Veil',
              releasedOn: '09/23/2023',
            },
            {
              url: 'https://picsum.photos/id/191/300/300',
              song: 'The Future Is Your Past',
              by: 'In The Brian Jonestown Massacre',
              releasedOn: '07/25/2023',
            },
            {
              url: 'https://picsum.photos/id/194/300/300',
              song: 'The Land, The Water, The Sky',
              by: 'Black Belt Eagle Scout',
              releasedOn: '09/22/2023',
            },
            {
              url: 'https://picsum.photos/id/177/300/300',
              song: 'The Day My Father Died',
              by: 'SYML',
              releasedOn: '10/02/2023',
            },
            {
              url: 'https://picsum.photos/id/227/300/300',
              song: 'Complete Mountain Almanac',
              by: 'Complete Mountain Almanac',
              releasedOn: '10/02/2023',
            },
            {
              url: 'https://picsum.photos/id/232/300/300',
              song: 'Music From Montana Story',
              by: 'Kevin Morby',
              releasedOn: '10/01/2023',
            },
          ]"
        />
      </div>

      <div class="py-10"></div>

      <div class="text-white text-xl font-semibold inline-block">
        TOP 100
        <div class="text-sm font-light text-[#A2A2AD]">
          Les 100 titres les plus populaires .
        </div>
      </div>
      <div class="mt-8 min-w-[800px]">
        <div class="flex justify-between w-full gap-8">
          <div class="xl:w-1/3 w-1/2">
            <MixesInspiredBy
              class="pb-1.5"
              text="VAMPIRE (feat. Oli Sykes of Bring Me The Horizon)"
              by="Ic3peak"
              to="/artist"
              image="https://picsum.photos/id/147/300/300"
            />
            <MixesInspiredBy
              class="pb-1.5"
              text="Deutchland"
              by="Rammstein"
              to="/artist"
              image="https://picsum.photos/id/166/300/300"
            />
            <MixesInspiredBy
              class="pb-1.5"
              text="Fallout"
              by="Masked Wolf"
              to="/artist"
              image="https://picsum.photos/id/127/300/300"
            />
          </div>
          <div class="xl:w-1/3 w-1/2">
            <MixesInspiredBy
              class="pb-1.5"
              text="Pray For Plagues"
              by="Bring Me the Horizon"
              to="/artist"
              image="https://picsum.photos/id/201/300/300"
            />
            <MixesInspiredBy
              class="pb-1.5"
              text="Candy Truck / You Expected"
              by="Bring Me the Horizon"
              to="/artist"
              image="https://picsum.photos/id/222/300/300"
            />
            <MixesInspiredBy
              class="pb-1.5"
              text="L'efant sauvage"
              by="Gojira"
              to="/artist"
              image="https://picsum.photos/id/212/300/300"
            />
          </div>
          <div class="xl:block hidden xl:w-1/3">
            <MixesInspiredBy
              class="pb-1.5"
              text="Bad Life"
              by="Sigrid"
              to="/artist"
              image="https://picsum.photos/id/211/300/300"
            />
            <MixesInspiredBy
              class="pb-1.5"
              text="Dystopia"
              by="Megadeth"
              to="/artist"
              image="https://picsum.photos/id/123/300/300"
            />
            <MixesInspiredBy
              class="pb-1.5"
              text="Can You Feel My Heart"
              by="Bring Me the Horizon"
              to="/artist"
              image="https://picsum.photos/id/94/300/300"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
