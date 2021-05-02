import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "houses",
    component: () =>
      import(/* webpackChunkName: "houses" */ "../views/Houses.vue"),
  },
  {
    path: "/house/:id",
    name: "house.detail",
    component: () =>
      import(/* webpackChunkName: "houseDetail" */ "../views/HouseDetail.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
