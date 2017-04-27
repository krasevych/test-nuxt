<script src="./ImageSlider.js"></script>

<template lang="pug">
    div
        kr-transition(name='slide-fade')
            img(
            :key="currentNumber",
            :src="images[currentNumber]",
            :class="$style.fullSize"
            )
</template>

<style module>
    .fullSize {
        width: 100%;
    }
</style>

