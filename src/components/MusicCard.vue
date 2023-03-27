<template>
  <div class="musiccard d-flex flex-column">
    <img :src="album.image" :alt="album.title">
    <h3>{{ album.title }}</h3>
    <p>{{ album.artist }}</p>
    <p>{{ album.year }}</p>
    <audio :src="album.audio" controls></audio>
  </div>
</template>

<script>

export default {
  name: 'MusicCard',

  props: {
    album: {

    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  background-color: #ffffff;
  border: var(--border);
  border-radius: var(--border-radius);
  &-image {
    border-top-right-radius: var(--border-radius);
    border-top-left-radius: var(--border-radius);
    background-image: url('');
    background-size: cover;
    background-position: center;
    height: 250px;
  }
}
</style>
