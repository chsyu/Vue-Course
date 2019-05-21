<template>
  <section class="selectedNews">
    <NewsCard 
      v-for="news in selectedNews"
      :key="news.title"
      :news="news"
    />
  </section>
</template>

<script>
import NewsCard from "./NewsCard";

export default {
  name: "SelectedNews",
  components: {
    NewsCard
  },
  props: [
      "selectedNews"
  ]
};
</script>

<style lang="postcss" scoped>
@import "../styles/modules/_selectedNews.css";
</style>
