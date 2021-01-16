import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/favorites",
    name: "favorites",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Favorites.vue")
  },
  {
    path: "/Details",
    component: Details
  },
  {
    path: "/Details/:id",
    props: true,
    component: Details
  },
  {
    path: "/not-found",
    component: NotFoundPage
  },
  // Vue 2
  // {
  //   path : "*",
  //   component : NotFoundPage
  // },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
