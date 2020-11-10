import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mission from "../views/Mission.vue";
import Plants from "../views/Plants.vue";
import Design from "../views/Design.vue";
import Services from "../views/Services.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mission",
    name: "Mission",
    component: Mission,
  },
  {
    path: "/plants",
    name: "Plants",
    component: Plants,
  },
  {
    path: "/design",
    name: "Design",
    component: Design,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
