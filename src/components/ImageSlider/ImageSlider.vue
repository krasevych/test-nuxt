<script src="./ImageSlider.js"></script>

<template lang="pug">
    div
        img(
        :src="currentImage",
        :class="$style.fullSize"
        )
</template>

<style module>
    .fullSize {
        width: 100%;
    }
</style>

