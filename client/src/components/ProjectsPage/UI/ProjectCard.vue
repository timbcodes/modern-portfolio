<template>
  <div class="project-card-container">
    <div class="project-card">
      <div class="project-image-container">
        <img
          :src="require(`@/assets/images/${project.image}`)"
          alt="project image"
        />
      </div>
      <div class="project-details-container">
        <div class="project-card-title">
          <h1>{{ project.title }}</h1>
        </div>
        <div class="project-card-description">
          <p>{{ project.description }}</p>
        </div>
        <div class="project-card-links">
          <div class="project-card-link">
            <a :href="project.link" target="_blank">
              <p>{{ project.website }}</p>
            </a>
          </div>
        </div>
        <div class="project-launch">
          <p>{{ project.launchDate }}</p>
        </div>
        <div class="status">
          <p>Status: {{ project.status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.project-card-container {
  @include flexCenter;
  width: 80%;
  height: 100%;
  .project-card {
    width: 100%;
    height: 100%;
    border: 1px solid $portfolioBorder;
    @include flex(row, flex-start, center);
    margin: 1em;
    .project-image-container {
      width: 20%;
      height: 100%;
      @include flexCenter;
      img {
        width: 100%;
        border-top: 1px solid $portfolioBorder;
        border-bottom: 1px solid $portfolioBorder;
      }
    }
    .project-details-container {
      width: 80%;
      height: 100%;
      border-left: 1px solid $portfolioBorder;
      gap: 0.5em;
      padding: 1em;
      @include flex(column, flex-start, flex-start);
      .project-card-title {
        width: 100%;
        height: 10%;
        @include flexCenter;
        h1 {
          font-size: 1.5em;
          font-weight: 100;
        }
      }
      .project-card-description {
        width: 100%;
        height: 30%;
        @include flexCenter;
        p {
          font-size: 1em;
          font-weight: 100;
          text-align: center;
        }
      }
      .project-card-links {
        width: 100%;
        height: 10%;
        @include flexCenter;
        .project-card-link {
          width: 100%;
          height: 100%;
          @include flexCenter;
          a {
            width: 100%;
            height: 100%;
            @include flexCenter;
            p {
              font-size: 1em;
              font-weight: 100;
            }
          }
        }
      }
      .project-launch {
        width: 100%;
        height: 10%;
        @include flexCenter;
        p {
          font-size: 1em;
          font-weight: 100;
        }
      }
      .status {
        width: 100%;
        height: 10%;
        @include flexCenter;
        p {
          font-size: 1em;
          font-weight: 100;
        }
      }
    }
  }
}
</style>
