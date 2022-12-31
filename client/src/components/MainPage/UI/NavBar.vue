<template>
  <div class="navbar-container">
    <div class="navbar-menu">
      <span v-for="item in menuItems" :key="item.name">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      menuItems: [
        { name: "home", link: "/" },
        { name: "info", link: "/info" },
        { name: "projects", link: "/projects" },
        { name: "resume", link: "/resume" },
        // { name: "blog", link: "/blog" },
        { name: "contact", link: "/contact" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.navbar-container {
  width: 100%;
  height: 100%;
  margin-left: 2em;
  .navbar-menu {
    width: 100%;
    height: 100%;
    @include flex(column, flex-start, flex-start);
    span {
      font-size: 1.5rem;
      font-weight: 100;
      a {
        color: $portfolioWhite;
        text-decoration: none;
        &:hover {
          color: $portfolioPink;
        }
      }
    }
    .router-link-active {
      color: $portfolioPink;
    }
  }
}
</style>
