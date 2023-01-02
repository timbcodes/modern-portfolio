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
      <h1>Contact</h1>
      <div class="contact-form-container">
        <form action="https://formspree.io/f/xnqoqzjy" method="POST">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" />
          <!-- create a bot trap field -->
          <input type="text" name="city" v-show="false" />
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
          <label for="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
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
    width: 80%;
    height: 100%;
    margin-left: 4em;
    h1 {
      font-size: 2.25rem;
      font-weight: 100;
      margin-top: 1em;
    }
    .contact-form-container {
      width: 100%;
      height: 80%;
      @include flexCenter(column);
      gap: 1em;
      form {
        width: 40%;
        height: 100%;
        @include flex(column, center, flex-start);
        gap: 1em;
        label {
          font-size: 1.25rem;
          font-weight: 100;
        }
        input,
        textarea {
          width: 100%;
          height: 2em;
          border: none;
          border-bottom: 1px solid $portfolioPink;
          background-color: transparent;
          font-size: 1.25rem;
          font-weight: 100;
          color: $portfolioWhite;
          &:focus {
            outline: none;
          }
        }
        button {
          width: 20%;
          height: 2em;
          border: none;
          background-color: $portfolioPink;
          color: $portfolioWhite;
          font-size: 1.25rem;
          font-weight: 100;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
