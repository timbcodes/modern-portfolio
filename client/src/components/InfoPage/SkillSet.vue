<template>
  <div class="skillset-container">
    <h1>Skillset</h1>
  </div>
</template>
<script>
export default {
  name: "SkillSet",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.skillset-container {
  width: 100%;
  height: 100%;
  @include flexCenter(column);
  h1 {
    font-size: 2em;
    font-weight: 100;
  }
}
</style>
