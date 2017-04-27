<script src="./Header.js"></script>

<template lang="pug">
  header(:class="$style.container")
    b-navbar(
    toggleable,
    type="inverse",
    :class="$style.navbarContainer"
    )
      logo
      b-nav-toggle(target="nav_collapse")
      b-collapse#nav_collapse(
      is-nav,
      :class="$style.navCollapse"
      )
        navigation(:items="navItems")
</template>

<style module lang="scss">
  .container {
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 2;
  }

  .navbarContainer {
    box-shadow: 0 0 1px #ddd;
  }

  .navCollapse {
    justify-content: flex-end;
  }
</style>