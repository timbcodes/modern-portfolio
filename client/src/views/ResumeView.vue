<template>
  <div class="main-home-container">
    <div class="navigation-side">
      <div class="nav-area">
        <IntroTypewriter />
        <Navigation />
      </div>
      <SocialLinkout />
    </div>
    <div class="content-side">
      <h1>Resume</h1>
      <div class="resume-container">
        <span v-for="item in resume" :key="item.id">
          <h2>{{ item.company }}</h2>
          <h3>{{ item.position }}</h3>
          <h4>{{ item.location }}</h4>
          <h5>{{ item.startDate }} - {{ item.endDate }}</h5>
          <p>{{ item.description }}</p>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import IntroTypewriter from "@/components/MainPage/UI/IntroTypewriter.vue";
import Navigation from "@/components/MainPage/UI/NavBar.vue";
import SocialLinkout from "@/components/MainPage/UI/SocialLinkout.vue";
export default {
  name: "HomeView",
  components: {
    IntroTypewriter,
    Navigation,
    SocialLinkout,
  },
  computed: {
    ...mapGetters(["getResume"]),
    resume() {
      return this.getResume;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.main-home-container {
  @include flexCenter;
  width: 100%;
  height: 100%;
  .navigation-side {
    width: 20%;
    height: 100%;
    @include flex(column, space-between, flex-start);
    gap: 1em;
  }
  .content-side {
    width: 100%;
    height: 100%;
    padding-left: 3em;
    overflow-y: auto;
    h1 {
      font-size: 2rem;
      font-weight: 100;
      margin-top: 1em;
    }
    .resume-container {
      width: 80%;
      height: 100%;
      margin-top: 2em;
      margin-left: 2em;
      @include flex(column, space-between, flex-start);
      gap: 2em;
      span {
        width: 100%;
        height: 100%;
        padding-bottom: 1em;
        h2 {
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 0.5em;
          color: $portfolioPink;
        }
        h3 {
          font-size: 1.2rem;
          font-weight: 400;
          margin-bottom: 0.25em;
        }
        h4 {
          font-size: 1rem;
          font-weight: 100;
          margin-bottom: 0.25em;
        }
        h5 {
          font-size: 0.75rem;
          font-weight: 100;
          margin-bottom: 0.5em;
        }
        p {
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.25;
        }
      }
    }
  }
}
</style>
