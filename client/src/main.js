import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/** Import any custom styles below **/
import "./scss/normalize.scss";
import "./scss/UniversalStyles.scss";

createApp(App).use(store).use(router).mount("#app");
