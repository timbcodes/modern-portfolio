import { createStore } from "vuex";
import TYPEWRITER from "./modules/TypeWriter/index";
import INFONAVIGATION from "./modules/InfoNavigation/index";
import SKILLSBUILDER from "./modules/SkillsBuilder/index";
import PROJECTSPAGE from "./modules/ProjectsPage/index";
import RESUMEPAGE from "./modules/ResumePage/index";

export default createStore({
  modules: {
    TYPEWRITER,
    INFONAVIGATION,
    SKILLSBUILDER,
    PROJECTSPAGE,
    RESUMEPAGE,
  },
});
