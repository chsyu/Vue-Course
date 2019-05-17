<template>
  <header class="gallery">
    <figure 
      v-for="index in 16" 
      :key="index" 
      :class="`gallery__item gallery__item--${index}`"
    >
      <img
        :src="totalNews[index-1].urlToImage"
        :alt="`Gallery image ${index}`"
        class="gallery__img"
      >
    </figure>
  </header>
</template>

<script>
export default {
  name: "Gallery",
  props: ["totalNews"]
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_gallery.css";
</style>
