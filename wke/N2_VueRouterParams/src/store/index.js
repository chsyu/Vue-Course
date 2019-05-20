import Vue from 'vue';
import Vuex from 'vuex';
import googleNews from './modules/googleNews';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        googleNews
    }
});