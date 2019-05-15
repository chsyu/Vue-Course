<template>
  <div class="container">
    <Nav/>
    <Gallery :totalNews="totalNews" />
    <SelectedNews :selectedNews="selected.news"/>  
    <Section
      :socialNews="news.socialNews"
      :entertainmentNews="news.entertainmentNews"
      :sportNews="news.sportNews"
      :taiwanNews="news.taiwanNews"
      @newsSelect="onNewsSelect"
    />
    <Footer />
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
      news: {
        socialNews: [],
        entertainmentNews: [],
        sportNews: [],
        taiwanNews: [],
      },
      selected:{
        news: [],
        id: 0
      }
    };
  },
  computed: {
    totalNews() {
      return [
          ...this.news.socialNews,
          ...this.news.entertainmentNews,
          ...this.news.sportNews,
          ...this.news.taiwanNews
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
  methods: {
    onNewsSelect(news) {
      this.selected.id = this.selected.id + 1;
      if (this.selected.id == 4) this.selected.id = 0;
      //必須將this.selected.news重新設定，使用到此變數的元件才會重新渲染
      this.selected.news = [...this.selected.news];
      this.selected.news[this.selected.id] = news;
    }
  },
  async created() {
    let socialResp = await gNews("/?q=social");
    this.news.socialNews = socialResp.data.articles;
    let entertainmentResp = await gNews("/?q=entertainment");
    this.news.entertainmentNews = entertainmentResp.data.articles;
    let sportResp = await gNews("/?q=sport");
    this.news.sportNews = sportResp.data.articles;
    let taiwanResp = await gNews("/?q=taiwan");
    this.news.taiwanNews = taiwanResp.data.articles;
    this.selected.news.push(this.news.socialNews[0]);
    this.selected.news.push(this.news.entertainmentNews[0]);
    this.selected.news.push(this.news.sportNews[0]);
    this.selected.news.push(this.news.taiwanNews[0]);
  }
};
</script>

<style lang="postcss">
@import "./styles/base/_variables.css";
@import "./styles/base/_global.css";
@import "./styles/modules/_selectedNews.css";
</style>

