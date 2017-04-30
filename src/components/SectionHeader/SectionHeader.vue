<script src="./SectionHeader.js"></script>

<template lang="pug">
  .header
    h2.title {{title}}
    .description {{description}}
</template>

<style scoped lang="scss">
  .header {
    margin: 40px 0 70px;
    text-align: center;

    .title {
      margin-bottom: 0;
      color: #565656;
      font-size: 40px;
      font-weight: normal;
      text-transform: uppercase;
    }

    .description {
      margin-top: 5px;
      color: #aaa;
      font-size: 18px;

      &:first-letter {
        text-transform: capitalize;
      }
    }
  }
</style>


