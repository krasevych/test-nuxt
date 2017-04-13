<script src='./Home.js'></script>
<template lang='pug'>
    .home
        h1 {{ test }}
        h1 {{ fullName }}
        input(type='text' v-model='username')
        button(@click='changeName') Change Name
</template>
