<template>
  <div class="projects-container">
    <div class="projects-title">
      <h1>Projects</h1>
    </div>
    <div class="projects-card-container">
      <div class="current-projects-container">
        <h2>Current Projects</h2>
        <div class="current-projects">
          <div v-for="project in curProjects" :key="project.id">
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>
      <div class="completed-projects-container">
        <h2>Completed Projects</h2>
        <div class="completed-projects">
          <div v-for="project in compProjects" :key="project.id">
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ProjectCard from "@/components/ProjectsPage/UI/ProjectCard.vue";
export default {
  name: "ProjectsDisplay",
  components: {
    ProjectCard,
  },
  computed: {
    ...mapGetters(["currentProjects", "completedProjects"]),
    curProjects() {
      return this.currentProjects;
    },
    compProjects() {
      return this.completedProjects;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.projects-container {
  @include flex(column, flex-start, flex-start);
  width: 100%;
  height: 100%;
  .projects-title {
    width: 100%;
    height: 10%;
    margin-bottom: 2em;
    @include flex(row, flex-start, center);
    h1 {
      font-size: 2em;
      font-weight: 100;
    }
  }
  .projects-card-container {
    width: 100%;
    height: 100%;
    gap: 1em;
    overflow-y: auto;
    .current-projects-container,
    .completed-projects-container {
      width: 100%;
      @include flex(column, space-between, flex-start);
      gap: 1em;
      h2 {
        font-size: 1.5em;
        font-weight: 100;
      }
    }
    .current-projects,
    .completed-projects {
      width: 100%;
      height: 100%;
      gap: 1em;
      margin-bottom: 2em;
    }
  }
}
</style>
