<script src="./Navigation.js"></script>

<template lang="pug">
  b-nav(
  is-nav-bar
  :class="isScrolling && $style.isScrolling",
  )
    kr-scroll-listener(@change="scrollChanged")
    b-nav-item(
    :class="$style.navItem",
    :key="index",
    v-for="(item, index) in items"
    )
      span {{item}}
</template>

<style module lang="scss">
  @import '~src/css/_variables.scss';

  $delay: .5s;

  .isScrolling .navItem {
    a {
      padding: 15px !important;
      transition: all $delay;
    }
  }

  .navItem {
    a {
      position: relative;
      padding: 27px 15px !important;
      color: #fff !important;
      transition: padding $delay;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
        background: $brand-primary;
        transition: height $delay;
      }
      &:hover, &.active {
        overflow: hidden;
        color: $brand-primary !important;
        transition: color $delay;

        &:before {
          height: 3px;
          transition: height $delay;
        }
      }
    }
  }
</style>
