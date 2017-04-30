<template lang="pug">
  .index-page
    kr-home
    kr-services
</template>

<script>
  import Home from 'src/components/sections/Home/Home.vue';
  import Services from 'src/components/sections/Services/Services.vue';

  export default {
    components: {
      'kr-home': Home,
      'kr-services': Services
    },
  };
</script>

<style scoped lang="scss">
  .index-page {
    z-index: 1;
    display: flex;
    position: relative;
    flex-direction: column;
  }
</style>
