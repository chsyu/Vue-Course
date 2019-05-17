const state = {
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

const getters = {
    totalNews: state =>  [
            ...state.news.socialNews,
            ...state.news.entertainmentNews,
            ...state.news.sportNews,
            ...state.news.taiwanNews
    ],
    news: state => state.news,
    socialNews: state => state.news.socialNews,
    entertainmentNews: state => state.news.entertainmentNews,
    sportNews: state => state.news.sportNews,
    taiwanNews: state => state.news.taiwanNews,
    selectedNews: state => state.selected.news
};

const actions = {

}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}