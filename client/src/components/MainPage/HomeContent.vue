<template>
  <div class="home-content-container">
    <div class="main-welcome">
      <h1>hi.</h1>
      <h2>i'm tim</h2>
    </div>
    <div class="summary-container">
      <div class="summary-text">
        <p>
          I'm a senior full-stack developer with over a decade of experience. I
          specialize in building software and applications for the
          manufacturing, transportation, and agriculture industries. I'm also a
          passionate educator and mentor, and I love to share my knowledge with
          others.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeContent",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.home-content-container {
  width: 100%;
  height: 100%;
  @include flex(row, flex-start, flex-start);
  .main-welcome {
    width: 75%;
    height: 100%;
    @include flexCenter(column);
    h1 {
      font-size: 5rem;
      font-weight: 100;
      margin-bottom: 2rem;
    }
    h2 {
      font-size: 2rem;
      font-weight: 100;
    }
  }
  .summary-container {
    height: 100%;
    width: 25%;
    @include flex(row, center, center);
    .summary-text {
      width: 80%;
      height: 100%;
      line-height: 2rem;
      @include flex(row, flex-end, flex-end);
      margin-bottom: 5rem;
      p {
        font-size: 1rem;
        font-weight: 100;
      }
    }
  }
}
</style>
