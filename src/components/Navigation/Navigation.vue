<script src="./Navigation.js"></script>

<template lang="pug">
  b-nav(is-nav-bar)
    b-nav-item(
    :class="$style.navItem",
    :key="index",
    v-for="(item, index) in items"
    ) {{item}}
</template>

<style module lang="scss">
  .navItem {
    a {
      color: #fff !important;
    }

    &:hover {
      a {
        color: #fff;
        transition: all .5s;
        background: rgba(243, 95, 77, 0.5);
        border-radius: 1px;
      }
    }
  }
</style>
