<template>
  <div class="container">
    <Nav/>
    <Gallery :totalNews="totalNews" />
    <SelectedNews
      :selectedNews="selectedNews"
    />    
    <Section
      :socialNews="socialNews"
      :entertainmentNews="entertainmentNews"
      :sportNews="sportNews"
      :taiwanNews="taiwanNews"
    />
    <Footer/>
  </div>
</template>

<script>
import gNews from "./js/gNews.js";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import SelectedNews from "./components/SelectedNews";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default {
  name: "App",
  data() {
    return {
      socialNews: [],
      entertainmentNews: [],
      sportNews: [],
      taiwanNews: []
    };
  },
  computed: {
    totalNews() {
      return [
          ...this.socialNews,
          ...this.entertainmentNews,
          ...this.sportNews,
          ...this.taiwanNews
        ];
    },
    selectedNews() {
      return [
          this.socialNews[0],
          this.entertainmentNews[0],
          this.sportNews[0],
          this.taiwanNews[0]
        ];      
    }
  },
  components: {
    Nav,
    Gallery,
    SelectedNews,
    Section,
    Footer
  },
  async created() {
    let socialResp = await gNews("/?q=social");
    this.socialNews = socialResp.data.articles;
    let entertainmentResp = await gNews("/?q=entertainment");
    this.entertainmentNews = entertainmentResp.data.articles;
    let sportResp = await gNews("/?q=sport");
    this.sportNews = sportResp.data.articles;
    let taiwanResp = await gNews("/?q=taiwan");
    this.taiwanNews = taiwanResp.data.articles;
  }
};
</script>

<style lang="postcss">
@import "./styles/base/_variables.css";
@import "./styles/base/_global.css";
</style>

