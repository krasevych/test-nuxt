<script src="./Home.js"></script>

<template lang="pug">
  section(:class="$style.home")
    .container(:class="$style.homeContainer")
      h1(:class="$style.title") Affordable Quality services for Small Businesses
      button-white let's start
</template>

<style module lang="scss">
  .home {
    position: relative;
    min-height: 700px;

    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }

  .homeContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    z-index: 0;
    margin: 250px 0 30px;
    line-height: 65px;
    text-align: center;

    color: #FFF;
    font-size: 50px;
    font-weight: 700;
    text-transform: uppercase;
  }
</style>


