<template>
  <div class="skillset-container">
    <div class="skillset-title">
      <h1>Skillset</h1>
    </div>
    <div class="skillset-menu-bar">
      <div
        v-for="item in navItems"
        :key="item"
        class="menu-button"
        :class="{ selected: currentNav === item }"
        @click="handleClick(item)"
      >
        <p>{{ item }}</p>
      </div>
    </div>
    <div class="skillset-content">
      <SkillsSection :nav="currentNav" />
    </div>
  </div>
</template>
<script>
import SkillsSection from "./UI/SkillsSection.vue";
export default {
  name: "SkillSet",
  components: {
    SkillsSection,
  },
  data() {
    return {
      navItems: [
        "Languages",
        "Frameworks",
        "Libraries",
        "Databases",
        "Tools",
        "Cloud",
      ],
      currentNav: "Languages",
    };
  },
  methods: {
    handleClick(item) {
      this.currentNav = item;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.skillset-container {
  width: 100%;
  height: 100%;
  margin-left: 3em;
  @include flex(column, flex-start, flex-start);
  h1 {
    font-size: 2em;
    font-weight: 100;
    margin: 2rem 0;
  }
  .skillset-menu-bar {
    width: 100%;
    height: 2em;
    @include flex(row, flex-start, center);
    gap: 1em;
    .menu-button {
      min-width: 6em;
      height: 2rem;
      border: 1px solid $portfolioBorder;
      @include flexCenter(column);
      p {
        font-size: 1em;
        font-weight: 100;
      }
      &:hover {
        background-color: $portfolioBorder;
        cursor: pointer;
      }
    }
    .selected {
      border: 1px solid $portfolioPink;
    }
  }
  .skillset-content {
    width: 100%;
    height: 100%;
    @include flex(row, flex-start, flex-start);
    flex-wrap: wrap;
    gap: 1em;
    overflow-y: auto;
  }
}
</style>
