import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../pages/Main";
import Login from "../pages/Login";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Main },
    { path: "/login", component: Login }
  ]
});
