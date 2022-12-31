export default {
  setInfoAbout(state) {
    state.infoNavigation.about = true;
    state.infoNavigation.skills = false;
  },
  setInfoSkills(state) {
    state.infoNavigation.skills = true;
    state.infoNavigation.about = false;
  },
};
