<template>
  <div class="site-container">
    <div class="mode-toggle-container">
      <ModeToggle />
    </div>
    <div class="main-content-container">
      <router-view />
    </div>
  </div>
</template>
<script>
import ModeToggle from "@/components/UI/ModeToggle.vue";
export default {
  name: "App",
  components: {
    ModeToggle,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.site-container {
  @include flexCenter;
  width: 100%;
  height: 100vh;
  .mode-toggle-container {
    position: absolute;
    bottom: 60px;
    left: 5px;
  }
  .main-content-container {
    width: calc(100% - 75px);
    height: calc(100% - 75px);
    border: 1px solid $portfolioBorder;
  }
}
</style>
