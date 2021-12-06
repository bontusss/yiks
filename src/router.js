import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Newspapers from "./views/Newspapers.vue";
import Sports from "./views/Sports.vue";
import Business from "./views/Business.vue";
import Tech from "./views/Tech.vue";
import Crypto from "./views/Crypto.vue";
import Entertainment from "./views/Entertainment.vue";
import FromASource from "./views/FromASource.vue";
import Search from "./views/Search.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/newspapers", component: Newspapers },
  { path: "/sports", component: Sports },
  { path: "/business", component: Business },
  { path: "/tech", component: Tech },
  { path: "/crypto", component: Crypto },
  { path: "/entertainment", component: Entertainment },
  {
    path: "/source/:source",
    component: FromASource,
    name: "AllNewsFromASource",
  },
  { path: "/search", component: Search, name: "search" },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
