import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import loader from "./components/Loader.vue";
createApp(App).use(router, loader).mount("#app");
