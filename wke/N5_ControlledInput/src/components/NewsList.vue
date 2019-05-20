<template>
    <div class="news">
        <h3 class="news__features">
            {{newsTitle}}
        </h3>
        <ul class="news__list">
            <NewsListItem 
                v-for="news in newsType"
                :key="news.url"
                :news="news"
            />
        </ul>
    </div>
</template>

<script>
import NewsListItem from './NewsListItem';

export default {
    name: 'NewsList',
    components: {
        NewsListItem
    },
    props: ['newsType','newsTitle']
}
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_section.css";
</style>
