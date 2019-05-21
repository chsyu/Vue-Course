import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../pages/Main";
import Login from "../pages/Login";
import News16 from "../pages/News16";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "*", component: Main },
    { path: "/login", component: Login },
    { path: "/news/:id", component: News16, props: true }
  ]
});
