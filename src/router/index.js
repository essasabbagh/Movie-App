import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () =>
      import(/* webpackChunkName: "favorites" */ "../views/Favorites.vue")
  },
  {
    path: "/advance",
    name: "Advance",
    component: () =>
      import(/* webpackChunkName: "advance" */ "../views/Advance.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Details/:id",
    props: true,
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Details.vue")
    // component: Details
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
