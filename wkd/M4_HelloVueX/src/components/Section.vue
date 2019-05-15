<template>
  <section class="section">
      <NewsList 
        id="socialNews"
        :newsType="socialNews"
        :newsTitle="'SocialNews'"
        @newsSelect="onNewsSelect"
      />
      <NewsList 
        id="entertainmentNews"
        :newsType="entertainmentNews"
        :newsTitle="'EntertainmentNews'"
        @newsSelect="onNewsSelect"
      />
      <NewsList 
        id="sportNews"
        :newsType="sportNews"
        :newsTitle="'SportNews'"
        @newsSelect="onNewsSelect"
      />
      <NewsList 
        id="taiwanNews"
        :newsType="taiwanNews"
        :newsTitle="'TaiwanNews'"
        @newsSelect="onNewsSelect"
      />
  </section>
</template>

<script>
import NewsList from './NewsList';

export default {
  name: "Section",
  components: {
    NewsList
  },
  props: [
      "socialNews", 
      "entertainmentNews", 
      "sportNews", 
      "taiwanNews"
  ],
  methods: {
    onNewsSelect(news) {
      this.$emit('newsSelect', news);
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_section.css";
</style>
