<template>
  <div class="typewriter-container">
    <h1>
      timb.<span>{{ textElement }}</span
      >()
    </h1>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import TypeWriter from "@/js/scripts/typewriter-script.js";
export default {
  name: "IntroTypewriter",
  data() {
    return {
      words: ["codes", "designs", "develops", "creates", "consults"],
      delay: 5000,
    };
  },
  computed: {
    ...mapGetters(["getTypewriterText"]),
    textElement() {
      return this.getTypewriterText;
    },
  },
  methods: {
    ...mapMutations(["setTypewriterText"]),
    resetTypewrtierText() {
      this.setTypewriterText("");
    },
  },
  created() {
    this.resetTypewrtierText();
    new TypeWriter(this.words, this.delay);
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
    font-size: 4rem;
    font-weight: 100;
  }
  span {
    color: $portfolioPink;
  }
}
</style>
