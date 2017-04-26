<script src="./BgImage.js"></script>

<template lang="pug">
    div(:class="$style.container")
        image-slider(:images="images")
</template>

<style module lang="scss">
    .container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
</style>


