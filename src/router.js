import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Newspapers from "./views/Newspapers.vue";
import Sports from "./views/Sports.vue";
import Business from "./views/Business.vue";
import Tech from "./views/Tech.vue";
import Crypto from "./views/Crypto.vue";
import Entertainment from "./views/Entertainment.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/newspapers", component: Newspapers },
  { path: "/sports", component: Sports },
  { path: "/business", component: Business },
  { path: "/tech", component: Tech },
  { path: "/crypto", component: Crypto },
  { path: "/entertainment", component: Entertainment },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
