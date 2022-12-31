<template>
  <div class="info-nav-container">
    <div @click="setAbout()" :class="{ selected: getAbout }" class="about-me">
      <span>About Me</span>
    </div>
    <div @click="setSkills()" :class="{ selected: getSkills }" class="skills">
      <span>Skills</span>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "InfoNavControls",
  computed: {
    ...mapGetters(["getInfoAbout", "getInfoSkills"]),
    getAbout() {
      return this.getInfoAbout;
    },
    getSkills() {
      return this.getInfoSkills;
    },
  },
  methods: {
    ...mapMutations(["setInfoAbout", "setInfoSkills"]),
    setAbout() {
      this.setInfoAbout();
    },
    setSkills() {
      this.setInfoSkills();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.info-nav-container {
  width: 100%;
  height: 100%;
  @include flexCenter(column);
  gap: 1em;
  .about-me,
  .skills {
    width: 80%;
    height: 2.5em;
    @include flexCenter;
    border: 1px solid $portfolioBorder;
    cursor: pointer;
    span {
      font-size: 1.1em;
      font-weight: 100;
    }
    &:hover {
      background-color: $portfolioSmoke;
    }
  }
  .selected {
    border: 1px solid $portfolioPink;
  }
}
</style>
