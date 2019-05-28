<template>
  <div class="container">
    <Nav/>
    <Gallery />
    <SelectedNews />  
    <Section />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import SelectedNews from "./components/SelectedNews";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Nav,
    Gallery,
    SelectedNews,
    Section,
    Footer
  },
  methods: mapActions(['init']),
  created() {
    this.init();
  }
};
</script>

<style lang="postcss">
@import "./styles/base/_variables.css";
@import "./styles/base/_global.css";
@import "./styles/modules/_selectedNews.css";
</style>

