import typewriterGetters from "./getters";
import typewriterMutations from "./mutations";

export default {
  state: {
    typewriter: {
      text: "",
    },
  },
  getters: typewriterGetters,
  mutations: typewriterMutations,
};
