<template>
  <div class="container">
    <Nav/>
    <Gallery />
    <Section />
    <Footer/>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Nav,
    Gallery,
    Section,
    Footer
  }
};
</script>

<style lang="postcss">
@import "./styles/base/_variables.css";
@import "./styles/base/_global.css";
</style>

