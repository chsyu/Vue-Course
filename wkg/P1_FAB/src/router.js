import Vue from "vue";
import Router from "vue-router";
import Home from './components/Home';
import Details from './components/Details';
import Post from './components/Post';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/details/:id",
      name: "details",
      props: true,
      component: Details
    },
    {
      path: "/post",
      name: "post",
      component: Post
    }
  ]
});
