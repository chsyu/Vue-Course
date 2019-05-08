<template>
  <div class="container">
    <Nav />
    <Gallery />
    <Section />
    <Footer />
  </div>
</template>

<script>
import gNews from "./js/gNews.js";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
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
  components: {
    Nav,
    Gallery,
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

