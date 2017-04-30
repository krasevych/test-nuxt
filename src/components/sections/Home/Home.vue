<script src="./Home.js"></script>

<template lang="pug">
  section.home
    .container
      h1.title Create awesome landing page for your Businesses
      kr-button-white let's start
</template>

<style scoped lang="scss">
  .home {
    min-height: 700px;
    position: relative;

    overflow: hidden;
    background: rgba(0, 0, 0, 0.5);
  }

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .title {
    z-index: 0;
    line-height: 65px;
    text-align: center;
    margin: 250px 0 30px;

    color: #FFF;
    font-size: 35px;
    font-weight: 700;
    text-transform: uppercase;
  }
</style>


