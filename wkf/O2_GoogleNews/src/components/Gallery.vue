<template>
  <header class="gallery">
    <figure 
      v-for="(news, index) in totalNews" 
      :key="index" 
      :class="`gallery__item gallery__item--${index+1}`"
    >
      <img
        :src="news.urlToImage"
        :alt="`Gallery image ${index+1}`"
        class="gallery__img"
      >
    </figure>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Gallery",
  computed: mapGetters(['totalNews'])
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_gallery.css";
</style>
