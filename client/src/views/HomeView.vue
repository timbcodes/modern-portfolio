<template>
  <div class="main-home-container">
    <div class="navigation-side">
      <IntroTypewriter />
      <Navigation />
    </div>
    <div class="content-side"></div>
  </div>
</template>
<script>
import IntroTypewriter from "@/components/MainPage/UI/IntroTypewriter.vue";
import Navigation from "@/components/MainPage/UI/NavBar.vue";
export default {
  name: "HomeView",
  components: {
    IntroTypewriter,
    Navigation,
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
    width: 25%;
    height: 100%;
    @include flex(column);
  }
  .content-side {
    width: 75%;
    height: 100%;
  }
}
</style>
