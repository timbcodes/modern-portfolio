<template>
  <div class="toggle-mode-container">
    <div class="light-mode">
      <div class="light-square"></div>
      <span>LIGHT</span>
    </div>
    <div class="dark-mode">
      <div class="dark-square"></div>
      <span>DARK</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModeToggle",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.toggle-mode-container {
  width: 100%;
  height: 100%;
  @include flex(column, flex-end, flex-end);
  gap: 3em;
  .dark-mode,
  .light-mode {
    width: 100%;
    @include flexCenter;
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
    span {
      font-size: 0.8em;
      font-weight: 400;
    }
    .dark-square,
    .light-square {
      width: 0.5em;
      height: 0.5em;
      border: 1px solid $portfolioWhite;
      margin-right: 0.25em;
    }
    &:hover {
      cursor: pointer;
      color: #fff;
    }
  }
}
</style>
