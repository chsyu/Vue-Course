import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vuetify/dist/vuetify.min.css'
import "./firebase";

import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import store from './store';
import router from './router';

Vue.use(Vuetify);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
