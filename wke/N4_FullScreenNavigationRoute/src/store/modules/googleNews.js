import { news4, news16 } from "../../js/gNews.js";

const state = {
  news: {
    socialNews: [],
    entertainmentNews: [],
    sportNews: [],
    taiwanNews: []
  },
  news16: [],
  selected: {
    news: [],
    id: 0
  },
  newsTopic: 'taiwan'
};

const getters = {
  totalNews: state => [
    ...state.news.socialNews,
    ...state.news.entertainmentNews,
    ...state.news.sportNews,
    ...state.news.taiwanNews
  ],
  news: state => state.news,
  news16: state => state.news16,
  newsTopic: (state) => state.newsTopic,
  socialNews: state => state.news.socialNews,
  entertainmentNews: state => state.news.entertainmentNews,
  sportNews: state => state.news.sportNews,
  taiwanNews: state => state.news.taiwanNews,
  selectedNews: state => state.selected.news
};

const actions = {
    onNewsSelect({ commit }, news) {
        commit('ON_NEWS_SELECT', news);
    },

    async init({ commit }) {
        let socialResp = await news4("/?q=social");
        let entertainmentResp = await news4("/?q=entertainment");
        let sportResp = await news4("/?q=sport");
        let taiwanResp = await news4("/?q=taiwan");
        commit(
            'INIT', {
                social: socialResp.data.articles, 
                entertainment: entertainmentResp.data.articles,
                sport: sportResp.data.articles,
                taiwan: taiwanResp.data.articles
            }
        );
    },
    
    async initnews16({ commit }, newsTopic) {
        let newsResp = await news16(`/?q=${newsTopic}`);
        commit('INIT_NEWS_16', { 
            news16: newsResp.data.articles,
            newsTopic
        });
    }
};

const mutations = {
    ON_NEWS_SELECT: (state, news) => {
        state.selected.id = state.selected.id + 1;
        if (state.selected.id == 4) state.selected.id = 0;
        //必須將this.selected.news重新設定，使用到此變數的元件才會重新渲染
        state.selected.news = [...state.selected.news];
        state.selected.news[state.selected.id] = news;
    },

    INIT: (state, payload) => {
        state.news.socialNews = payload.social;
        state.news.entertainmentNews = payload.entertainment;
        state.news.sportNews = payload.sport;
        state.news.taiwanNews = payload.taiwan;
        state.selected.news.push(state.news.socialNews[0]);
        state.selected.news.push(state.news.entertainmentNews[0]);
        state.selected.news.push(state.news.sportNews[0]);
        state.selected.news.push(state.news.taiwanNews[0]);
    },

    INIT_NEWS_16: (state, payload) => {
        state.newsTopic = payload.newsTopic;
        state.news16 = payload.news16;
    },
  
};

export default {
    state,
    getters,
    actions,
    mutations
};