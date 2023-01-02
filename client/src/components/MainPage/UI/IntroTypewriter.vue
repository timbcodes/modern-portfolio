<template>
  <div class="typewriter-container">
    <h1>
      timb.<span>{{ textElement }}</span
      >()
    </h1>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "IntroTypewriter",
  computed: {
    ...mapGetters(["getTypewriterText"]),
    textElement() {
      return this.getTypewriterText;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.typewriter-container {
  width: 100%;
  height: 100px;
  @include flex(column, center, flex-start);
  margin-left: 2em;
  h1,
  span {
    font-size: 2.25rem;
    font-weight: 100;
  }
  span {
    color: $portfolioPink;
  }
}
</style>
