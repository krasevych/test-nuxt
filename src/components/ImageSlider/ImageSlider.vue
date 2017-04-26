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

<style>
    .slide-fade-enter-active {
        transition: all .5s ease;
        opacity: 1;
    }

    .slide-fade-leave-active {
        transition: all .5s ease;
    }

    .slide-fade-enter, .slide-fade-leave-to {
        position: absolute;
        opacity: 0;
    }
</style>
<style module>
    .fullSize {
        width: 100%;
    }
</style>

