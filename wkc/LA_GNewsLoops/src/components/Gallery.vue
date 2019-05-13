<template>
  <header class="gallery">
    <figure v-for="index in 4" v-bind:key="index" :class="`gallery__item gallery__item--${index}`">
      <img
        :src="socialNews[index-1].urlToImage"
        :alt="`Gallery image ${index}`"
        class="gallery__img"
      >
    </figure>
    <figure
      v-for="index in 4"
      v-bind:key="index"
      :class="`gallery__item gallery__item--${index+4}`"
    >
      <img
        :src="entertainmentNews[index-1].urlToImage"
        :alt="`Gallery image ${index+4}`"
        class="gallery__img"
      >
    </figure>
    <figure
      v-for="index in 4"
      v-bind:key="index"
      :class="`gallery__item gallery__item--${index+8}`"
    >
      <img
        :src="sportNews[index-1].urlToImage"
        :alt="`Gallery image ${index+8}`"
        class="gallery__img"
      >
    </figure>
    <figure
      v-for="index in 4"
      v-bind:key="index"
      :class="`gallery__item gallery__item--${index+12}`"
    >
      <img
        :src="taiwanNews[index-1].urlToImage"
        :alt="`Gallery image ${index+12}`"
        class="gallery__img"
      >
    </figure>
  </header>
</template>

<script>
export default {
  name: "Gallery",
  props: ["socialNews", "entertainmentNews", "sportNews", "taiwanNews"]
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_gallery.css";
</style>
