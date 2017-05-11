<script src="./Header.js"></script>

<template lang="pug">
  header.header
    .container
      b-navbar.navbar-container(
      toggleable,
      type="inverse"
      )
        kr-logo
        b-nav-toggle(target="nav_collapse")
        b-collapse#nav_collapse.nav-collapse(is-nav)
          kr-navigation(:items="navItems")
</template>

<style scoped lang="scss">
  .header {
    position: fixed;
    width: 100%;
    z-index: 2;

    &.scroll-active {
      background: rgba(0,0,0, .8);
    }
  }

  .nav-collapse {
    justify-content: flex-end;
  }
</style>