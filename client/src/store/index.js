import { createStore } from "vuex";
import TYPEWRITER from "./modules/TypeWriter/index";
import INFONAVIGATION from "./modules/InfoNavigation/index";

export default createStore({
  modules: {
    TYPEWRITER,
    INFONAVIGATION,
  },
});
