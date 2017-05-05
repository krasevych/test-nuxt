<script src="./Skills.js"></script>

<template lang="pug">
  section.about
    .container
      kr-section-header(
      :title="title",
      :description="description"
      )

      .row.justify-content-between
        .col-md-6
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corrupti, quibusdam assumenda harum, error atque labore minus.
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corrupti, quibusdam assumenda harum, error atque labore minus.

        .col-md-5
          kr-item-progress.skill-progress(
          v-for="skill in skills",
          :title="skill.title",
          :progress="skill.progress"
          )
</template>

<style scoped lang="scss">
  .about {
    background: #fff;
  }

  .skill-progress {
    margin-bottom: 25px;
  }
</style>


