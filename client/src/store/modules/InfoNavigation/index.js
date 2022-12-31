import InfoNavigationGetters from "./getters";
import InfoNavigationMutations from "./mutations";

export default {
  state: {
    infoNavigation: {
      about: true,
      skills: false,
    },
  },
  getters: InfoNavigationGetters,
  mutations: InfoNavigationMutations,
};
