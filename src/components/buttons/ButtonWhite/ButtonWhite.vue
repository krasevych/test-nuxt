<script src="./ButtonWhite.js"></script>

<template lang="pug">
    div(:class="$style.buttonWhite")
        slot
</template>

<style module lang="scss">
    $red: #F35F4d;

    .buttonWhite {
        padding: 15px 35px;
        display: inline-block;

        color: #fff;
        border-radius: 3px;
        text-transform: uppercase;
        cursor: pointer;
        font-size: 14px;
        line-height: 14px;
        font-weight: 700;
        background: rgba(244,244,244,0.3);
        border: 1px solid #fafafa;
        transition: all 0.5s;

        &:hover{
            color: $red;
            background: rgba(244,244,244,0.8);
            font-weight: 700;
        }
    }
</style>


