import { createStore } from "vuex";
import TYPEWRITER from "./modules/TypeWriter/index";
import INFONAVIGATION from "./modules/InfoNavigation/index";
import SKILLSBUILDER from "./modules/SkillsBuilder/index";

export default createStore({
  modules: {
    TYPEWRITER,
    INFONAVIGATION,
    SKILLSBUILDER,
  },
});
