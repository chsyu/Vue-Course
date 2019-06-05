import Vue from 'vue'
import Vuex from 'vuex'
import router from "./router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titleName: 'DogApp'
  },
  getters: {
    titleName: state => state.titleName
  },
  mutations: {
    SET_TITLE_NAME: (state, titleName) => {
      if(router.name == 'home')
        state.titleName = 'DogApp';
      else
        state.titleName = titleName;
    } 
  },
  actions: {
    setTitleName({ commit }, titalName) {
      commit('SET_TITLE_NAME', titalName);
    }
  }
})
