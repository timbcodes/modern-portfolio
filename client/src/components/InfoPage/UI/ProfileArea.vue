<template>
  <div class="profile-area-container">
    <div class="profile-pic">
      <img src="@/assets/images/profile-pic.jpg" alt="profile-pic" />
    </div>
    <div class="profile-text">
      <p>
        I'm a senior full-stack developer with over a decade of experience. I
        specialize in building software and applications for the manufacturing,
        transportation, and agriculture industries. I'm also a passionate
        educator and mentor, and I love to share my knowledge with others.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileArea",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.profile-area-container {
  width: 100%;
  height: 100%;
  @include flex(column, flex-end, center);
  gap: 2em;
  .profile-pic {
    width: 100%;
    @include flexCenter;
    img {
      width: 6em;
      border-radius: 50%;
    }
  }
  .profile-text {
    @include flexCenter(column);
    width: 75%;
    p {
      font-size: 0.8em;
      font-weight: 100;
      text-align: center;
      line-height: 1.5em;
    }
  }
}
</style>
