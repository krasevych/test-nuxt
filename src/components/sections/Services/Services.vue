<script src="./Services.js"></script>

<template lang="pug">
  section.services
    .container
      kr-section-header(
      :title="title",
      :description="description"
      )

      .row
        kr-octagon(
        v-for="octagon in octagons",
        :image="octagon.image",
        :title="octagon.title",
        :content="octagon.content"
        ).col-md-3.col-sm-6
</template>

<style scoped lang="scss">
  .services {
    background: #fff;
  }
</style>


