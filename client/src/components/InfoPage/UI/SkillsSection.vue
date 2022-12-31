<template>
  <div class="skills-section-container">
    <h1>{{ getNav }}</h1>
    <div class="skills-section-content">
      <div v-for="item in getSkillData" :key="item.id" class="skill-item">
        <div class="top-title">
          <h2>{{ item.name }}</h2>
          <p>Strength: {{ item.level }}/5</p>
        </div>
        <div class="item-text">
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "SkillsSection",
  props: {
    nav: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getSkillsBuilder"]),
    getNav() {
      return this.nav;
    },
    getSkillData() {
      let data = this.getSkillsBuilder;
      data = data[this.nav];
      return data;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.skills-section-container {
  height: 100%;
  width: 100%;
  @include flex(column, flex-start, flex-start);
  h1 {
    font-size: 1.5em;
    font-weight: 100;
    margin: 2rem 0;
  }
  .skills-section-content {
    width: 90%;
    height: 100%;
    @include flex(row, flex-start, flex-start);
    flex-wrap: wrap;
    gap: 1em;
    overflow-y: auto;
    padding: 1em 0;
    .skill-item {
      width: 20%;
      min-width: 200px;
      height: 18em;
      border: 1px solid $portfolioBorder;
      padding: 1em;
      @include flex(column, flex-start, center);
      gap: 1em;
      .top-title {
        width: 100%;
        gap: 1rem;
        @include flex(column, space-between, center);
        h2 {
          font-size: 1em;
          font-weight: 100;
        }
        p {
          font-size: 0.8em;
          font-weight: 100;
        }
      }
      .item-text {
        width: 100%;
        height: 100%;
        text-align: center;
        @include flexCenter(column);
        p {
          font-size: 0.8em;
          font-weight: 100;
        }
      }
    }
  }
}
</style>
