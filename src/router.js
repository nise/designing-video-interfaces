import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import PortalsList from "./views/PortalsList.vue";
import PortalsDetail from "./views/PortalsDetail.vue";
import PatternsList from "./views/PatternsList.vue";
import PatternsDetail from "./views/PatternsDetail.vue";
import About from "./views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portals",
    name: "PortalsList",
    component: PortalsList,
  },
  {
    path: "/portals/:id",
    name: "PortalsDetail",
    component: PortalsDetail,
  },
  {
    path: "/patterns",
    name: "PatternsList",
    component: PatternsList,
  },
  {
    path: "/patterns/:id",
    name: "PatternsDetail",
    component: PatternsDetail,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
