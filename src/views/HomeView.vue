<script setup>
import axios from "axios";

import MixesInspiredBy from "../components/MixesInspiredBy.vue";
import MultiArtistSelect from "../components/MultiArtistSelect.vue";
import CustomCarousel from "../components/CustomCarousel.vue";
import Highlights from "../components/Highlights.vue";

let topTracks = []
// const response = await fetch('https://api.deezer.com/chart')
// console.log(response)
axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart', {

		mode: 'no-cors',
    headers: { 'Access-Control-Allow-Origin' : 'Accept'},
    credentials: "same-origin"
    //headers: { 'Accept' : '*/*', 'Accept-Encoding':'gzip, deflate, br'}

	}).then((response) => {
		console.log('response',response.data.tracks.data);
    topTracks = response.data.tracks.data

	}).catch((e) => {
		console.log('error',e);
	});
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
          :data=topTracks
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
