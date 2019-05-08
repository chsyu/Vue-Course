<template>
  <section class="section">
    <div class="news">
      <h3 class="news__features">SocialNews</h3>
      <ul id="socialNews" class="list-group news__list">
        <li v-for="news in socialNews" v-bind:key="news.url" class="list-group-item news__item">
          <a class="news__link" :href="news.url">
            <p class="news__title">{{news.title}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="news">
      <h3 class="news__features">EntertainmentNews</h3>
      <ul id="entertainmentNews" class="list-group news__list">
        <li v-for="news in entertainmentNews" v-bind:key="news.url" class="list-group-item news__item">
          <a class="news__link" :href="news.url">
            <p class="news__title">{{news.title}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="news">
      <h3 class="news__features">SportNews</h3>
      <ul id="sportNews" class="list-group news__list">
        <li v-for="news in sportNews" v-bind:key="news.url" class="list-group-item news__item">
          <a class="news__link" :href="news.url">
            <p class="news__title">{{news.title}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="news">
      <h3 class="news__features">TaiwanNews</h3>
      <ul id="taiwanNews" class="list-group news__list">
        <li v-for="news in taiwanNews" v-bind:key="news.url" class="list-group-item news__item">
          <a class="news__link" :href="news.url">
            <p class="news__title">{{news.title}}</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Section",
  props: ["socialNews", "entertainmentNews", "sportNews", "taiwanNews"]
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_section.css";
</style>
