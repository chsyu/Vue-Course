<template>
    <li class="news__item">
        <p @click="onNewsSelect(news)" class="news__title">
            {{news.title}}
        </p>
    </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'NewsListItem',
    props: ['news'],
    methods: mapActions(['onNewsSelect'])
}
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_section.css";
</style>