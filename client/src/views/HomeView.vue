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
      <HomeContent />
    </div>
  </div>
</template>
<script>
import IntroTypewriter from "@/components/MainPage/UI/IntroTypewriter.vue";
import Navigation from "@/components/MainPage/UI/NavBar.vue";
import SocialLinkout from "@/components/MainPage/UI/SocialLinkout.vue";
import HomeContent from "@/components/MainPage/HomeContent.vue";
export default {
  name: "HomeView",
  components: {
    IntroTypewriter,
    Navigation,
    SocialLinkout,
    HomeContent,
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
  }
}
</style>
