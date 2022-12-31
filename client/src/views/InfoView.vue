<template>
  <div class="main-home-container">
    <div class="navigation-side">
      <div class="nav-area">
        <IntroTypewriter />
        <Navigation />
      </div>
      <SocialLinkout />
    </div>
    <div class="content-side">
      <div class="content-display">
        <AboutMe v-if="getAbout" />
        <SkillSet v-if="getSkills" />
      </div>
      <div class="controls-area">
        <div class="info-controls">
          <InfoNavControls />
        </div>
        <div class="profile-area"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import IntroTypewriter from "@/components/MainPage/UI/IntroTypewriter.vue";
import Navigation from "@/components/MainPage/UI/NavBar.vue";
import SocialLinkout from "@/components/MainPage/UI/SocialLinkout.vue";
import InfoNavControls from "@/components/InfoPage/UI/InfoNavControls.vue";
import AboutMe from "@/components/InfoPage/AboutMe.vue";
import SkillSet from "@/components/InfoPage/SkillSet.vue";
export default {
  name: "HomeView",
  components: {
    IntroTypewriter,
    Navigation,
    SocialLinkout,
    InfoNavControls,
    AboutMe,
    SkillSet,
  },
  computed: {
    ...mapGetters(["getInfoAbout", "getInfoSkills"]),
    getAbout() {
      return this.getInfoAbout;
    },
    getSkills() {
      return this.getInfoSkills;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.main-home-container {
  @include flexCenter;
  width: 100%;
  height: 100%;
  .navigation-side {
    width: 20%;
    height: 100%;
    @include flex(column, space-between, flex-start);
    gap: 1em;
  }
  .content-side {
    width: 80%;
    height: 100%;
    @include flexCenter(row);
    .content-display {
      width: 80%;
      height: 100%;
    }
    .controls-area {
      width: 20%;
      height: 100%;
      @include flex(column, space-evenly, center);
      .info-controls {
        width: 100%;
        height: 20%;
      }
      .profile-area {
        width: 100%;
        height: 50%;
      }
    }
  }
}
</style>
