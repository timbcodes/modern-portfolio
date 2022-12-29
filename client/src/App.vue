<template>
  <div v-if="displayWelcome" class="welcome-container">
    <div class="welcome-text">
      <h1>hello there.</h1>
    </div>
    <div class="logo-text">
      <h2>timb.<span>codes</span>()</h2>
    </div>
  </div>
  <div v-if="!displayWelcome" class="site-container">
    <div class="main-content-container">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      displayWelcome: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.displayWelcome = false;
    }, 3000);
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.welcome-container {
  @include flexCenter;
  width: 100%;
  height: 100vh;
  .welcome-text {
    h1 {
      font-size: 3rem;
      font-weight: 100;
      -webkit-animation: fadeinout 3s;
      animation: fadeinout 3s;
      opacity: 0;
    }
  }
  .logo-text {
    position: absolute;
    bottom: 20px;
    right: 20px;
    h2,
    span {
      font-size: 1.5rem;
      font-weight: 100;
      // fade out after 2.5s
      -webkit-animation: fadeout 3s;
      animation: fadeout 3s;
      opacity: 1;
    }
    span {
      color: $portfolioPink;
    }
  }
  @-webkit-keyframes fadeinout {
    50% {
      opacity: 1;
    }
  }
  @keyframes fadeinout {
    50% {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeout {
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fadeout {
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
.site-container {
  @include flexCenter;
  width: 100%;
  height: 100vh;
  -webkit-animation: fadein 500ms; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 500ms; /* Firefox < 16 */
  -ms-animation: fadein 500s; /* Internet Explorer */
  -o-animation: fadein 500ms; /* Opera < 12.1 */
  animation: fadein 500ms;
  .mode-toggle-container {
    position: absolute;
    bottom: 60px;
    left: 5px;
  }
  .main-content-container {
    width: calc(100% - 75px);
    height: calc(100% - 75px);
    border: 1px solid $portfolioBorder;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
