<template>
  <section class="section">
      <NewsList 
        id="socialNews"
        :newsType="socialNews"
        :newsTitle="'SocialNews'"
      />
      <NewsList 
        id="entertainmentNews"
        :newsType="entertainmentNews"
        :newsTitle="'EntertainmentNews'"
      />
      <NewsList 
        id="sportNews"
        :newsType="sportNews"
        :newsTitle="'SportNews'"
      />
      <NewsList 
        id="taiwanNews"
        :newsType="taiwanNews"
        :newsTitle="'TaiwanNews'"
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
    ]
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_section.css";
</style>
