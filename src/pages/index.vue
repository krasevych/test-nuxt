<template lang="pug">
    div(:class="$style.container")
        home
</template>

<script>
  import Home from 'src/components/Home/Home.vue';

  export default {
    components: {
      Home
    },
  };
</script>

<style module lang="scss">
    .container {
        position: relative;
        z-index: 1;
    }
</style>
