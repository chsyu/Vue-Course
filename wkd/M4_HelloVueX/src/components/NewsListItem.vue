<template>
    <li class="list-group-item news__item">
        <p @click="onNewsSelect" class="news__title">
            {{news.title}}
        </p>
    </li>
</template>

<script>
export default {
    name: 'NewsListItem',
    props: ['news'],
    methods: {
        onNewsSelect() {
            this.$emit('newsSelect', this.news);
        }
    }
}
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_section.css";
</style>