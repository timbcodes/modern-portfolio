<template>
  <div class="social-links-container">
    <div class="github-link">
      <a href="https://github.com/timbcodes" target="_blank"
        ><i class="bi bi-github"></i
      ></a>
    </div>
    <div class="linkedin-link">
      <a href="https://linkedin.com/in/timbcodes" target="_blank"
        ><i class="bi bi-linkedin"></i
      ></a>
    </div>
    <div class="twitter-link">
      <a href="https://twitter.com/furrycodertrash" target="_blank"
        ><i class="bi bi-twitter"></i
      ></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "SocialLinkout",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.social-links-container {
  width: 5%;
  height: 50%;
  @include flex(column, flex-end, flex-end);
  margin-left: 2em;
  margin-bottom: 1.5em;
  .github-link,
  .linkedin-link,
  .twitter-link {
    width: 100%;
    height: 2.5rem;
    @include flex(row, flex-end, flex-end);
    a {
      color: $portfolioWhite;
    }
    i {
      font-size: 1rem;
      font-weight: 100;
      &:hover {
        color: $portfolioPink;
        cursor: pointer;
      }
    }
  }
}
</style>
