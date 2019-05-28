import gNews from "../../js/gNews.js";

const state = {
  news: {
    socialNews: [],
    entertainmentNews: [],
    sportNews: [],
    taiwanNews: []
  },
  selected: {
    news: [],
    id: 0
  }
};

const getters = {
  totalNews: state => [
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
  onNewsSelect({ commit }, news) {
    commit("ON_NEWS_SELECT", news);
  },
  async init({ commit }) {
    let socialResp = await gNews("/?q=social");
    let entertainmentResp = await gNews("/?q=entertainment");
    let sportResp = await gNews("/?q=sport");
    let taiwanResp = await gNews("/?q=taiwan");
    commit("INIT", {
      social: socialResp.data.articles,
      entertainment: entertainmentResp.data.articles,
      sport: sportResp.data.articles,
      taiwan: taiwanResp.data.articles
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
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
