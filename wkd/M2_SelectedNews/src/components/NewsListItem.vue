<template>
    <li class="list-group-item news__item">
        <a class="news__link" :href="news.url">
        <p class="news__title">{{news.title}}</p>
        </a>
    </li>
</template>

<script>
export default {
    name: 'NewsListItem',
    props: ['news']
}
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_section.css";
</style>